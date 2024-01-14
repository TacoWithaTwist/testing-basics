const capitalise = require('./capitalise.js');
test('takes the word `apple` and returns `Apple`', () => {
  expect(capitalise('apple')).toMatch('Apple');
});
