const chai = require('chai');
const { describe, it, beforeEach } = require('mocha');
const helper = require('../routes/helpers');
const data = require('./testData');

const { expect } = chai;
describe('helpers', () => {
  describe('createNonDupFeatures', () => {
    let featureData;
    let finalFeatureResult;
    let features;
    beforeEach(() => {
      featureData = data.dupFeatureData();
      finalFeatureResult = helper.createNonDupFeatures(featureData);
      features = finalFeatureResult.features[0];
    });
    it('should take a response array of objects and create a single product object', (done) => {
      expect(Array.isArray(featureData)).to.equal(true);
      expect(Array.isArray(finalFeatureResult)).to.equal(false);
      expect(typeof finalFeatureResult).to.equal('object');
      done();
    });
    it('should have id, name, slogan, description, category, default_price, created_at, updated_at, and features as properties', (done) => {
      expect(finalFeatureResult.hasOwnProperty('id')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('name')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('slogan')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('description')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('category')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('default_price')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('created_at')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('updated_at')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('features')).to.equal(true);
      expect(finalFeatureResult.hasOwnProperty('fake')).to.equal(false);
      done();
    });
    it('should contain a features object, without duplicates', (done) => {
      const original = Object.keys(features);
      const set = Array.from(new Set(original));
      expect(original.length === set.length).to.equal(true);
      done();
    });
  });

  describe('createNonDupStyles', () => {
    let styleData;
    let finalStyleResult;
    beforeEach(() => {
      styleData = data.dupStyleData();
      finalStyleResult = helper.createNonDupStyles(styleData);
    });
    it('should take an array of response objects and return an array of non duplicate style objects', (done) => {
      const ids = finalStyleResult.map((style) => style.style_id);
      const set = Array.from(new Set(ids));
      expect(styleData.length !== finalStyleResult.length).to.equal(true);
      expect(set.length === finalStyleResult.length).to.equal(true);
      done();
    });
    it('each style object should have a style_key, style_id, style_product_ref, style_name, style_sale_price, style_original_price, style_default_style property', (done) => {
      finalStyleResult.forEach((style) => {
        expect(style.hasOwnProperty('style_key')).to.equal(true);
        expect(style.hasOwnProperty('style_id')).to.equal(true);
        expect(style.hasOwnProperty('style_product_ref')).to.equal(true);
        expect(style.hasOwnProperty('style_name')).to.equal(true);
        expect(style.hasOwnProperty('style_sale_price')).to.equal(true);
        expect(style.hasOwnProperty('style_original_price')).to.equal(true);
        expect(style.hasOwnProperty('style_default_style')).to.equal(true);
      });
      done();
    });
  });
  describe('createNonDupPhotos', () => {
    let photoData;
    let finalPhotoResult;
    beforeEach(() => {
      photoData = data.dupPhotoData();
      finalPhotoResult = helper.createNonDupPhotos(photoData);
    });
    it('should take an array of response objects and return an array of non duplicate photo objects', (done) => {
      const ids = finalPhotoResult.map((photo) => photo.photo_id);
      const set = Array.from(new Set(ids));
      expect(photoData.length !== finalPhotoResult.length).to.equal(true);
      expect(set.length === finalPhotoResult.length).to.equal(true);
      done();
    });
    it('each photo object should have a photo_key, photo_id, photo_styleid_ref, photo_url, photo_thumbnail_url', (done) => {
      finalPhotoResult.forEach((photo) => {
        expect(photo.hasOwnProperty('photo_key')).to.equal(true);
        expect(photo.hasOwnProperty('photo_id')).to.equal(true);
        expect(photo.hasOwnProperty('photo_styleid_ref')).to.equal(true);
        expect(photo.hasOwnProperty('photo_url')).to.equal(true);
        expect(photo.hasOwnProperty('photo_thumbnail_url')).to.equal(true);
      });
      done();
    });
  });
  describe('createNonDupSkus', () => {
    let skuData;
    let finalSkuResult;
    beforeEach(() => {
      skuData = data.dupSkuData();
      finalSkuResult = helper.createNonDupSkus(skuData);
    });
    it('should take an array of response objects and return an array of non duplicate sku objects', (done) => {
      const ids = finalSkuResult.map((sku) => sku.sku_id);
      const set = Array.from(new Set(ids));
      expect(skuData.length !== finalSkuResult.length).to.equal(true);
      expect(set.length === finalSkuResult.length).to.equal(true);
      done();
    });
    it('each sku object should have a sku_key, sku_id, sku_styleid_ref, sku_size, sku_quantity', (done) => {
      finalSkuResult.forEach((sku) => {
        expect(sku.hasOwnProperty('sku_key')).to.equal(true);
        expect(sku.hasOwnProperty('sku_id')).to.equal(true);
        expect(sku.hasOwnProperty('sku_styleid_ref')).to.equal(true);
        expect(sku.hasOwnProperty('sku_size')).to.equal(true);
        expect(sku.hasOwnProperty('sku_quantity')).to.equal(true);
      });
      done();
    });
  });
  describe('finalStyles', () => {
    const styleData = data.dupStyleData();
    const finalStyleResult = helper.createNonDupStyles(styleData);
    const photoData = data.dupPhotoData();
    const finalPhotoResult = helper.createNonDupPhotos(photoData);
    const skuData = data.dupSkuData();
    const finalSkuResult = helper.createNonDupSkus(skuData);
    let finalStyleData;
    beforeEach(() => {
      finalStyleData = helper.finalStyles(finalStyleResult, finalPhotoResult, finalSkuResult);
    });
    it('should return an object with a results and product_id property', (done) => {
      expect(Array.isArray(finalStyleData)).to.equal(false);
      expect(typeof finalStyleData).to.equal('object');
      expect(finalStyleData.hasOwnProperty('results'));
      expect(finalStyleData.hasOwnProperty('product_id'));
      done();
    });
    it('each style object in the result array should have a style_id, name, original_price, default, photos, and skyus property', (done) => {
      finalStyleData.results.forEach((style) => {
        expect(style.hasOwnProperty('style_id')).to.equal(true);
        expect(style.hasOwnProperty('name')).to.equal(true);
        expect(style.hasOwnProperty('original_price')).to.equal(true);
        expect(style.hasOwnProperty('default')).to.equal(true);
        expect(style.hasOwnProperty('photos')).to.equal(true);
        expect(style.hasOwnProperty('skus')).to.equal(true);
      });
      done();
    });
    it('each style objects photos array, should have photos that correspond to the default style_id', (done) => {
      const firstStylePhoto = finalStyleData.results[0].photos[0].url;
      const secondStylePhoto = finalStyleData.results[1].photos[0].url;
      const thirdStylePhoto = finalStyleData.results[2].photos[0].url;
      const forthStylePhoto = finalStyleData.results[3].photos[0].url;
      const fifthStylePhoto = finalStyleData.results[4].photos[0].url;
      const sixthStylePhoto = finalStyleData.results[5].photos[0].url;
      expect(firstStylePhoto).to.equal('https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
      expect(secondStylePhoto).to.equal('https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
      expect(thirdStylePhoto).to.equal('https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80');
      expect(forthStylePhoto).to.equal('https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
      expect(fifthStylePhoto).to.equal('https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80');
      expect(sixthStylePhoto).to.equal('https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
      done();
    });
    it('each style objects skus array, should contain an object with different nested sku objects that correspond to the default style_id', (done) => {
      const skuObj1 = Object.keys(finalStyleData.results[0].skus);
      const set1 = Array.from(new Set(skuObj1));
      expect(skuObj1.length).to.equal(6);
      expect(set1.length).to.equal(6);
      const skuObj2 = Object.keys(finalStyleData.results[1].skus);
      const set2 = Array.from(new Set(skuObj2));
      expect(skuObj2.length).to.equal(6);
      expect(set2.length).to.equal(6);
      const skuObj3 = Object.keys(finalStyleData.results[1].skus);
      const set3 = Array.from(new Set(skuObj2));
      expect(skuObj3.length).to.equal(6);
      expect(set3.length).to.equal(6);
      const skuObj4 = Object.keys(finalStyleData.results[1].skus);
      const set4 = Array.from(new Set(skuObj2));
      expect(skuObj4.length).to.equal(6);
      expect(set4.length).to.equal(6);
      const skuObj5 = Object.keys(finalStyleData.results[1].skus);
      const set5 = Array.from(new Set(skuObj2));
      expect(skuObj5.length).to.equal(6);
      expect(set5.length).to.equal(6);
      const skuObj6 = Object.keys(finalStyleData.results[1].skus);
      const set6 = Array.from(new Set(skuObj2));
      expect(skuObj6.length).to.equal(6);
      expect(set6.length).to.equal(6);
      done();
    });
  });
});
