/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
const fs = require('fs');
const csv = require('fast-csv');

const dest = fs.createWriteStream('../json/completeStyles.json');
const { getFileAsObject } = require('../loader');

let records = [];
const addSkus = async (rows, endId, startId) => {
  records = await getFileAsObject('stylesWithPhotos');

  return new Promise((resolve) => {
    fs.createReadStream('../csvs/skus.csv')
      .pipe(csv.parse({ headers: true, maxRows: rows }))
      .on('error', (error) => { console.error(error); })
      .on('data', (row) => {
        const a = async () => {
          const count = row.id;
          if (count >= startId && count <= endId) {
            // eslint-disable-next-line max-len
            // eslint-disable-next-line eqeqeq
            if (count == 50000 || count == 100000 || count == 200000 || count == 300000 || count == 400000 || count == 500000 || count == 560000) {
              console.log('current count ', count);
            }
            // styleId
            const newSku = {
              quantity: row.quantity,
              size: row.size,
            };

            if (records[row.styleId]) {
              records[row.styleId].skus[row.id] = newSku;
            }
          }
        };
        a();
      })
      // eslint-disable-next-line no-unused-vars
      .on('end', (rowCount) => {
        console.log('finished transforming styles by adding photos, writing transformed data...');
        dest.write(JSON.stringify(records));
        resolve(true);
      });
  });
};
module.exports.addSkus = addSkus;
