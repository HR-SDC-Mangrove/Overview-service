/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const { pass, user } = require('../config');

const uri = `mongodb://${user}:${pass}@localhost/overview_service`;

mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const productSchema = mongoose.Schema({
  id: { type: Number, index: true },
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  styles: Array,
  features: Object,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
const Product = mongoose.model('Product', productSchema);

module.exports = {
  db,
};
