const { db } = require('../database');

module.exports = {
  products: (req, res) => {
    const productId = Number(req.url.split('=')[1]);
    const newNum = productId + 5;

    Promise.all([
      db.any('select * from products where product_id between $1 and $2', [productId, newNum]),
      db.any('select * from styles where productId=$1', [productId]),
    ])
      .then((results) => {
        const products = results[0];
        const styles = results[1].slice();

        const finalStyles = styles.map((style) => {
          let d = null;
          if (style.default_style === 1) {
            d = true;
          }
          const newData = {
            style_id: style.id,
            name: style.product_name,
            original_price: style.original_price,
            sale_price: style.sale_price,
            default: d,
            photos: [],
            skus: [],
          };
          return newData;
        });

        const finalStylesObj = { product_id: productId, results: finalStyles };

        const createStyle = async () => {
          let finalPhotosAndSkus = [];
          return new Promise((resolve, reject) => {
            styles.forEach((style) => {
              Promise.all([
                db.any('select * from photos where styleId=$1', [style.id]),
                db.any('select * from skus where styleId=$1', [style.id]),
              ])
                .then((photoAndSku) => {
                  let finalProducts = products.slice();
                  let finalPhotos = photoAndSku[0].slice();

                  const finalSkus = {};
                  const skus = photoAndSku[1].slice();

                  skus.map((sku) => {
                    finalSkus[sku.id] = {
                      quantity: sku.quantity,
                      size: sku.size,
                    };
                    return finalSkus;
                  });

                  finalProducts = finalProducts.map((productData) => {
                    const newData = {
                      id: productData.product_id,
                      name: productData.product_name,
                      slogan: productData.product_slogan,
                      description: productData.product_description,
                      category: productData.product_category,
                      default_price: productData.default_price,
                      created_at: productData.created_at,
                      updated_at: productData.updated_at,
                    };
                    return newData;
                  });

                  finalPhotos = finalPhotos.map((photoData) => {
                    const newData = {
                      thumbnail_url: photoData.thumbnail_url,
                      url: photoData.style_url,
                    };
                    return newData;
                  });
                  finalPhotosAndSkus = [finalProducts, finalStylesObj, finalPhotos, finalSkus];
                  resolve(finalPhotosAndSkus);
                })
                .catch((err) => {
                  // console.log('wassupp error in your query 😪', err);
                  reject(err);
                  res.send(400, err);
                });
            });
          })
            .catch((err) => {
              res.send(400, err);
              // console.log('wassupp error in your query 😪', err);
            });
        };

        createStyle().then((finalResults) => {
          const responseProducts = finalResults[0];
          const responseStyles = Object.assign(finalResults[1], {});
          const responseStylesArr = responseStyles.results;
          const responseSkus = Object.assign(finalResults[3], {});

          const responsePhotos = finalResults[2];
          responseStylesArr.map((style) => {
            const newObj = Object.assign(style, {});
            newObj.photos = responsePhotos;
            newObj.skus = responseSkus;
            return newObj;
          });

          const response = [responseProducts, responseStyles];
          // console.log('products request response: ', response[1]);
          res.send(response);
        });
      })
      .catch((err) => {
        res.send(400, err);
      });
  },
};
