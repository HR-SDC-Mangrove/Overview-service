/* eslint-disable no-unused-vars */
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
  products: (req, res) => {
    const inputId = req.url.split('=')[1];
    const promiseRedis = new Promise((resolve, reject) => {
      client.get(inputId, (err, reply) => {
        resolve(reply);
      });
    });
    promiseRedis.then((redisResponse) => {
      if (redisResponse) {
        const final = JSON.parse(`${redisResponse}`);
        res.send(final);
      } else {
        db.models.Product.find({ id: inputId })
          .then((product) => {
            new Promise((resolve, reject) => {
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              const finalProduct = helper.createFinalProduct(product[0], finalStyles);
              client.set(inputId, JSON.stringify(finalProduct));
              resolve(finalProduct);
            }).then((data) => {
              res.send(data);
            });
          })
          .catch((error) => {
            console.log(error);
            res.send(400);
          });
      }
    }).catch((err) => {
      console.log(err);
      res.send(400);
    });
  },
  updateProduct: (req, res) => {
    console.log(req.body)
    res.send('received')

  },

  // products: async (req, res) => {
  //   const inputId = req.url.split('=')[1];
  //   client.get(inputId, (err, reply) => {
  //     if (reply !== null) {
  //       const final = JSON.parse(reply);
  //       res.send(final);
  //     } else {
  //       db.models.Product.find({ id: inputId })
  //         .then((product) => {
  //           const { styles } = product[0];
  //           const finalStyles = helper.createFinalStyles(styles, inputId);
  //           const finalProduct = helper.createFinalProduct(product[0], finalStyles);
  //           client.set(inputId, JSON.stringify(finalProduct));
  //           res.send(finalProduct);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           res.send(400);
  //         });
  //     }
  //   });
};
