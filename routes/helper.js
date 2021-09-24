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
              url: null,
              thumbnail_url: null,
            },
          ];
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
    }

    return finalStyle;
  },
  createFinalProduct: () => {

  },
};
