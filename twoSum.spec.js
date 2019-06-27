const { expect } = require('chai');
const { assert } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array when empty array is input', () => {
    expect(twoSum([], 5)).to.have.lengthOf(0);
  });
  it('Returns all indices of array when both arrays elements equal the sum', () => {
    expect(twoSum([1, 2], 3)).to.have.lengthOf(2);
    assert.include((twoSum([1, 2], 3)), 0);
    assert.include((twoSum([1, 2], 3)), 1);
  });
  it('Returns for a simple array', () => {
    expect(twoSum([1, 4, 2], 3)).to.have.lengthOf(2);
    assert.include((twoSum([1, 4, 2], 3)), 0);
    assert.include((twoSum([1, 4, 2], 3)), 2);
  });
  it('Returns [] when it cant find sum', () => {
    expect(twoSum([3, 4, 5], 3)).to.have.lengthOf(0);
  });
  it('Example with duplicates', () => {
    expect(twoSum([2, 2]), 4).to.have.lengthOf(0);
  })
});
