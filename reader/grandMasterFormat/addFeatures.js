/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
const fs = require('fs');
const csv = require('fast-csv');

const dest = fs.createWriteStream('../json/productsWFeatures.json');
const { getFileAsObject } = require('../loader');

let records = [];
const createProductsWithFeatures = async (rows, endId, startId) => {
  records = await getFileAsObject('products');
  return new Promise((resolve) => {
    fs.createReadStream('../csvs/features.csv')
      .pipe(csv.parse({ headers: true, maxRows: rows }))
      .on('error', (error) => { console.error(error); })
      .on('data', (row) => {
        const a = async () => {
          const count = row.feature_product_id_ref;
          if (count >= startId && count <= endId) {
            if (count == 10000 || count == 25000 || count == 35000 || count == 45000) {
              console.log(count, '✅');
            }

            const newFeature = {
              feature: row.feature,
              value: row.feature_value,
            };

            if (records[Number(row.feature_product_id_ref - 950001)]) {
              await records[row.feature_product_id_ref - 950001].features.push(newFeature);
            }
          }
        };
        a();
      })
      // eslint-disable-next-line no-unused-vars
      .on('end', (rowCount) => {
        console.log('finished reading, writing transformed data...');
        dest.write(JSON.stringify(records));
        resolve(true);
      });
  });
};
module.exports.createProductsWithFeatures = createProductsWithFeatures;
