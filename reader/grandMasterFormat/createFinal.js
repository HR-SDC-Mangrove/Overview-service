const fs = require('fs');

const dest = fs.createWriteStream('../finalJSON/final1000k.json');
const { getFileAsObject } = require('../loader');

let records = [];
const createFinal = async () => {
  records = await getFileAsObject('finalProducts');
  records.forEach(async (record) => {
    // eslint-disable-next-line prefer-template
    await dest.write(JSON.stringify(record) + '\n');
  });
  console.log('created final JSON 🤙');
};
module.exports.createFinal = createFinal;
