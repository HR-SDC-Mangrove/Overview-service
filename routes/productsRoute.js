const { db } = require('../database');
const helper = require('./helpers');

module.exports = {
  products: (req, res) => {
    const productId = Number(req.url.split('=')[1]);
    db.any('select distinct * from products full outer join features on products.product_id=features.feature_product_id_ref full outer join styles on products.product_id=styles.style_productId_ref full outer join photos on styles.style_id=photos.photo_styleId_ref full outer join skus on styles.style_id=skus.sku_styleId_ref where products.product_id=$1 order by styles.style_id,photos.photo_id', [productId])
      .then((allData) => {
        const finalProduct = helper.createNonDupFeatures(allData);
        const nonDupStyles = helper.createNonDupStyles(allData);
        const nonDupPhotos = helper.createNonDupPhotos(allData);
        const nonDupSkus = helper.createNonDupSkus(allData);
        const resultStyles = helper.finalStyles(nonDupStyles, nonDupPhotos, nonDupSkus);
        const response = [finalProduct, resultStyles];
        res.send(response);
      });
  },
};
