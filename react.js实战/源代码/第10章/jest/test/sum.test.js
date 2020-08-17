import utils from '../src/sum';

test('sum(2 + 2) 等于 4', () => {
  expect(utils.sum(2, 2)).toBe(4);
})