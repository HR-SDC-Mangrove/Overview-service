const express = require('express');

const app = express();
const port = 3101;
const { products, updateProduct } = require('../routes/productRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/products/:product_id', products);
app.put('/products/:product_id', updateProduct);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
