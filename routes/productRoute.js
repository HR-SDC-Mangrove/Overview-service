/* eslint-disable import/order */
const { db } = require('../database/database');
const helper = require('./helper');
const redis = require('redis');

const client = redis.createClient();

client.on('connect', () => {
  console.log('Connected!');
});
client.on('error', (err) => { console.log(err); });

module.exports = {
  products: async (req, res) => {
    const inputId = req.url.split('=')[1];
    client.get(inputId, (err, reply) => {
      if (reply !== null) {
        const final = JSON.parse(reply);
        res.send(final);
      } else {
        db.models.Product.find({ id: inputId })
          .then((product) => {
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);
            client.set(inputId, JSON.stringify(finalProduct));
            res.send(finalProduct);
          })
          .catch((error) => {
            console.log(error);
            res.send(400);
          });
      }
    });
  },
};
