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

        photos = photos.map((photo) => {
          const newObj = {
            url: photo.url,
            thumbnail_url: photo.thmbnail_url,
          };
          return newObj;
        });

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

};
