const chai = require('chai');
const multiplier = require('./multiplier');

const should = chai.should();

describe('splitIntoNumbers', () => {
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    multiplier.multiply([1, 2]).should.equal(2);
  });
});

describe('factorize', () => {
});

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
