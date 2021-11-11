const anaylseArray = require('./arrayAnalysis');

test('returns an object', () => {
  const object = anaylseArray([1, 8, 3, 4, 2, 6]);
  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
