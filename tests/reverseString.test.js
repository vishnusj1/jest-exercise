const revStr = require('./reverseString');

test('reverse', () => {
  expect(revStr('hey')).toBe('yeh');
});

test('Returns null on empty input', () => {
  expect(revStr('')).toBe(null);
});

test('Dosent apply to a single character', () => {
  expect(revStr('h')).toBe('h');
});

test('Returns null if passed anything other than a string', () => {
  expect(revStr(1)).toBe(null);
});
