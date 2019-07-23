const fizzBuzz = require('./index');

describe('fizzBuzz', () => {
  it('returns 1 when the input is 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('returns 2 when the input is 2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });
});
