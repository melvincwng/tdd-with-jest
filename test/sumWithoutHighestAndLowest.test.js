const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

// test cases
test("should return 16", function() {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
  });

test("should return 5", function() {
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
  });

test("should return 19", function() {
    expect(sumWithoutHighestAndLowest([-1, 0, 11, -1, 8, 14, 14])).toEqual(19);
  });

// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5