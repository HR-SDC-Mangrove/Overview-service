const { db } = require('../database');

module.exports = {
  products: (req, res) => {
    const productId = Number(req.url.split('=')[1]);
    db.any('select distinct * from products full outer join features on products.product_id=features.feature_product_id_ref full outer join styles on products.product_id=styles.style_productId_ref full outer join photos on styles.style_id=photos.photo_styleId_ref full outer join skus on styles.style_id=skus.sku_styleId_ref where products.product_id=$1 order by styles.style_id,photos.photo_id', [productId])
      .then((allData) => {
        const createNonDupFeatures = () => {
          const countArr = [];
          const finalFeatures = {};
          const finalProduct = {
            id: allData[0].product_id,
            name: allData[0].product_name,
            slogan: allData[0].product_slogan,
            description: allData[0].product_description,
            category: allData[0].product_category,
            default_price: Number(allData[0].product_default_price),
            created_at: allData[0].created_at,
            updated_at: allData[0].updated_at,
            features: {},
          };
          allData.forEach((obj) => {
            if (!countArr.includes(obj.feature_id)) {
              countArr.push(obj.feature_id);
              finalFeatures[obj.feature_id] = {
                feature: obj.feature,
                value: obj.feature_value,
              };
            }
          });
          finalProduct.features = [finalFeatures];
          return finalProduct;
        };
        const finalProduct = createNonDupFeatures();
        const createNonDupStyles = () => {
          const countArr = [];
          const newStyles = [];
          allData.forEach((obj) => {
            if (!countArr.includes(obj.style_id)) {
              countArr.push(obj.style_id);
              const newStyle = {
                style_key: obj.style_key,
                style_id: obj.style_id,
                style_product_ref: obj.style_productid_ref,
                style_name: obj.style_name,
                style_sale_price: obj.style_sale_price,
                style_original_price: Number(obj.style_original_price),
                style_default_style: obj.style_default_style,
              };

              newStyles.push(newStyle);
            }
            return newStyles;
          });
          return newStyles;
        };
        const nonDupStyles = createNonDupStyles();

        const createNonDupPhotos = () => {
          const countArr = [];
          const newPhotos = [];
          allData.forEach((obj) => {
            if (!countArr.includes(obj.photo_id)) {
              countArr.push(obj.photo_id);
              const newObj = {
                photo_key: obj.photo_key,
                photo_id: obj.photo_id,
                photo_styleid_ref: obj.photo_styleid_ref,
                photo_url: obj.photo_url,
                photo_thumbnail_url: obj.photo_thumbnail_url,
              };
              newPhotos.push(newObj);
            }
          });
          return newPhotos;
        };
        const nonDupPhotos = createNonDupPhotos();

        const createNonDupSkus = () => {
          const countArr = [];
          let newSkus = [];
          allData.forEach((obj) => {
            if (!countArr.includes(obj.sku_id)) {
              countArr.push(obj.sku_id);
              const newSku = {
                sku_key: obj.sku_key,
                sku_id: obj.sku_id,
                sku_styleid_ref: obj.sku_styleid_ref,
                sku_size: obj.sku_size,
                sku_quantity: obj.sku_quantity,
              };
              newSkus.push(newSku);
              newSkus = newSkus.sort((a, b) => a.sku_id - b.sku_id);
            }
          });
          return newSkus;
        };

        const nonDupSkus = createNonDupSkus();

        nonDupStyles.every((style) => style.style_default_style === 0);
        if (nonDupStyles.every((style) => style.style_default_style === 0)) {
          nonDupStyles[0].style_default_style = 1;
        }
        const finalStyles = nonDupStyles.map((style) => {
          const finalStyle = {
            style_id: null,
            name: null,
            style_original_price: null,
            default: true,
            photos: [{
              thumbnail_url: 'https://i.ibb.co/H40jXLQ/download.jpg',
              url: 'https://i.ibb.co/H40jXLQ/download.jpg',
            }],
            skus: {},
          };
          const finalPhotos = [];

          nonDupPhotos.forEach((photo) => {
            let def = false;
            if (style.style_default_style === 1) {
              def = true;
            }

            const finalPhotosObj = {
              thumbnail_url: photo.photo_thumbnail_url,
              url: photo.photo_url,
            };

            if (style.style_id === photo.photo_styleid_ref) {
              let saleP = style.style_sale_price;
              if (style.style_sale_price === 'null') {
                saleP = null;
              }
              finalPhotos.push(finalPhotosObj);
              finalStyle.style_id = style.style_id;
              finalStyle.name = style.style_name;
              finalStyle.original_price = Number(style.style_original_price);
              finalStyle.sale_price = saleP;
              finalStyle.default = def;
              finalStyle.photos = finalPhotos;
            }
          });

          if (finalStyle.photos[0].thumbnail_url === null) {
            finalStyle.photos[0] = {
              thumbnail_url: 'https://i.ibb.co/H40jXLQ/download.jpg',
              url: 'https://i.ibb.co/H40jXLQ/download.jpg',
            };
            finalStyle.default = true;
          }

          const finalSku = {};

          nonDupSkus.forEach((sku) => {
            if (style.style_id === sku.sku_styleid_ref) {
              finalSku[sku.sku_id] = {
                quantity: sku.sku_quantity,
                size: sku.sku_size,
              };

              finalStyle.skus = finalSku;
            }
          });
          return finalStyle;
        });
        const resultStyles = {
          product_id: productId,
          results: finalStyles,
        };

        const response = [finalProduct, resultStyles];
        res.send(response);
      });
  },
};
