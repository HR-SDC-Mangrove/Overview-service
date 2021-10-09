/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
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
  updateProduct: async (req, res) => {
    const doc = await db.models.Product.findOne({ id: req.body.product_id });
    const dbObj = helper.createDbUpdateObj(req.body, doc);

    if (dbObj.product) {
      doc.id = dbObj.id;
      doc.name = dbObj.name ? dbObj.name : doc.name;
      doc.slogan = dbObj.slogan ? dbObj.slogan : doc.slogan;
      doc.description = dbObj.description ? dbObj.description : doc.description;
      doc.category = dbObj.category ? dbObj.category : doc.category;
      doc.default_price = dbObj.default_price ? dbObj.default_price : doc.default_price;
      doc.styles = dbObj.styles ? dbObj.styles : doc.styles;
      doc.features = doc.features ? doc.features : doc.features;
      await doc.save();
      res.status(200).send('updated body ✅');
    }
    if (dbObj.feature) {
      if (dbObj.add) {
        // console.log(dbObj)\
        const newFeatures = [...doc.features];
        newFeatures.push(...dbObj.features);
        doc.features = newFeatures;
        await doc.save();
        res.status(200).send('added new features ✅');
      }
    }
    if (dbObj.remove) {
      const newFeatures = doc.features.filter((style) => {
        dbObj.features.forEach((feature) => {
          if (!feature.feature === style.feature) {
            return style;
          }
        });
      });
      doc.features = newFeatures;
      await doc.save();
      res.status(200).send('removed requested features ✅');
    }

    if (dbObj.style) {
      let newStyles = doc.styles.slice();
      // newStyles = newStyles.map((style) => {
      //   if (style.id === dbObj.id) {
      //     style.name = dbObj.name ? dbObj.name : style.name;
      //     style.original_price = dbObj.original_price ? dbObj.original_price : style.original_price;
      //     style.sale_price = dbObj.sale_price ? dbObj.sale_price : style.sale_price;
      //     style.default = dbObj.default ? dbObj.default : style.default;
      //   }
      //   return newStyles;
      // });
      // newStyles.id = '1'
      // newStyles.product_id_ref = 1
      // newStyles.name = 'Forest Green & Black';
      // newStyles.original_price = '140.00';
      // newStyles.sale_price = 'null';
      // newStyles.default = '1';
      // newStyles.photos = [];
      // newStyles.skus = {};
      // doc.styles = newStyles
      // console.log(doc)

      // doc.styles = newStyles
      // console.log(styles)

      // // console.log(doc)
      // // console.log(doc)
      // // await doc.save();
      // await doc.save();
      res.status(200).send('updated requested style primitive property ✅');
    }
  },
};
//  db.products.find({id:1, 'styles.id': '1', 'styles.skus.1.quantity': '8'})

// instructions for using update route

// how to update product primitives
// {
//   "product": true
//   "product_id": 1
//   "product_name": "whatever new name"
// }

// how to add or remove features
// {
//   "feature": true,
//   "product_id": 1,
//   "features": [
//       {"feature": "robs feature", "style": "contact seller"
//       },
//       {"feature": "robs 2nd feature", "style": "contact seller"
//       }
//   ],
//   "add": true

// }
