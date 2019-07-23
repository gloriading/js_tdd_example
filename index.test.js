const fizzBuzz = require('./index');

describe('fizzBuzz', () => {
  it('returns 1 when the input is 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  it('returns 2 when the input is 2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });

  it('returns "Fizz" when the input is 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it('returns "Fizz" when the input is multiples of 3', () => {
    expect(fizzBuzz(6)).toEqual('Fizz');
  });

  it('returns "Buzz" when the input is 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it('returns "Buzz" when the input is multiples of 5', () => {
    expect(fizzBuzz(10)).toEqual('Buzz');
  });

  it('returns "FizzBuzz" when the input is multiples of 3 & 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });
});
