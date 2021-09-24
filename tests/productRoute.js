const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
// eslint-disable-next-line no-unused-vars
const server = require('../service/index');

const { expect } = chai;
const { db } = require('../database/database');

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

describe('products, mongo style 🔥', () => {
  describe('query speeds', () => {
    describe('random products between ids 1 and 100,000', async () => {
      const random = getRandomNumbers(1, 100000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 100,001 and 200,000', async () => {
      const random = getRandomNumbers(100001, 200000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 200,001 and 300,000', async () => {
      const random = getRandomNumbers(200001, 300000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 300,001 and 400,000', async () => {
      const random = getRandomNumbers(300001, 400000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 400,001 and 500,000', async () => {
      const random = getRandomNumbers(400001, 500000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 500,001 and 600,000', async () => {
      const random = getRandomNumbers(500001, 600000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 600,001 and 700,000', async () => {
      const random = getRandomNumbers(600001, 700000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 700,001 and 800,000', async () => {
      const random = getRandomNumbers(7000001, 800000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 800,001 and 900,000', async () => {
      const random = getRandomNumbers(800001, 900000);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
    describe('random products between ids 900,001 and 1,000,011 ', async () => {
      const random = getRandomNumbers(900001, 1000011);
      it(`it should return a query in less than 5ms for product id - ${random.first}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.second}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.third}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
      it(`it should return a query in less than 5ms for product id - ${random.forth}`, async () => {
        const inputId = random.first;
        const product = await db.models.Product.find({ id: inputId }).explain('netStates');
        const executionTime = product.executionStats.executionTimeMillis;

        expect(executionTime < 5).to.equal(true);
      });
    });
  });
});
