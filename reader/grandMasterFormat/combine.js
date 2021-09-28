const fs = require('fs');

const dest = fs.createWriteStream('../json/finalProducts.json');
const { getFileAsObject } = require('../loader');

let records = [];
let photos = [];
// eslint-disable-next-line consistent-return
const getFile = () => {
  try {
    const data = fs.readFileSync('../json/completeStyles.json');
    // console.log(JSON.parse(data))
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

const combine = async () => {
  records = await getFileAsObject('productsWFeatures');
  photos = await getFile();

  return new Promise((resolve) => {
    Object.values(photos).forEach(async (style) => {
      const number = Number(style.product_id_ref);

      if (records[number - 300001]) {
        await records[number - 300001].styles.push(style);
      }
    });
    dest.write(JSON.stringify(records));
    console.log('finished combining records 🔥');
    resolve(true);
  });
};
module.exports.combine = combine;
