const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const { describe, it } = require('mocha');
const { products } = require('../routes/productsRoute');
const server = require('../index');

chai.use(chaiHttp);

describe('products', () => {
  describe('should be able to fetch different products', () => {
    it('should return the correct product information for product with id number 1', (done) => {
      chai.request('http://localhost:3000')
        .get('/products/product_id=1', products)
        .end((err, response) => {
          expect(response.body[0].id).to.equal(1);
          expect(response.body[0].name).to.equal('Camo Onesie');
          expect(response.body[0].slogan).to.equal('Blend in to your crowd');
          expect(response.body[0].description).to.equal('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');
          expect(response.body[0].category).to.equal('Jackets');
          expect(response.body[0].default_price).to.equal(140);
          expect(response.body[0].hasOwnProperty('created_at')).to.equal(true);
          expect(response.body[0].hasOwnProperty('updated_at')).to.equal(true);
          done();
        });
    });
    it('should return the correct product information for product with id number 2', (done) => {
      chai.request('http://localhost:3000')
        .get('/products/product_id=2', products)
        .end((err, response) => {
          expect(response.body[0].id).to.equal(2);
          expect(response.body[0].name).to.equal('Bright Future Sunglasses');
          expect(response.body[0].slogan).to.equal("You've got to wear shades");
          expect(response.body[0].description).to.equal("Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.");
          expect(response.body[0].category).to.equal('Accessories');
          expect(response.body[0].default_price).to.equal(69);
          expect(response.body[0].hasOwnProperty('created_at')).to.equal(true);
          expect(response.body[0].hasOwnProperty('updated_at')).to.equal(true);
          done();
        });
    });
    it('should return the correct product information for product with id number 3', (done) => {
      chai.request('http://localhost:3000')
        .get('/products/product_id=3', products)
        .end((err, response) => {
          expect(response.body[0].id).to.equal(3);
          expect(response.body[0].name).to.equal('Morning Joggers');
          expect(response.body[0].slogan).to.equal('Make yourself a morning person');
          expect(response.body[0].description).to.equal("Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.");
          expect(response.body[0].category).to.equal('Pants');
          expect(response.body[0].default_price).to.equal(40);
          expect(response.body[0].hasOwnProperty('created_at')).to.equal(true);
          expect(response.body[0].hasOwnProperty('updated_at')).to.equal(true);
          done();
        });
    });
    it('should return the correct product information for product with id number 4', (done) => {
      chai.request('http://localhost:3000')
        .get('/products/product_id=4', products)
        .end((err, response) => {
          expect(response.body[0].id).to.equal(4);
          expect(response.body[0].name).to.equal("Slacker's Slacks");
          expect(response.body[0].slogan).to.equal('Comfortable for everything, or nothing');
          expect(response.body[0].description).to.equal("I'll tell you how great they are after I nap for a bit.");
          expect(response.body[0].category).to.equal('Pants');
          expect(response.body[0].default_price).to.equal(65);
          expect(response.body[0].hasOwnProperty('created_at')).to.equal(true);
          expect(response.body[0].hasOwnProperty('updated_at')).to.equal(true);
          done();
        });
    });
    it('should return the correct product information for product with id number 25', (done) => {
      chai.request('http://localhost:3000')
        .get('/products/product_id=25', products)
        .end((err, response) => {
          expect(response.body[0].id).to.equal(25);
          expect(response.body[0].name).to.equal('Kellen Heels');
          expect(response.body[0].slogan).to.equal('Quis quia dolore.');
          expect(response.body[0].description).to.equal('Optio atque et placeat. Nihil impedit et totam. Exercitationem provident officia totam enim accusantium quisquam quia quo. Saepe aliquid nam a consequuntur et sint veniam.');
          expect(response.body[0].category).to.equal('Heels');
          expect(response.body[0].default_price).to.equal(692);
          expect(response.body[0].hasOwnProperty('created_at')).to.equal(true);
          expect(response.body[0].hasOwnProperty('updated_at')).to.equal(true);
          done();
        });
    });
    it('should return the correct product information for product with id number 100,000', (done) => {
      chai.request('http://localhost:3000')
        .get('/products/product_id=100000', products)
        .end((err, response) => {
          expect(response.body[0].id).to.equal(100000);
          expect(response.body[0].name).to.equal('Furman Hat');
          expect(response.body[0].slogan).to.equal('Labore eligendi delectus odio reprehenderit quaerat sunt voluptas.');
          expect(response.body[0].description).to.equal('Eaque harum delectus a corrupti ut. Quisquam dicta quo ex ut voluptas. Et et at culpa aperiam asperiores provident porro temporibus deserunt. Ab labore ullam iste.');
          expect(response.body[0].category).to.equal('Hat');
          expect(response.body[0].default_price).to.equal(371);
          expect(response.body[0].hasOwnProperty('created_at')).to.equal(true);
          expect(response.body[0].hasOwnProperty('updated_at')).to.equal(true);
          done();
        });
    });
  });
});
