const ceaserCipher = require('./ceaserCipher');

test('returns crypted string', () => {
  expect(ceaserCipher('zack', 1)).toBe('abdl');
});

test('ignore special characters (!,@,#,...)', () => {
  expect(ceaserCipher('hey!', 1)).toBe('ifz!');
});

test('Works for both uppercase and lowercase letters', () => {
  expect(ceaserCipher('Wow!', 1)).toBe('Xpx!');
});

test('Works with different key shift', () => {
  expect(ceaserCipher('Wow!', 10)).toBe('Gyg!');
});

test('Works with negative key shift', () => {
  expect(ceaserCipher('ABC@', -1)).toBe('ZAB@');
});
