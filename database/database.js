const mongoose = require('mongoose');
const {pass, user} = require('../config');


const uri = `mongodb://${user}:${pass}@localhost/overview_service`;
mongoose.connect(uri)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//create schemas
const productSchema = mongoose.Schema({
  product_id: {type: Number, index: true},
  product_name: String,
  product_slogan: String,
  product_description: String,
  product_category: String,
  product_default_price: Number,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
})
const Product = mongoose.model('Product', productSchema);

const featureSchema = mongoose.Schema({
  feature_id: {type: Number},
  feature_product_id_ref: {type: Number, index:true},
  feature: String,
  feature_value: String,
})
const Feature = mongoose.model('Feature', featureSchema)

const styleSchema = mongoose.Schema({
  style_id: {type: Number},
  style_productId_ref: {type: Number, index: true},
  style_name: String,
  style_sale_price: String,
  style_original_price: String,
  style_default_style: Number
})
const Style = mongoose.model('Style', styleSchema)

const photoSchema = mongoose.Schema({
  photo_id: Number,
  photo_styleId_ref: {type: Number, index:true},
  photo_url: String,
  photo_thumbnail_url: String
})
const Photo = mongoose.model('Photo', productSchema)

const skuSchema = mongoose.Schema({
  sku_id: Number,
  sku_styleId_ref: {type: Number, index: true},
  sku_size: String,
  sku_quantity: Number,
})
const Sku = mongoose.model('Sku', skuSchema)

module.exports = {
  db,

}
