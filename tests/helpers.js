const chai = require('chai');
const { describe, it } = require('mocha');

const { expect } = chai;
describe('test function', () => {
  it('should pass because i want it too', (done) => {
    let t = 'pass';
    expect(t).to.be.a('string');
    done();
  });
});
