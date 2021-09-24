const { db } = require('../database/database');
const helper = require('./helper');

module.exports = {
  products: (req, res) => {
    // const inputId = req.url.split('=')[1];
    // // console.log(req)

    // db.models.Product.find({ id: inputId })
    //   .then((product) => {
    //     // console.log(product)
    //     res.send(product[0])
    //     // console.log(result[0].styles)
    //     // res.send(result[0]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     res.send(400);
    //   });
  },
};
