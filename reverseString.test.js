const reverseString = require('./reverseString.js');
test('takes houssein and returns niessuoh', () => {
  expect(reverseString('houssein')).toMatch('niessuoh');
});
