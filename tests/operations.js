const assert = require('assert');
const operations = require('../modules/operations')

it('correctly calculates the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4);
});