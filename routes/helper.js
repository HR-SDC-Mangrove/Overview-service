/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
module.exports = {
  createFinalStyles: (stylesArr, id) => {
    const finalStyle = {
      results: [],
    };

    finalStyle.product_id = id.toString();

    if (stylesArr.length) {
      stylesArr.forEach((style) => {
        let salesPrice;
        let defaultS = false;
        const ogPrice = `${style.original_price}.00`;
        let { photos } = style;

        if (style.default === '1') {
          defaultS = true;
        }

        if (style.sale_price === 'null') {
          salesPrice = null;
        } else {
          salesPrice = `${style.sale_price}.00`;
        }

        Object.values(style.skus).forEach((sku) => {
          // eslint-disable-next-line no-param-reassign
          sku.quantity = Number(sku.quantity);
        });

        if (!photos.length) {
          photos = [
            {
              url: 'https://i.ibb.co/1svJRPM/photo-coming-soon.jpg',
              thumbnail_url: 'https://i.ibb.co/hX7124c/photo-coming-soon.jpg',
            },
          ];
        }
        if (!Object.keys(style.skus).length) {
          const noSku = {};
          noSku[1] = {
            quantity: 1,
            size: 'not availible',
          };
          style.skus = noSku;
        }

        const finalObj = {
          style_id: Number(style.id),
          name: style.name,
          original_price: ogPrice,
          sale_price: salesPrice,
          default: defaultS,
          // eslint-disable-next-line object-shorthand
          photos: photos,
          skus: style.skus,
        };
        finalStyle.results.push(finalObj);
      });
    } else {
      const noSku = {};
      noSku[1] = {
        quantity: 1,
        size: 'not availible',
      };
      const finalObj = {
        style_id: 1,
        name: 'no styles for product',
        original_price: '0.00',
        sale_price: null,
        default: true,
        // eslint-disable-next-line object-shorthand
        photos: [
          {
            url: 'https://i.ibb.co/1svJRPM/photo-coming-soon.jpg',
            thumbnail_url: 'https://i.ibb.co/hX7124c/photo-coming-soon.jpg',
          },
        ],
        skus: noSku,
      };
      finalStyle.results.push(finalObj);
    }

    return finalStyle;
  },
  createFinalProduct: (productObj, styleObj) => {
    const feature = null;
    const finalFeatures = productObj.features.filter((f) => {
      if (f.value === 'null') {
        // eslint-disable-next-line no-param-reassign
        f.value = feature;
      }
      return f;
    });
    const finalProduct = {
      id: Number(productObj.id),
      name: productObj.name,
      slogan: productObj.slogan,
      description: productObj.description,
      category: productObj.category,
      default_price: `${productObj.default_price.toString()}.00`,
      styles: styleObj,
      features: finalFeatures,
      created_at: productObj.created_at,
      updated_at: productObj.updated_at,
    };
    return finalProduct;
  },

  // create a function that accecpts a string, and runs the correct update function
  // on the request body.
  createDbUpdateObj: (requestObj) => {
    const productUpdate = requestObj.product;
    const featureUpdate = requestObj.feature;
    const styleUpdate = requestObj.style;
    const stylePhotoUpdate = requestObj.photo;
    const styleSkuUpdate = requestObj.sku;
    let finalDbObj;
    let tempObj = {};

    if (productUpdate) {
      tempObj = {
        id: requestObj.product_id ? requestObj.product_id : null,
        name: requestObj.product_name ? requestObj.product_name : null,
        slogan: requestObj.product_slogan ? requestObj.product_slogan : null,
        description: requestObj.product_description ? requestObj.product_description : null,
        category: requestObj.product_category ? requestObj.product_category : null,
        default_price: requestObj.product_default_price ? requestObj.product_default_price : null,
        features: requestObj.product_features ? requestObj.product_features : null,
      };
      finalDbObj = Object.fromEntries(Object.entries(tempObj).filter(([_, v]) => v != null));
      finalDbObj.product = true;
      return finalDbObj;
    }
    // to update product feature
    if (featureUpdate) {
      if (requestObj.add) {
        tempObj.features = Array.from(requestObj.features)
        tempObj.feature = true;
        tempObj.add = true;
        tempObj.id = requestObj.product_id;
        return tempObj;
      }
      if (requestObj.remove) {
        tempObj.features = Array.from(requestObj.features)
        tempObj.feature = true;
        tempObj.remove = true;
        tempObj.id = requestObj.product_id;
        return tempObj;
      }
    }
    // to update a styles primitive properties
    if (styleUpdate) {
    // need product_id, styles_id, and the style primitive values
      tempObj.id = requestObj.style_id;
      tempObj.product_id_ref = requestObj.product_id;
      tempObj.name = requestObj.style_name ? requestObj.style_name : null;
      tempObj.original_price = requestObj.style_original_price ? requestObj.style_original_price : null;
      tempObj.sale_price = requestObj.style_sale_price ? requestObj.style_sale_price : null;
      tempObj.default = requestObj.style_default ? requestObj.style_default : null;
      tempObj.photos = null;
      tempObj.skus = null;
      finalDbObj = Object.fromEntries(Object.entries(tempObj).filter(([_, v]) => v != null));
      finalDbObj.style = true;
      return finalDbObj;
    }
    // to update a styles photo
    if (stylePhotoUpdate) {
    // need product_id, style_id, and original photo or thumbail + replacement data
    }
    // to update a styles sku
    if (styleSkuUpdate) {
    // need product_id, style_id, and sku_id + replacement property/properties
    }
  },
};
