const { db } = require('../database/database');
module.exports = {
  products: (req, res) => {
    let id = req.url.split('=')[1];
    console.log(id)

  },
}
