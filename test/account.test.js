const account = require("../src/account");

test("This should return 500", function () {
  expect(account.getBalance()).toEqual(500);
});

test("This should return 1500", function () {
    account.deposit(1000)
    expect(account.getBalance()).toEqual(1500);
});

test("This should return 0", function () {
    account.withdraw(1500)
    expect(account.getBalance()).toEqual(0);
});