const assert = require('assert');
const operations = require('../modules/operations')

it('correctly calculates the sum of 5 and 6', () => {
  assert.equal(operations.add(5, 6), 11);
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(5), -1);
      assert.equal([1, 2, 3].indexOf(0), -1);
      // [1, 2, 3].indexOf(5).should.equal(-1);
      // [1, 2, 3].indexOf(0).should.equal(-1);
    })
  });
  describe('#indexOf()', function () {
    it('should not return -1 when the value is present', function () {
      assert.notEqual([1, 2, 3].indexOf(3), -1);
      assert.notEqual([1, 2, 3].indexOf(1), -1);
      // [1, 2, 3].indexOf(5).should.equal(-1);
      // [1, 2, 3].indexOf(0).should.equal(-1);
    })
  })
});