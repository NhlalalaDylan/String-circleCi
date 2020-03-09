const hello = require('./sum');

test('size of hello is 5', () => {
  expect(hello("hello")).toBe(5);
});
