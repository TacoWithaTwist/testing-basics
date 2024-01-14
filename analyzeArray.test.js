const arrayAnalyzer = require('./analyzeArray.js');
test('returns maximum that is 8', () => {
  expect(arrayAnalyzer.maximum()).toBe(8);
});
test('returns minimum that is 1', () => {
  expect(arrayAnalyzer.minimum()).toBe(1);
});
test('returns average that is 4', () => {
  expect(arrayAnalyzer.average()).toBe(4);
});
test('returns length that is 6', () => {
  expect(arrayAnalyzer.length()).toBe(6);
});
