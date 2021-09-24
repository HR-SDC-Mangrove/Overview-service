/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');

module.exports.getFileAsObject = (section) => {
  const filePath = path.resolve(__dirname, `./json/${section}.json`);
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};
