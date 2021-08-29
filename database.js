const { dbPass } = require('./config');

const initOptions = {
  schema: 'overview_schema',
};
const pgp = require('pg-promise')(initOptions);
const cn = `postgres://rob:${dbPass}@localhost:5432/SDC_overview_service`;
const db = pgp(cn);

module.exports = {
  db,
};
