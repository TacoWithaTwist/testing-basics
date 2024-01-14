const newCalc = require('./calculator.js');
test('get 1+1 and returns 2', () => {
  expect(newCalc.add(1, 1)).toBe(2);
});
test('get 1-1 and returns 0', () => {
  expect(newCalc.subtract(1, 1)).toBe(0);
});
test('get 1/1 and returns 1', () => {
  expect(newCalc.divide(1, 1)).toBe(1);
});
test('get 1*1 and returns 1', () => {
  expect(newCalc.multiply(1, 1)).toBe(1);
});
