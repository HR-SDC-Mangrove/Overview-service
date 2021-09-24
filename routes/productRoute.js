const { db } = require('../database/database');
const helper = require('./helper');

module.exports = {
  products: (req, res) => {
    const inputId = req.url.split('=')[1];
    db.models.Product.find({ id: inputId })
      .then((product) => {
        const { styles } = product[0];
        const finalStyles = helper.createFinalStyles(styles, inputId);
        const finalProduct = helper.createFinalProduct(product[0], finalStyles);
        res.send(finalProduct);
      })
      .catch((err) => {
        console.log(err);
        res.send(400);
      });
  },
};
