const calculator = require('./calc');

test('add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('multiply', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('divide', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
