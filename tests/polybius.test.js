// Write your tests here!

const { expect } = require('chai');
const polybius = require('../src/polybius');

describe(('Polybius Square'),() => {
  it(('Will return an encoded message'), () => {
    const expected = '4432423352125413';
    const actual = polybius('thinkful');
    expect(actual).to.eql(expected);
  });
  it(('Will return a decoded message'), () => {
    const expected = 'th(i/j)nkful';
    const actual = polybius('4432423352125413', false);
    expect(actual).to.eql(expected);
  });
  it(('Will return false input is missing'), () => {
    const expected = false;
    const actual = polybius('', false);
    expect(actual).to.eql(expected);
  });
  it(('Will return false if the string of coordinates is not an even number, ignoring spaces'), () => {
    const expected = false;
    const actual = polybius('3251131343 25432413419', false);
    expect(actual).to.eql(expected);
  });
  it(('Spaces should be maintained throughout'), () => {
    const expected = 'hello world';
    const actual = polybius('3251131343 2543241341', false);
    expect(actual).to.eql(expected);
  });
  it(('Capital letter should be ignored'), () => {
    const expected = '3251131343 2543241341';
    const actual = polybius('Hello World');
    expect(actual).to.eql(expected);
  });
  it(('The letters "I" and "J" should be shown together if included'), () => {
    const expected = 'th(i/j)nkful';
    const actual = polybius('4432423352125413', false);
    expect(actual).to.eql(expected);
  });
});