/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const csv = require('fast-csv');

const dest = fs.createWriteStream('../json/stylesWithPhotos.json');
const { getFileAsObject } = require('../loader');

let records = [];
const addPhotos = async (rows, endId, startId) => {
  records = await getFileAsObject('styles');

  return new Promise((resolve) => {
    fs.createReadStream('../csvs/combined.csv')
      .pipe(csv.parse({ headers: true, maxRows: rows }))
      .on('error', (error) => { console.error(error); })
      .on('data', (row) => {
        const a = async () => {
          const count = row.photo_id;
          if (count >= startId && count <= endId) {
            if (count == 25000 || count == 50000 || count == 100000 || count == 150000 || count == 200000 || count == 250000 || count == 284000) {
              console.log('current count ', count);
            }
            const newPhotos = {
              thmbnail_url: row.photo_thumbnail_url,
              url: row.photo_url,
            };
            // console.log(records.includes({id: 98285}))
            if (records[row.photo_styleId_ref]) {
              records[row.photo_styleId_ref].photos.push(newPhotos);
            }
            await records[row.photo_styleId_ref];
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
module.exports.addPhotos = addPhotos;
