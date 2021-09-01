const { db } = require('../database');

module.exports = {
  products: (req, res) => {
    const productId = Number(req.url.split('=')[1]);
    // console.log(productId)
    // const newNum = productId + 5;
    Promise.all([
      db.any('select * from products where product_id=$1', [productId]),
      db.any('select * from styles where productid=$1', [productId]),
      db.any('select * from features where product_id=$1', [productId]),

    ])
      .then((results) => {
        let idsForPhotos = results[1].slice();
        idsForPhotos = idsForPhotos.map((item) => item.id);

        const createPhotos = () => {
          const photos = [];
          return new Promise((resolve, reject) => {
            idsForPhotos.forEach((num) => {
              // console.log(num)
              db.any('select * from photos where styleId=$1', [num])
                .then((photoResult) => {
                  photos.push(photoResult);
                  if (photos.length === idsForPhotos.length) {
                    resolve(photos);
                  }
                })
                .catch((err) => reject(err));
            });
          });
        };

        const createSkus = () => {
          const skus = [];
          return new Promise((resolve, reject) => {
            idsForPhotos.forEach((num) => {
              db.any('select * from skus where styleId=$1', [num])
                .then((skuResult) => {
                  skus.push(skuResult);
                  if (skus.length === idsForPhotos.length) {
                    resolve(skus);
                  }
                })
                .catch((err) => reject(err));
            });
          });
        };

        Promise.all([
          createPhotos(),
          createSkus(),
        ])
          .then((photoNSku) => {
            const photoData = photoNSku[0];
            const skuData = photoNSku[1];
            const dbStyles = results[1];

            const stylesArr = dbStyles.map((style) => {
              let newPhotoArr;
              let newSkuArr;
              photoData.forEach((photoArr) => {
                if (photoArr.length) {
                  if (photoArr[0].styleid === style.id) {
                    newPhotoArr = photoArr.map((photo) => {
                      const newPhotoOBj = {
                        thumbnail_url: photo.thumbnail_url,
                        url: photo.style_url,
                      };
                      return newPhotoOBj;
                    });
                  }
                }
              });
              const newSkuObj = {};
              skuData.forEach((skuArr) => {
                if (skuArr.length) {
                  if (skuArr[0].styleid === style.id) {
                    newSkuArr = skuArr.map((sku) => {

                      newSkuObj[sku.id] = {
                        quantity: sku.quantity,
                        size: sku.size,
                      };

                      return newSkuObj;
                    });
                  }
                }
              });
              if (!newPhotoArr) {
                newPhotoArr =[{
                  thumbnail_url: null,
                  url: null,
                }];
              }
              if (!newSkuArr) {
                newSkuArr = {
                  null: {
                    quantity: null,
                    size: null,
                  },
                };
              }

              let d = false;
              if (style.default_style === 1) {
                d = true
              }

              const newStyleObj = {
                style_id: style.id,
                name: style.product_name,
                original_price: style.original_price,
                sale_price: style.sale_price,
                default: d,
                photos: newPhotoArr,
                skus: newSkuArr[0],
              };
              return newStyleObj;
            });
            const finalStyles = {};
            finalStyles.product_id = productId;
            finalStyles.results = stylesArr;

            const features = results[2];

            const finalFeatures = features.map((feature) => {
              const newFeatureObj = {
                feature: feature.feature,
                value: feature.feature_value,
              };
              return newFeatureObj;
            });

            const finalProduct = {
              id: productId,
              name: results[0][0].product_name,
              slogan: results[0][0].product_slogan,
              description: results[0][0].product_description,
              category: results[0][0].product_category,
              default_price: results[0][0].default_price,
              created_at: results[0][0].created_at,
              updated_at: results[0][0].updated_at,
              features: finalFeatures,
            };


            const response = [finalProduct, finalStyles];
            console.log(response[1].results[0].skus);
            res.send(response);
          });
      });
  },
};
