const fs = require('fs');

const dest = fs.createWriteStream('../finalJSON/final1000k.json');
const { getFileAsObject } = require('../loader');

let records = [];
const createFinal = async () => {
  records = await getFileAsObject('finalProducts');
  records.forEach(async (record) => {
    const stringRecord = JSON.stringify(record);
    await stringRecord;
    dest.write(`${stringRecord}\n`);
  });
  console.log('created final JSON 🤙');
};
module.exports.createFinal = createFinal;
