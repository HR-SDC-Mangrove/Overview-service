/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const csv = require('fast-csv');

const dest = fs.createWriteStream('../json/styles.json');
const finalObj = {};

const createStyles = async (rows, maxStyleId, minStyleId) => new Promise((resolve) => {
  fs.createReadStream('../csvs/styles.csv')
    .pipe(csv.parse({ headers: true, maxRows: rows }))
    .on('error', (error) => { console.error(error); })
    .on('data', (row) => {
      const a = async () => {
        const count = row.style_id;
        if (count >= minStyleId && count <= maxStyleId) {
          const newObj = {
            id: row.style_id,
            product_id_ref: row.style_productId_ref,
            name: row.style_name,
            original_price: row.style_original_price,
            sale_price: row.style_sale_price,
            default: row.style_default_style,
            photos: [],
            skus: {},
          };
          finalObj[row.style_id] = newObj;
        }
      };
      a();
    })
    // eslint-disable-next-line no-unused-vars
    .on('end', (rowCount) => {
      console.log('finished reading, writing transformed data...✅');

      dest.write(JSON.stringify(finalObj));
      resolve(true);
    });
});
module.exports.createStyles = createStyles;
