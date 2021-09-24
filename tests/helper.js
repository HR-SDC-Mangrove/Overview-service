/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const server = require('../service/index');

const { expect } = chai;
const { db } = require('../database/database');
const helper = require('../routes/helper');

chai.use(chaiHttp);

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomNumbers = (first, last) => {
  const numberObj = {};
  const rando1 = getRandomIntInclusive(first, last);
  const rando2 = getRandomIntInclusive(first, last);
  const rando3 = getRandomIntInclusive(first, last);
  const rando4 = getRandomIntInclusive(first, last);
  numberObj.first = rando1;
  numberObj.second = rando2;
  numberObj.third = rando3;
  numberObj.forth = rando4;

  const unique = Array.from(new Set(Object.values(numberObj)));
  if (!unique.length === 4) {
    return getRandomNumbers(first, last);
  }
  return numberObj;
};

describe('helper methods', () => {
  describe('createFinalStyles', () => {
    describe('random product id between 1 - 1000k', async () => {
      const random = await getRandomNumbers(1, 25000);
      it(`should take an input of a styles array and output an object - for product id ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId });
        const { styles } = product[0];
        const finalStyles = helper.createFinalStyles(styles, inputId);
        expect(Array.isArray(styles)).to.equal(true);
        expect(Array.isArray(finalStyles)).to.equal(false);
        expect(typeof finalStyles).to.equal('object');
      });
      it(`should take an input of a styles array and output an object - for product id ${random.second}`, async () => {
        const inputId = random.second;
        const product = await db.models.Product.find({ id: inputId });
        const { styles } = product[0];
        const finalStyles = helper.createFinalStyles(styles, inputId);
        expect(Array.isArray(styles)).to.equal(true);
        expect(Array.isArray(finalStyles)).to.equal(false);
        expect(typeof finalStyles).to.equal('object');
      });
      it(`should take an input of a styles array and output an object - for product ${random.third}`, async () => {
        const inputId = random.third;
        const product = await db.models.Product.find({ id: inputId });
        const { styles } = product[0];
        const finalStyles = helper.createFinalStyles(styles, inputId);
        expect(Array.isArray(styles)).to.equal(true);
        expect(Array.isArray(finalStyles)).to.equal(false);
        expect(typeof finalStyles).to.equal('object');
      });

      it(`should take an input of a styles array and output an object - for product ${random.forth}`, async () => {
        const inputId = random.forth;
        const product = await db.models.Product.find({ id: inputId });
        const { styles } = product[0];
        const finalStyles = helper.createFinalStyles(styles, inputId);
        expect(Array.isArray(styles)).to.equal(true);
        expect(Array.isArray(finalStyles)).to.equal(false);
        expect(typeof finalStyles).to.equal('object');
      });
      describe('createFinalStyles result object', () => {
        it(`should contain the correct properties and data types - for product id ${random.first}`, async () => {
          const inputId = random.first;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          expect(typeof finalStyles.product_id).to.equal('string');
          expect(Array.isArray(finalStyles.results)).to.equal(true);
        });
        it(`should contain the correct properties and data types - for product id ${random.second}`, async () => {
          const inputId = random.second;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          expect(typeof finalStyles.product_id).to.equal('string');
          expect(Array.isArray(finalStyles.results)).to.equal(true);
        });
        it(`should contain the correct properties and data types - for product id ${random.third}`, async () => {
          const inputId = random.third;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          expect(typeof finalStyles.product_id).to.equal('string');
          expect(Array.isArray(finalStyles.results)).to.equal(true);
        });
        it(`should contain the correct properties and data types - for product id ${random.forth}`, async () => {
          const inputId = random.forth;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          expect(typeof finalStyles.product_id).to.equal('string');
          expect(Array.isArray(finalStyles.results)).to.equal(true);
        });
        describe('product_id property', () => {
          it(`should be a string number that matches the current product product_id - for product_id ${random.first}`, async () => {
            const inputId = random.first;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            expect(Number(finalStyles.product_id)).to.equal(inputId);
          });
          it(`should be a string number that matches the current product product_id - for product_id ${random.second}`, async () => {
            const inputId = random.second;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            expect(Number(finalStyles.product_id)).to.equal(inputId);
          });
          it(`should be a string number that matches the current product product_id - for product_id ${random.third}`, async () => {
            const inputId = random.third;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            expect(Number(finalStyles.product_id)).to.equal(inputId);
          });
          it(`should be a string number that matches the current product product_id - for product_id  ${random.forth}`, async () => {
            const inputId = random.forth;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            expect(Number(finalStyles.product_id)).to.equal(inputId);
          });
        });
        describe('results property', () => {
          it(`products with styles, should contain an array of style objects with the following properties and datatypes - for product_id ${random.first}`, async () => {
            const inputId = random.first;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });
          it(`products with styles, should contain an array of style objects with the following properties and datatypes - for product_id ${random.second}`, async () => {
            const inputId = random.second;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });
          it(`products with styles, should contain an array of style objects with the following properties and datatypes - for product_id ${random.third}`, async () => {
            const inputId = random.third;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });
          it(`products with styles, should contain an array of style objects with the following properties and datatypes - for product_id ${random.forth}`, async () => {
            const inputId = random.forth;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });

          it(`should have the correct primitive values based on styleId - for product id ${random.first}`, async () => {
            const inputId = random.first;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });
          it(`should have the correct primitive values based on styleId - for product id ${random.second}`, async () => {
            const inputId = random.second;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });
          it(`should have the correct primitive values based on styleId - for product id ${random.third}`, async () => {
            const inputId = random.third;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });
          it(`should have the correct primitive values based on styleId - for product id ${random.forth}`, async () => {
            const inputId = random.forth;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            if (finalStyles.results.length) {
              finalStyles.results.forEach((style) => {
                expect(typeof style.style_id).to.equal('number');
                expect(typeof style.name).to.equal('string');
                expect(typeof style.original_price).to.equal('string');
                if (style.sale_price !== null) {
                  expect(typeof style.sale_price).to.equal('string');
                } else {
                  expect(style.sale_price).to.equal(null);
                }
                expect(typeof style.default).to.equal('boolean');
                expect(Array.isArray(style.photos)).to.equal(true);
                expect(Array.isArray(style.skus)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
              });
            }
          });

          describe('photos property', () => {
            it(`should be an array containing objects with the following properties and datatypes - for product id ${random.first}`, async () => {
              const inputId = random.first;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(typeof photo.url === 'string' || photo.thumbnail_url === null).to.equal(true);
                });
              });
            });
            it(`should be an array containing objects with the following properties and datatypes - for product id ${random.second}`, async () => {
              const inputId = random.second;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(typeof photo.url === 'string' || photo.thumbnail_url === null).to.equal(true);
                });
              });
            });
            it(`should be an array containing objects with the following properties and datatypes - for product id ${random.third}`, async () => {
              const inputId = random.third;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(typeof photo.url === 'string' || photo.thumbnail_url === null).to.equal(true);
                });
              });
            });
            it(`should be an array containing objects with the following properties and datatypes - for product id ${random.forth}`, async () => {
              const inputId = random.forth;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(typeof photo.url === 'string' || photo.thumbnail_url === null).to.equal(true);
                });
              });
            });
          });
          describe('skus property', () => {
            it(`should be an object with nested objects seperated by a string that references the sku id - for product id ${random.first}`, async () => {
              const inputId = random.first;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                const skuIdRef = Object.keys(style.skus);
                expect(Array.isArray(style.sku)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
                skuData.forEach((sku) => {
                  expect(Array.isArray(sku)).to.equal(false);
                  expect(typeof style.skus).to.equal('object');
                });
                skuIdRef.forEach((idRef) => {
                  expect(typeof idRef === 'string' || idRef === null).to.equal(true);
                });
              });
            });
            it(`should be an object with nested objects seperated by a string that references the sku id - for product id ${random.second}`, async () => {
              const inputId = random.second;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                const skuIdRef = Object.keys(style.skus);
                expect(Array.isArray(style.sku)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
                skuData.forEach((sku) => {
                  expect(Array.isArray(sku)).to.equal(false);
                  expect(typeof style.skus).to.equal('object');
                });
                skuIdRef.forEach((idRef) => {
                  expect(typeof idRef === 'string' || idRef === null).to.equal(true);
                });
              });
            });
            it(`should be an object with nested objects seperated by a string that references the sku id - for product id ${random.third}`, async () => {
              const inputId = random.second;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                const skuIdRef = Object.keys(style.skus);
                expect(Array.isArray(style.sku)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
                skuData.forEach((sku) => {
                  expect(Array.isArray(sku)).to.equal(false);
                  expect(typeof style.skus).to.equal('object');
                });
                skuIdRef.forEach((idRef) => {
                  expect(typeof idRef === 'string' || idRef === null).to.equal(true);
                });
              });
            });
            it(`should be an object with nested objects seperated by a string that references the sku id - for product id ${random.forth}`, async () => {
              const inputId = random.second;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                const skuIdRef = Object.keys(style.skus);
                expect(Array.isArray(style.sku)).to.equal(false);
                expect(typeof style.skus).to.equal('object');
                skuData.forEach((sku) => {
                  expect(Array.isArray(sku)).to.equal(false);
                  expect(typeof style.skus).to.equal('object');
                });
                skuIdRef.forEach((idRef) => {
                  expect(typeof idRef === 'string' || idRef === null).to.equal(true);
                });
              });
            });
            it(`each individual sku object should have correct properties/datatypes, for product_id ${random.first}`, async () => {
              const inputId = random.first;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                skuData.forEach((sku) => {
                  if (sku !== null) {
                    expect(typeof sku.quantity).to.equal('number');
                    expect(typeof sku.size).to.equal('string');
                  }
                });
              });
            });
            it(`each individual sku object should have correct properties/datatypes', for product_id ${random.second}`, async () => {
              const inputId = random.second;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                skuData.forEach((sku) => {
                  if (sku !== null) {
                    expect(typeof sku.quantity).to.equal('number');
                    expect(typeof sku.size).to.equal('string');
                  }
                });
              });
            });
            it(`each individual sku object should have correct properties/datatypes, for product_id ${random.third}`, async () => {
              const inputId = random.third;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                skuData.forEach((sku) => {
                  if (sku !== null) {
                    expect(typeof sku.quantity).to.equal('number');
                    expect(typeof sku.size).to.equal('string');
                  }
                });
              });
            });
            it(`each individual sku object should have correct properties/datatypes, for product_id ${random.forth}`, async () => {
              const inputId = random.forth;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              finalStyles.results.forEach((style) => {
                const skuData = Object.values(style.skus);
                skuData.forEach((sku) => {
                  if (sku !== null) {
                    expect(typeof sku.quantity).to.equal('number');
                    expect(typeof sku.size).to.equal('string');
                  }
                });
              });
            });
          });
        });
      });
      describe('createFinalStyles specifics', () => {
        describe('products with styles', () => {
          describe('style data', () => {
            it('should have the correct styles/data associated with them based on product_id 1 - (based on csvs vs service return data)', async () => {
              const inputId = 1;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.product_id).to.equal('1');
              expect(finalStyles.results[0].style_id).to.equal(1);
              expect(finalStyles.results[0].name).to.equal('Forest Green & Black');
              expect(finalStyles.results[0].original_price).to.equal('140.00');
              expect(finalStyles.results[0].sale_price).to.equal(null);
              expect(finalStyles.results[0].default).to.equal(true);

              expect(finalStyles.results[1].style_id).to.equal(2);
              expect(finalStyles.results[1].name).to.equal('Desert Brown & Tan');
              expect(finalStyles.results[1].original_price).to.equal('140.00');
              expect(finalStyles.results[1].sale_price).to.equal(null);
              expect(finalStyles.results[1].default).to.equal(false);

              expect(finalStyles.results[2].style_id).to.equal(3);
              expect(finalStyles.results[2].name).to.equal('Ocean Blue & Grey');
              expect(finalStyles.results[2].original_price).to.equal('140.00');
              expect(finalStyles.results[2].sale_price).to.equal('100.00');
              expect(finalStyles.results[2].default).to.equal(false);

              expect(finalStyles.results[3].style_id).to.equal(4);
              expect(finalStyles.results[3].name).to.equal('Digital Red & Black');
              expect(finalStyles.results[3].original_price).to.equal('140.00');
              expect(finalStyles.results[3].sale_price).to.equal(null);
              expect(finalStyles.results[3].default).to.equal(false);

              expect(finalStyles.results[4].style_id).to.equal(5);
              expect(finalStyles.results[4].name).to.equal('Sky Blue & White');
              expect(finalStyles.results[4].original_price).to.equal('140.00');
              expect(finalStyles.results[4].sale_price).to.equal('100.00');
              expect(finalStyles.results[4].default).to.equal(false);

              expect(finalStyles.results[5].style_id).to.equal(6);
              expect(finalStyles.results[5].name).to.equal('Dark Grey & Black');
              expect(finalStyles.results[5].original_price).to.equal('170.00');
              expect(finalStyles.results[5].sale_price).to.equal(null);
              expect(finalStyles.results[5].default).to.equal(false);
            });
            it('should have the correct styles/data associated with them based on product_id 500001 - (based on csvs vs service return data)', async () => {
              const inputId = 50001;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.product_id).to.equal('50001');
              expect(finalStyles.results[0].style_id).to.equal(98285);
              expect(finalStyles.results[0].name).to.equal('Fuchsia');
              expect(finalStyles.results[0].original_price).to.equal('272.00');
              expect(finalStyles.results[0].sale_price).to.equal(null);
              expect(finalStyles.results[0].default).to.equal(true);

              expect(finalStyles.results[1].style_id).to.equal(98286);
              expect(finalStyles.results[1].name).to.equal('Indigo');
              expect(finalStyles.results[1].original_price).to.equal('397.00');
              expect(finalStyles.results[1].sale_price).to.equal(null);
              expect(finalStyles.results[1].default).to.equal(false);
            });
            it('should have the correct styles/data associated with them based on product_id 1000011 - (based on csvs vs service return data)', async () => {
              const inputId = 1000011;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);

              expect(finalStyles.product_id).to.equal('1000011');
              expect(finalStyles.results[0].style_id).to.equal(1958098);
              expect(finalStyles.results[0].name).to.equal('Ivory');
              expect(finalStyles.results[0].original_price).to.equal('587.00');
              expect(finalStyles.results[0].sale_price).to.equal(null);
              expect(finalStyles.results[0].default).to.equal(true);

              expect(finalStyles.results[1].style_id).to.equal(1958099);
              expect(finalStyles.results[1].name).to.equal('Magenta');
              expect(finalStyles.results[1].original_price).to.equal('587.00');
              expect(finalStyles.results[1].sale_price).to.equal(null);
              expect(finalStyles.results[1].default).to.equal(false);

              expect(finalStyles.results[2].style_id).to.equal(1958100);
              expect(finalStyles.results[2].name).to.equal('Orchid');
              expect(finalStyles.results[2].original_price).to.equal('587.00');
              expect(finalStyles.results[2].sale_price).to.equal(null);
              expect(finalStyles.results[2].default).to.equal(false);

              expect(finalStyles.results[3].style_id).to.equal(1958101);
              expect(finalStyles.results[3].name).to.equal('Blue');
              expect(finalStyles.results[3].original_price).to.equal('587.00');
              expect(finalStyles.results[3].sale_price).to.equal(null);
              expect(finalStyles.results[3].default).to.equal(false);

              expect(finalStyles.results[4].style_id).to.equal(1958102);
              expect(finalStyles.results[4].name).to.equal('Lavender');
              expect(finalStyles.results[4].original_price).to.equal('587.00');
              expect(finalStyles.results[4].sale_price).to.equal(null);
              expect(finalStyles.results[4].default).to.equal(false);
            });
            it('should have the correct styles/data associated with them based on product_id 250000 - (based on csvs vs service return data)', async () => {
              const inputId = 250000;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.product_id).to.equal('250000');
              expect(finalStyles.results[0].style_id).to.equal(489445);
              expect(finalStyles.results[0].name).to.equal('Grey');
              expect(finalStyles.results[0].original_price).to.equal('174.00');
              expect(finalStyles.results[0].sale_price).to.equal(null);
              expect(finalStyles.results[0].default).to.equal(true);

              expect(finalStyles.results[1].style_id).to.equal(489446);
              expect(finalStyles.results[1].name).to.equal('Fuchsia');
              expect(finalStyles.results[1].original_price).to.equal('174.00');
              expect(finalStyles.results[1].sale_price).to.equal(null);
              expect(finalStyles.results[1].default).to.equal(false);

              expect(finalStyles.results[2].style_id).to.equal(489447);
              expect(finalStyles.results[2].name).to.equal('Sky blue');
              expect(finalStyles.results[2].original_price).to.equal('174.00');
              expect(finalStyles.results[2].sale_price).to.equal(null);
              expect(finalStyles.results[2].default).to.equal(false);
            });
          });
          describe('photo data', () => {
            it('should have the correct photos associated with each style based on the current product style id - for product_id 1', async () => {
              const inputId = 1;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);

              expect(finalStyles.results[0].style_id).to.equal(1);
              expect(finalStyles.results[0].photos[0].url).to.equal('https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[0].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[1].url).to.equal('https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
              expect(finalStyles.results[0].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[2].url).to.equal('https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80');
              expect(finalStyles.results[0].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[3].url).to.equal('https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[0].photos[3].thumbnail_url).to.equal('https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[4].url).to.equal('https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[0].photos[4].thumbnail_url).to.equal('https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[5].url).to.equal('https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
              expect(finalStyles.results[0].photos[5].thumbnail_url).to.equal('https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].style_id).to.equal(2);
              expect(finalStyles.results[1].photos[0].url).to.equal('https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[1].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[1].url).to.equal('https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[1].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[2].url).to.equal('https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[1].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[3].url).to.equal('https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[1].photos[3].thumbnail_url).to.equal('https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[4].url).to.equal('https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[1].photos[4].thumbnail_url).to.equal('https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[5].url).to.equal('https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80');
              expect(finalStyles.results[1].photos[5].thumbnail_url).to.equal('https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].style_id).to.equal(3);
              expect(finalStyles.results[2].photos[0].url).to.equal('https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80');
              expect(finalStyles.results[2].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[1].url).to.equal('https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80');
              expect(finalStyles.results[2].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[2].url).to.equal('https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
              expect(finalStyles.results[2].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[3].url).to.equal('https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80');
              expect(finalStyles.results[2].photos[3].thumbnail_url).to.equal('https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[4].url).to.equal('https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[2].photos[4].thumbnail_url).to.equal('https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[5].url).to.equal('https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
              expect(finalStyles.results[2].photos[5].thumbnail_url).to.equal('https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[3].style_id).to.equal(4);
              expect(finalStyles.results[3].photos[0].url).to.equal('https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
              expect(finalStyles.results[3].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[3].photos[1].url).to.equal('https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80');
              expect(finalStyles.results[3].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[3].photos[2].url).to.equal('https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80');
              expect(finalStyles.results[3].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[3].photos[3].url).to.equal('https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[3].photos[3].thumbnail_url).to.equal('https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[3].photos[4].url).to.equal('https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[3].photos[4].thumbnail_url).to.equal('https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[3].photos[5].url).to.equal('https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
              expect(finalStyles.results[3].photos[5].thumbnail_url).to.equal('https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60');

              expect(finalStyles.results[4].style_id).to.equal(5);

              expect(finalStyles.results[4].photos[0].url).to.equal('https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80');
              expect(finalStyles.results[4].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[4].photos[1].url).to.equal('https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[4].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[4].photos[2].url).to.equal('https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80');
              expect(finalStyles.results[4].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[4].photos[3].url).to.equal('https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[4].photos[3].thumbnail_url).to.equal('https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[4].photos[4].url).to.equal('https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[4].photos[4].thumbnail_url).to.equal('https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[4].photos[5].url).to.equal('https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[4].photos[5].thumbnail_url).to.equal('https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[5].style_id).to.equal(6);
              expect(finalStyles.results[5].photos[0].url).to.equal('https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[5].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[5].photos[1].url).to.equal('https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[5].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[5].photos[2].url).to.equal('https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80');
              expect(finalStyles.results[5].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[5].photos[3].url).to.equal('https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
              expect(finalStyles.results[5].photos[3].thumbnail_url).to.equal('https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[5].photos[4].url).to.equal('https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[5].photos[4].thumbnail_url).to.equal('https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[5].photos[5].url).to.equal('https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80');
              expect(finalStyles.results[5].photos[5].thumbnail_url).to.equal('https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');
            });
            it('should have the correct photos associated with each style based on the current product style id - for product_id 50001', async () => {
              const inputId = 50001;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);

              expect(finalStyles.results[0].style_id).to.equal(98285);
              expect(finalStyles.results[0].photos[0].url).to.equal('https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[0].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[1].url).to.equal('https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80');
              expect(finalStyles.results[0].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[2].url).to.equal('https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[0].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].style_id).to.equal(98286);
              expect(finalStyles.results[1].photos[0].url).to.equal('https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80');
              expect(finalStyles.results[1].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[1].url).to.equal('https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[1].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');
            });
            it('should have the correct photos associated with each style based on the current product style id - for product_id 250000', async () => {
              const inputId = 250000;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.results[0].style_id).to.equal(489445);
              expect(finalStyles.results[0].photos[0].url).to.equal('https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80');
              expect(finalStyles.results[0].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[1].url).to.equal('https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[0].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[0].photos[2].url).to.equal('https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[0].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].style_id).to.equal(489446);
              expect(finalStyles.results[1].photos[0].url).to.equal('https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[1].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[1].url).to.equal('https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80');
              expect(finalStyles.results[1].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[1].photos[2].url).to.equal('https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80');
              expect(finalStyles.results[1].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].style_id).to.equal(489447);
              expect(finalStyles.results[2].photos[0].url).to.equal('https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80');
              expect(finalStyles.results[2].photos[0].thumbnail_url).to.equal('https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[1].url).to.equal('https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
              expect(finalStyles.results[2].photos[1].thumbnail_url).to.equal('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[2].url).to.equal('https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80');
              expect(finalStyles.results[2].photos[2].thumbnail_url).to.equal('https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');

              expect(finalStyles.results[2].photos[3].url).to.equal('https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80');
              expect(finalStyles.results[2].photos[3].thumbnail_url).to.equal('https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80');
            });
            it('should have the correct photos associated with each style based on the current product style id, in the case no photos exist for a specific style - for product_id 1000011', async () => {
              const inputId = 1000011;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);

              expect(finalStyles.results[0].style_id).to.equal(1958098);
              expect(finalStyles.results[0].photos[0].url).to.equal(null);
              expect(finalStyles.results[0].photos[0].thumbnail_url).to.equal(null);

              expect(finalStyles.results[1].style_id).to.equal(1958099);
              expect(finalStyles.results[1].photos[0].url).to.equal(null);
              expect(finalStyles.results[1].photos[0].thumbnail_url).to.equal(null);

              expect(finalStyles.results[2].style_id).to.equal(1958100);
              expect(finalStyles.results[2].photos[0].url).to.equal(null);
              expect(finalStyles.results[2].photos[0].thumbnail_url).to.equal(null);

              expect(finalStyles.results[3].style_id).to.equal(1958101);
              expect(finalStyles.results[3].photos[0].url).to.equal(null);
              expect(finalStyles.results[3].photos[0].thumbnail_url).to.equal(null);

              expect(finalStyles.results[4].style_id).to.equal(1958102);
              expect(finalStyles.results[4].photos[0].url).to.equal(null);
              expect(finalStyles.results[4].photos[0].thumbnail_url).to.equal(null);
            });
          });
          describe('sku data', () => {
            it('should have the correct skus/data associated with each style based on the current style id - for product_id 1', async () => {
              const inputId = 1;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);

              expect(finalStyles.results[0].style_id).to.equal(1);
              expect(finalStyles.results[0].skus['1'].quantity).to.equal(8);
              expect(finalStyles.results[0].skus['1'].size).to.equal('XS');

              expect(finalStyles.results[0].skus['2'].quantity).to.equal(16);
              expect(finalStyles.results[0].skus['2'].size).to.equal('S');

              expect(finalStyles.results[0].skus['3'].quantity).to.equal(17);
              expect(finalStyles.results[0].skus['3'].size).to.equal('M');

              expect(finalStyles.results[0].skus['4'].quantity).to.equal(10);
              expect(finalStyles.results[0].skus['4'].size).to.equal('L');

              expect(finalStyles.results[0].skus['5'].quantity).to.equal(15);
              expect(finalStyles.results[0].skus['5'].size).to.equal('XL');

              expect(finalStyles.results[0].skus['6'].quantity).to.equal(4);
              expect(finalStyles.results[0].skus['6'].size).to.equal('XL'); // ----> yo this is error in skus csv

              expect(finalStyles.results[1].style_id).to.equal(2);
              expect(finalStyles.results[1].skus['7'].quantity).to.equal(16);
              expect(finalStyles.results[1].skus['7'].size).to.equal('S');

              expect(finalStyles.results[1].skus['8'].quantity).to.equal(8);
              expect(finalStyles.results[1].skus['8'].size).to.equal('XS');

              expect(finalStyles.results[1].skus['9'].quantity).to.equal(17);
              expect(finalStyles.results[1].skus['9'].size).to.equal('M');

              expect(finalStyles.results[1].skus['10'].quantity).to.equal(10);
              expect(finalStyles.results[1].skus['10'].size).to.equal('L');

              expect(finalStyles.results[1].skus['11'].quantity).to.equal(15);
              expect(finalStyles.results[1].skus['11'].size).to.equal('XL');

              expect(finalStyles.results[1].skus['12'].quantity).to.equal(6);
              expect(finalStyles.results[1].skus['12'].size).to.equal('XXL');

              expect(finalStyles.results[2].style_id).to.equal(3);
              expect(finalStyles.results[2].skus['13'].quantity).to.equal(8);
              expect(finalStyles.results[2].skus['13'].size).to.equal('XS');

              expect(finalStyles.results[2].skus['14'].quantity).to.equal(16);
              expect(finalStyles.results[2].skus['14'].size).to.equal('S');

              expect(finalStyles.results[2].skus['15'].quantity).to.equal(17);
              expect(finalStyles.results[2].skus['15'].size).to.equal('M');

              expect(finalStyles.results[2].skus['16'].quantity).to.equal(10);
              expect(finalStyles.results[2].skus['16'].size).to.equal('L');

              expect(finalStyles.results[2].skus['17'].quantity).to.equal(15);
              expect(finalStyles.results[2].skus['17'].size).to.equal('XL');

              expect(finalStyles.results[2].skus['18'].quantity).to.equal(6);
              expect(finalStyles.results[2].skus['18'].size).to.equal('XXL');

              expect(finalStyles.results[3].style_id).to.equal(4);
              expect(finalStyles.results[3].skus['19'].quantity).to.equal(8);
              expect(finalStyles.results[3].skus['19'].size).to.equal('XS');

              expect(finalStyles.results[3].skus['20'].quantity).to.equal(16);
              expect(finalStyles.results[3].skus['20'].size).to.equal('S');

              expect(finalStyles.results[3].skus['21'].quantity).to.equal(17);
              expect(finalStyles.results[3].skus['21'].size).to.equal('M');

              expect(finalStyles.results[3].skus['22'].quantity).to.equal(10);
              expect(finalStyles.results[3].skus['22'].size).to.equal('L');

              expect(finalStyles.results[3].skus['23'].quantity).to.equal(15);
              expect(finalStyles.results[3].skus['23'].size).to.equal('XL');

              expect(finalStyles.results[3].skus['24'].quantity).to.equal(6);
              expect(finalStyles.results[3].skus['24'].size).to.equal('XXL');

              expect(finalStyles.results[4].style_id).to.equal(5);
              expect(finalStyles.results[4].skus['25'].quantity).to.equal(8);
              expect(finalStyles.results[4].skus['25'].size).to.equal('XS');

              expect(finalStyles.results[4].skus['26'].quantity).to.equal(16);
              expect(finalStyles.results[4].skus['26'].size).to.equal('S');

              expect(finalStyles.results[4].skus['27'].quantity).to.equal(17);
              expect(finalStyles.results[4].skus['27'].size).to.equal('M');

              expect(finalStyles.results[4].skus['28'].quantity).to.equal(10);
              expect(finalStyles.results[4].skus['28'].size).to.equal('L');

              expect(finalStyles.results[4].skus['29'].quantity).to.equal(15);
              expect(finalStyles.results[4].skus['29'].size).to.equal('XL');

              expect(finalStyles.results[4].skus['30'].quantity).to.equal(6);
              expect(finalStyles.results[4].skus['30'].size).to.equal('XXL');

              expect(finalStyles.results[5].style_id).to.equal(6);
              expect(finalStyles.results[5].skus['31'].quantity).to.equal(8);
              expect(finalStyles.results[5].skus['31'].size).to.equal('XS');

              expect(finalStyles.results[5].skus['32'].quantity).to.equal(16);
              expect(finalStyles.results[5].skus['32'].size).to.equal('S');

              expect(finalStyles.results[5].skus['33'].quantity).to.equal(17);
              expect(finalStyles.results[5].skus['33'].size).to.equal('M');

              expect(finalStyles.results[5].skus['34'].quantity).to.equal(10);
              expect(finalStyles.results[5].skus['34'].size).to.equal('L');

              expect(finalStyles.results[5].skus['35'].quantity).to.equal(15);
              expect(finalStyles.results[5].skus['35'].size).to.equal('XL');

              expect(finalStyles.results[5].skus['36'].quantity).to.equal(6);
              expect(finalStyles.results[5].skus['36'].size).to.equal('XXL');
            });
            it('should have the correct skus/data associated with each style based on the current style id - for product_id 50001', async () => {
              const inputId = 50001;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.results[0].style_id).to.equal(98285);
              expect(finalStyles.results[0].skus['566560'].quantity).to.equal(36);
              expect(finalStyles.results[0].skus['566560'].size).to.equal('XS');

              expect(finalStyles.results[0].skus['566561'].quantity).to.equal(22);
              expect(finalStyles.results[0].skus['566561'].size).to.equal('S');

              expect(finalStyles.results[0].skus['566562'].quantity).to.equal(20);
              expect(finalStyles.results[0].skus['566562'].size).to.equal('M');

              expect(finalStyles.results[0].skus['566563'].quantity).to.equal(1);
              expect(finalStyles.results[0].skus['566563'].size).to.equal('L');

              expect(finalStyles.results[0].skus['566564'].quantity).to.equal(25);
              expect(finalStyles.results[0].skus['566564'].size).to.equal('XL');

              expect(finalStyles.results[0].skus['566565'].quantity).to.equal(47);
              expect(finalStyles.results[0].skus['566565'].size).to.equal('XXL');

              expect(finalStyles.results[1].style_id).to.equal(98286);
              expect(finalStyles.results[1].skus['566566'].quantity).to.equal(3);
              expect(finalStyles.results[1].skus['566566'].size).to.equal('XS');

              expect(finalStyles.results[1].skus['566567'].quantity).to.equal(24);
              expect(finalStyles.results[1].skus['566567'].size).to.equal('S');

              expect(finalStyles.results[1].skus['566568'].quantity).to.equal(42);
              expect(finalStyles.results[1].skus['566568'].size).to.equal('M');

              expect(finalStyles.results[1].skus['566569'].quantity).to.equal(57);
              expect(finalStyles.results[1].skus['566569'].size).to.equal('L');

              expect(finalStyles.results[1].skus['566570'].quantity).to.equal(3);
              expect(finalStyles.results[1].skus['566570'].size).to.equal('XL');

              expect(finalStyles.results[1].skus['566571'].quantity).to.equal(49);
              expect(finalStyles.results[1].skus['566571'].size).to.equal('XXL');
            });
            it('should have the correct skus/data associated with each style based on the current style id - for product_id 250000', async () => {
              const inputId = 250000;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);

              expect(finalStyles.results[0].style_id).to.equal(489445);
              expect(finalStyles.results[0].skus['2829575'].quantity).to.equal(46);
              expect(finalStyles.results[0].skus['2829575'].size).to.equal('XS');

              expect(finalStyles.results[0].skus['2829576'].quantity).to.equal(27);
              expect(finalStyles.results[0].skus['2829576'].size).to.equal('S');

              expect(finalStyles.results[0].skus['2829577'].quantity).to.equal(58);
              expect(finalStyles.results[0].skus['2829577'].size).to.equal('M');

              expect(finalStyles.results[0].skus['2829578'].quantity).to.equal(56);
              expect(finalStyles.results[0].skus['2829578'].size).to.equal('L');

              expect(finalStyles.results[0].skus['2829579'].quantity).to.equal(49);
              expect(finalStyles.results[0].skus['2829579'].size).to.equal('XL');

              expect(finalStyles.results[0].skus['2829580'].quantity).to.equal(35);
              expect(finalStyles.results[0].skus['2829580'].size).to.equal('XXL');

              expect(finalStyles.results[1].style_id).to.equal(489446);
              expect(finalStyles.results[1].skus['2829581'].quantity).to.equal(42);
              expect(finalStyles.results[1].skus['2829581'].size).to.equal('XS');

              expect(finalStyles.results[1].skus['2829582'].quantity).to.equal(35);
              expect(finalStyles.results[1].skus['2829582'].size).to.equal('S');

              expect(finalStyles.results[1].skus['2829583'].quantity).to.equal(58);
              expect(finalStyles.results[1].skus['2829583'].size).to.equal('M');

              expect(finalStyles.results[1].skus['2829584'].quantity).to.equal(54);
              expect(finalStyles.results[1].skus['2829584'].size).to.equal('L');

              expect(finalStyles.results[1].skus['2829585'].quantity).to.equal(0);
              expect(finalStyles.results[1].skus['2829585'].size).to.equal('XL');

              expect(finalStyles.results[1].skus['2829586'].quantity).to.equal(19);
              expect(finalStyles.results[1].skus['2829586'].size).to.equal('XXL');

              expect(finalStyles.results[2].style_id).to.equal(489447);
              expect(finalStyles.results[2].skus['2829587'].quantity).to.equal(5);
              expect(finalStyles.results[2].skus['2829587'].size).to.equal('XS');

              expect(finalStyles.results[2].skus['2829588'].quantity).to.equal(35);
              expect(finalStyles.results[2].skus['2829588'].size).to.equal('S');

              expect(finalStyles.results[2].skus['2829589'].quantity).to.equal(52);
              expect(finalStyles.results[2].skus['2829589'].size).to.equal('M');

              expect(finalStyles.results[2].skus['2829590'].quantity).to.equal(34);
              expect(finalStyles.results[2].skus['2829590'].size).to.equal('L');

              expect(finalStyles.results[2].skus['2829591'].quantity).to.equal(19);
              expect(finalStyles.results[2].skus['2829591'].size).to.equal('XL');

              expect(finalStyles.results[2].skus['2829592'].quantity).to.equal(39);
              expect(finalStyles.results[2].skus['2829592'].size).to.equal('XXL');
            });
            it('should have the correct skus/data associated with each style based on the current style id - for product_id 1000011', async () => {
              const inputId = 1000011;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);

              expect(finalStyles.results[0].style_id).to.equal(1958098);
              expect(finalStyles.results[0].skus['11323863'].quantity).to.equal(2);
              expect(finalStyles.results[0].skus['11323863'].size).to.equal('7');

              expect(finalStyles.results[0].skus['11323864'].quantity).to.equal(54);
              expect(finalStyles.results[0].skus['11323864'].size).to.equal('7.5');

              expect(finalStyles.results[0].skus['11323865'].quantity).to.equal(8);
              expect(finalStyles.results[0].skus['11323865'].size).to.equal('8');

              expect(finalStyles.results[0].skus['11323866'].quantity).to.equal(48);
              expect(finalStyles.results[0].skus['11323866'].size).to.equal('8.5');

              expect(finalStyles.results[0].skus['11323867'].quantity).to.equal(23);
              expect(finalStyles.results[0].skus['11323867'].size).to.equal('9');

              expect(finalStyles.results[0].skus['11323868'].quantity).to.equal(28);
              expect(finalStyles.results[0].skus['11323868'].size).to.equal('9.5');

              expect(finalStyles.results[0].skus['11323869'].quantity).to.equal(10);
              expect(finalStyles.results[0].skus['11323869'].size).to.equal('10');

              expect(finalStyles.results[0].skus['11323870'].quantity).to.equal(33);
              expect(finalStyles.results[0].skus['11323870'].size).to.equal('10.5');

              expect(finalStyles.results[0].skus['11323871'].quantity).to.equal(52);
              expect(finalStyles.results[0].skus['11323871'].size).to.equal('11');

              expect(finalStyles.results[0].skus['11323872'].quantity).to.equal(36);
              expect(finalStyles.results[0].skus['11323872'].size).to.equal('11.5');

              expect(finalStyles.results[0].skus['11323873'].quantity).to.equal(6);
              expect(finalStyles.results[0].skus['11323873'].size).to.equal('12');

              expect(finalStyles.results[1].style_id).to.equal(1958099);
              expect(finalStyles.results[1].skus['11323874'].quantity).to.equal(24);
              expect(finalStyles.results[1].skus['11323874'].size).to.equal('7');

              expect(finalStyles.results[1].skus['11323875'].quantity).to.equal(16);
              expect(finalStyles.results[1].skus['11323875'].size).to.equal('7.5');

              expect(finalStyles.results[1].skus['11323876'].quantity).to.equal(47);
              expect(finalStyles.results[1].skus['11323876'].size).to.equal('8');

              expect(finalStyles.results[1].skus['11323877'].quantity).to.equal(4);
              expect(finalStyles.results[1].skus['11323877'].size).to.equal('8.5');

              expect(finalStyles.results[1].skus['11323878'].quantity).to.equal(29);
              expect(finalStyles.results[1].skus['11323878'].size).to.equal('9');

              expect(finalStyles.results[1].skus['11323879'].quantity).to.equal(23);
              expect(finalStyles.results[1].skus['11323879'].size).to.equal('9.5');

              expect(finalStyles.results[1].skus['11323880'].quantity).to.equal(14);
              expect(finalStyles.results[1].skus['11323880'].size).to.equal('10');

              expect(finalStyles.results[1].skus['11323881'].quantity).to.equal(33);
              expect(finalStyles.results[1].skus['11323881'].size).to.equal('10.5');

              expect(finalStyles.results[1].skus['11323882'].quantity).to.equal(8);
              expect(finalStyles.results[1].skus['11323882'].size).to.equal('11');

              expect(finalStyles.results[1].skus['11323883'].quantity).to.equal(51);
              expect(finalStyles.results[1].skus['11323883'].size).to.equal('11.5');

              expect(finalStyles.results[1].skus['11323884'].quantity).to.equal(16);
              expect(finalStyles.results[1].skus['11323884'].size).to.equal('12');

              expect(finalStyles.results[2].style_id).to.equal(1958100);
              expect(finalStyles.results[2].skus['11323885'].quantity).to.equal(28);
              expect(finalStyles.results[2].skus['11323885'].size).to.equal('7');

              expect(finalStyles.results[2].skus['11323886'].quantity).to.equal(53);
              expect(finalStyles.results[2].skus['11323886'].size).to.equal('7.5');

              expect(finalStyles.results[2].skus['11323887'].quantity).to.equal(41);
              expect(finalStyles.results[2].skus['11323887'].size).to.equal('8');

              expect(finalStyles.results[2].skus['11323888'].quantity).to.equal(58);
              expect(finalStyles.results[2].skus['11323888'].size).to.equal('8.5');

              expect(finalStyles.results[2].skus['11323889'].quantity).to.equal(52);
              expect(finalStyles.results[2].skus['11323889'].size).to.equal('9');

              expect(finalStyles.results[2].skus['11323890'].quantity).to.equal(44);
              expect(finalStyles.results[2].skus['11323890'].size).to.equal('9.5');

              expect(finalStyles.results[2].skus['11323891'].quantity).to.equal(26);
              expect(finalStyles.results[2].skus['11323891'].size).to.equal('10');

              expect(finalStyles.results[2].skus['11323892'].quantity).to.equal(1);
              expect(finalStyles.results[2].skus['11323892'].size).to.equal('10.5');

              expect(finalStyles.results[2].skus['11323893'].quantity).to.equal(50);
              expect(finalStyles.results[2].skus['11323893'].size).to.equal('11');

              expect(finalStyles.results[2].skus['11323894'].quantity).to.equal(51);
              expect(finalStyles.results[2].skus['11323894'].size).to.equal('11.5');

              expect(finalStyles.results[2].skus['11323895'].quantity).to.equal(7);
              expect(finalStyles.results[2].skus['11323895'].size).to.equal('12');

              expect(finalStyles.results[3].style_id).to.equal(1958101);
              expect(finalStyles.results[3].skus['11323896'].quantity).to.equal(8);
              expect(finalStyles.results[3].skus['11323896'].size).to.equal('7');

              expect(finalStyles.results[3].skus['11323897'].quantity).to.equal(32);
              expect(finalStyles.results[3].skus['11323897'].size).to.equal('7.5');

              expect(finalStyles.results[3].skus['11323898'].quantity).to.equal(4);
              expect(finalStyles.results[3].skus['11323898'].size).to.equal('8');

              expect(finalStyles.results[3].skus['11323899'].quantity).to.equal(41);
              expect(finalStyles.results[3].skus['11323899'].size).to.equal('8.5');

              expect(finalStyles.results[3].skus['11323900'].quantity).to.equal(45);
              expect(finalStyles.results[3].skus['11323900'].size).to.equal('9');

              expect(finalStyles.results[3].skus['11323901'].quantity).to.equal(47);
              expect(finalStyles.results[3].skus['11323901'].size).to.equal('9.5');

              expect(finalStyles.results[3].skus['11323902'].quantity).to.equal(21);
              expect(finalStyles.results[3].skus['11323902'].size).to.equal('10');

              expect(finalStyles.results[3].skus['11323903'].quantity).to.equal(22);
              expect(finalStyles.results[3].skus['11323903'].size).to.equal('10.5');

              expect(finalStyles.results[3].skus['11323904'].quantity).to.equal(6);
              expect(finalStyles.results[3].skus['11323904'].size).to.equal('11');

              expect(finalStyles.results[3].skus['11323905'].quantity).to.equal(20);
              expect(finalStyles.results[3].skus['11323905'].size).to.equal('11.5');

              expect(finalStyles.results[3].skus['11323906'].quantity).to.equal(41);
              expect(finalStyles.results[3].skus['11323906'].size).to.equal('12');

              expect(finalStyles.results[4].style_id).to.equal(1958102);
              expect(finalStyles.results[4].skus['11323907'].quantity).to.equal(38);
              expect(finalStyles.results[4].skus['11323907'].size).to.equal('7');

              expect(finalStyles.results[4].skus['11323908'].quantity).to.equal(12);
              expect(finalStyles.results[4].skus['11323908'].size).to.equal('7.5');

              expect(finalStyles.results[4].skus['11323909'].quantity).to.equal(17);
              expect(finalStyles.results[4].skus['11323909'].size).to.equal('8');

              expect(finalStyles.results[4].skus['11323910'].quantity).to.equal(0);
              expect(finalStyles.results[4].skus['11323910'].size).to.equal('8.5');

              expect(finalStyles.results[4].skus['11323911'].quantity).to.equal(5);
              expect(finalStyles.results[4].skus['11323911'].size).to.equal('9');

              expect(finalStyles.results[4].skus['11323912'].quantity).to.equal(29);
              expect(finalStyles.results[4].skus['11323912'].size).to.equal('9.5');

              expect(finalStyles.results[4].skus['11323913'].quantity).to.equal(15);
              expect(finalStyles.results[4].skus['11323913'].size).to.equal('10');

              expect(finalStyles.results[4].skus['11323914'].quantity).to.equal(37);
              expect(finalStyles.results[4].skus['11323914'].size).to.equal('10.5');

              expect(finalStyles.results[4].skus['11323915'].quantity).to.equal(33);
              expect(finalStyles.results[4].skus['11323915'].size).to.equal('11');

              expect(finalStyles.results[4].skus['11323916'].quantity).to.equal(41);
              expect(finalStyles.results[4].skus['11323916'].size).to.equal('11.5');

              expect(finalStyles.results[4].skus['11323917'].quantity).to.equal(53);
              expect(finalStyles.results[4].skus['11323917'].size).to.equal('12');
            });
          });
          describe('products without styles', () => {
            it('should return an empty results array, when the input styles array is empty - for product id 11', async () => {
              const inputId = 11;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.results.length).to.equal(0);
              expect(Number(finalStyles.product_id)).to.equal(inputId);
            });
            it('should return an empty results array, when the input styles array is empty - for product id 22', async () => {
              const inputId = 22;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.results.length).to.equal(0);
              expect(Number(finalStyles.product_id)).to.equal(inputId);
            });
            it('should return an empty results array, when the input styles array is empty - for product id 33', async () => {
              const inputId = 33;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.results.length).to.equal(0);
              expect(Number(finalStyles.product_id)).to.equal(inputId);
            });
            it('should return an empty results array, when the input styles array is empty - for product id 58', async () => {
              const inputId = 58;
              const product = await db.models.Product.find({ id: inputId });
              const { styles } = product[0];
              const finalStyles = helper.createFinalStyles(styles, inputId);
              expect(finalStyles.results.length).to.equal(0);
              expect(Number(finalStyles.product_id)).to.equal(inputId);
            });
          });
        });
      });
      describe('createFinalProduct method', () => {
        it(`it should accept a product object and style object as inputs, then return a single object with the following properties/datatypes - for product_id ${random.first}`, async () => {
          const inputId = random.first;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          const finalProduct = helper.createFinalProduct(product[0], finalStyles);

          expect(typeof finalProduct.id).to.equal('number');
          expect(typeof finalProduct.name).to.equal('string');
          expect(typeof finalProduct.slogan).to.equal('string');
          expect(typeof finalProduct.description).to.equal('string');
          expect(typeof finalProduct.category).to.equal('string');
          expect(typeof finalProduct.default_price).to.equal('string');
          // expect(typeof finalProduct.created_at).to.equal('string');
          // expect(typeof finalProduct.updated_at).to.equal('string');
          expect(Array.isArray(finalProduct.features)).to.equal(true);
          expect(Array.isArray(finalProduct.styles)).to.equal(false);
          expect(typeof finalProduct.styles).to.equal('object');
        });
        it(`it should accept a product object and style object as inputs, then return a single object with the following properties/datatypes - for product_id  ${random.second}`, async () => {
          const inputId = random.second;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          const finalProduct = helper.createFinalProduct(product[0], finalStyles);

          expect(typeof finalProduct.id).to.equal('number');
          expect(typeof finalProduct.name).to.equal('string');
          expect(typeof finalProduct.slogan).to.equal('string');
          expect(typeof finalProduct.description).to.equal('string');
          expect(typeof finalProduct.category).to.equal('string');
          expect(typeof finalProduct.default_price).to.equal('string');
          // do they need to equal string?
          // expect(typeof finalProduct.created_at).to.equal('string');
          // expect(typeof finalProduct.updated_at).to.equal('string');
          expect(Array.isArray(finalProduct.features)).to.equal(true);
          expect(Array.isArray(finalProduct.styles)).to.equal(false);
          expect(typeof finalProduct.styles).to.equal('object');
        });
        it(`it should accept a product object and style object as inputs, then return a single object with the following properties/datatypes - for product_id  ${random.third}}`, async () => {
          const inputId = random.third;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          const finalProduct = helper.createFinalProduct(product[0], finalStyles);

          expect(typeof finalProduct.id).to.equal('number');
          expect(typeof finalProduct.name).to.equal('string');
          expect(typeof finalProduct.slogan).to.equal('string');
          expect(typeof finalProduct.description).to.equal('string');
          expect(typeof finalProduct.category).to.equal('string');
          expect(typeof finalProduct.default_price).to.equal('string');
          // expect(typeof finalProduct.created_at).to.equal('string');
          // expect(typeof finalProduct.updated_at).to.equal('string');
          expect(Array.isArray(finalProduct.features)).to.equal(true);
          expect(Array.isArray(finalProduct.styles)).to.equal(false);
          expect(typeof finalProduct.styles).to.equal('object');
        });
        it(`it should accept a product object and style object as inputs, then return a single object with the following properties/datatypes - for product_id ${random.forth}`, async () => {
          const inputId = random.forth;
          const product = await db.models.Product.find({ id: inputId });
          const { styles } = product[0];
          const finalStyles = helper.createFinalStyles(styles, inputId);
          const finalProduct = helper.createFinalProduct(product[0], finalStyles);

          expect(typeof finalProduct.id).to.equal('number');
          expect(typeof finalProduct.name).to.equal('string');
          expect(typeof finalProduct.slogan).to.equal('string');
          expect(typeof finalProduct.description).to.equal('string');
          expect(typeof finalProduct.category).to.equal('string');
          expect(typeof finalProduct.default_price).to.equal('string');
          // expect(typeof finalProduct.created_at).to.equal('string');
          // expect(typeof finalProduct.updated_at).to.equal('string');
          expect(Array.isArray(finalProduct.features)).to.equal(true);
          expect(Array.isArray(finalProduct.styles)).to.equal(false);
          expect(typeof finalProduct.styles).to.equal('object');
        });
        describe('createFinalProduct specifics', () => {
          it('should return the correct data based on the product_id vs original csv data - for product_id 1', async () => {
            const inputId = 1;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.id).to.equal(1);
            expect(finalProduct.name).to.equal('Camo Onesie');
            expect(finalProduct.slogan).to.equal('Blend in to your crowd');
            expect(finalProduct.description).to.equal('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');
            expect(finalProduct.category).to.equal('Jackets');
            expect(finalProduct.default_price).to.equal('140.00');
          });
          it('should return the correct data based on the product_id vs original csv data - for product_id 50001', async () => {
            const inputId = 50001;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.id).to.equal(50001);
            expect(finalProduct.name).to.equal('Valentina Shorts');
            expect(finalProduct.slogan).to.equal('Quia aut qui vel aliquid ab amet nobis eius debitis.');
            expect(finalProduct.description).to.equal('Sunt voluptatem non maxime dolores quo ut. Qui itaque est sed assumenda molestiae laboriosam saepe. Officia cupiditate fugit.');
            expect(finalProduct.category).to.equal('Shorts');
            expect(finalProduct.default_price).to.equal('272.00');
          });
          it('should return the correct data based on the product_id vs original csv data - for product_id 250000', async () => {
            const inputId = 250000;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.id).to.equal(250000);
            expect(finalProduct.name).to.equal('Lempi Shirt');
            expect(finalProduct.slogan).to.equal('Doloribus ab facere nam qui.');
            expect(finalProduct.description).to.equal('Molestiae quaerat soluta sed reprehenderit. Sit tempora quis quibusdam ut quo. Facere eveniet repellat. Hic nisi possimus et illo sed recusandae repudiandae pariatur. Quod voluptatem sed commodi omnis provident aliquam alias quod est.');
            expect(finalProduct.category).to.equal('Shirt');
            expect(finalProduct.default_price).to.equal('174.00');
          });
          it('should return the correct data based on the product_id vs original csv data - for product_id 1000011', async () => {
            const inputId = 1000011;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.id).to.equal(1000011);
            expect(finalProduct.name).to.equal('Evangeline Shoes');
            expect(finalProduct.slogan).to.equal('Aut recusandae tenetur sint laudantium.');
            expect(finalProduct.description).to.equal('Sunt recusandae laborum aut ut voluptatum in modi voluptatum. At sit maiores repudiandae facere ex officia dolorem. Consequatur quos illo. Molestiae quasi aliquid atque consequatur consequatur ipsum et. Nesciunt et dolorum sit ipsa ad aspernatur eos eum. Dicta voluptas et magni dicta ad mollitia.');
            expect(finalProduct.category).to.equal('Shoes');
            expect(finalProduct.default_price).to.equal('587.00');
          });

          it('should return the correct feature data based on product_id vs original feature csv data - for product_id 1', async () => {
            const inputId = 1;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.features[0].feature).to.equal('Fabric');
            expect(finalProduct.features[0].value).to.equal('Canvas');

            expect(finalProduct.features[1].feature).to.equal('Buttons');
            expect(finalProduct.features[1].value).to.equal('Brass');
          });
          it('should return the correct feature data based on product_id vs original feature csv data - for product_id 50001', async () => {
            const inputId = 50001;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.features[0].feature).to.equal('Non-GMO');
            expect(finalProduct.features[0].value).to.equal(null);

            expect(finalProduct.features[1].feature).to.equal('Lens');
            expect(finalProduct.features[1].value).to.equal('Ultrasheen Silver');

            expect(finalProduct.features[2].feature).to.equal('Material');
            expect(finalProduct.features[2].value).to.equal('Control Support Bridge');
          });
          it('should return the correct feature data based on product_id vs original feature csv data - for product_id 250000', async () => {
            const inputId = 250000;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.features[0].feature).to.equal('Buttons');
            expect(finalProduct.features[0].value).to.equal('White Resin');

            expect(finalProduct.features[1].feature).to.equal('Lens');
            expect(finalProduct.features[1].value).to.equal('Ultrasheen Basic');
          });
          it('should return the correct feature data based on product_id vs original feature csv data - for product_id 1000011', async () => {
            const inputId = 1000011;
            const product = await db.models.Product.find({ id: inputId });
            const { styles } = product[0];
            const finalStyles = helper.createFinalStyles(styles, inputId);
            const finalProduct = helper.createFinalProduct(product[0], finalStyles);

            expect(finalProduct.features[0].feature).to.equal('Material');
            expect(finalProduct.features[0].value).to.equal('FullControl Skin');
          });
        });
      });
    });
  });
});
