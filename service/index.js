const express = require('express');
const app = express();
const port = 3101;
// const { db } = require('../database/database');
const { products } = require('../routes/productRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/products/:product_id', products)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})



