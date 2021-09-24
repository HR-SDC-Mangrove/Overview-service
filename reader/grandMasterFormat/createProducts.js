/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const csv = require('fast-csv');

const dest = fs.createWriteStream('../json/products.json');
const arr = [];

const createProducts = async (rows, currentCount, currentMinCount) => new Promise((resolve) => {
  fs.createReadStream('../csvs/product.csv')
    .pipe(csv.parse({ headers: true, maxRows: rows }))
    .on('error', (error) => { console.error(error); })
    .on('data', (row) => {
      const count = row.product_id;
      if (count >= currentMinCount && count <= currentCount) {
      // console.log(row.product_id)
        const newObj = {
          id: Number(row.product_id),
          name: row.product_name,
          slogan: row.product_slogan,
          description: row.product_description,
          category: row.product_category,
          default_price: row.product_default_price,
          styles: [],
          features: [],
        };
        arr.push(newObj);
      }
    })
    .on('end', (rowCount) => {
      console.log('finished reading, writing transformed data...✅');
      dest.write(JSON.stringify(arr));
      resolve(true);
    });
});

module.exports.createProducts = createProducts;
