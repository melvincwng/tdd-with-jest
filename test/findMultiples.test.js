const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
// findMultiples(2, 6) // return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

test("should return [2,4,6]", function() {
    expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
  });

test("should return [2,4,6,8,10]", function() {
    expect(findMultiples(2, 10)).toEqual([2, 4, 6, 8, 10]);
  });

test("should return [1-7]", function() {
    expect(findMultiples(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

test("should return [7-77]", function() {
    expect(findMultiples(7, 80)).toEqual([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77]);
  });