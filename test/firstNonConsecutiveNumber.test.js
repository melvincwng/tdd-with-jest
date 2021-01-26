const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected
/* firstNonConsecutiveNumber([1, 3])             // return 3
firstNonConsecutiveNumber([1, 2, 4, 5, 6])    // return 4
firstNonConsecutiveNumber([-1, 0, 1, -10])    // return -10
firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6]) // return null */

test("should return 3", function() {
    expect(firstNonConsecutiveNumber([1, 3])).toEqual(3);
  });

test("should return 4", function() {
    expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
  });

test("should return -10", function() {
    expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toEqual(-10);
  });

test("should return null", function() {
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null);
  });
