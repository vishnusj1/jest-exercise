const capitalizeString = require('./capitalize_string');

test('capitalize', () => {
  expect(capitalizeString('hey mon')).toBe('Hey mon');
});
