//const calc = require('./calculator');
import {Calculator as calc} from './calculator'
import {jest} from '@jest/globals';

describe('calculator', () => {
  updateResult = jest.fn();
  const cal = new calc(updateResult);

  test('evaluate with empty', () => {
    /* evaluate with '' and updateResult should not be call */
    cal.evaluate('');
    expect(updateResult).not.toHaveBeenCalled();
  });

  test('evaluate with 1+2', () => {
    /* evaluate with '1+2' and updateResult should be call with '3' */
    cal.evaluate('1+2');
    expect(updateResult).toHaveBeenCalledWith('3');
  });

  test('evaluate with 2-1', () => {
    /* evaluate with '2-1' and updateResult should be call with '1' */
    cal.evaluate('2-1');
    expect(updateResult).toHaveBeenCalledWith('1');
  });

  test('evaluate with 2*3', () => {
    /* evaluate with '2*3' and updateResult should be call with '6' */
    cal.evaluate('2*3');
    expect(updateResult).toHaveBeenCalledWith('6');
  });

  test('evaluate with 4/2', () => {
    /* evaluate with '4/2' and updateResult should be call with '2' */
    cal.evaluate('4/2');
    expect(updateResult).toHaveBeenCalledWith('2');
  });

  test('evaluate with 2/0', () => {
    /* evaluate with '2/0' and updateResult should be call with 'Infinity' */
    cal.evaluate('2/0');
    expect(updateResult).toHaveBeenCalledWith('Infinity');
  });

  test('evaluate with 2%3', () => {
    /* evaluate with '2%3' and updateResult should be call with '2' */
    cal.evaluate('2%3');
    expect(updateResult).toHaveBeenCalledWith('2');
  });

  test('evaluate with 2**3', () => {
    /* evaluate with '2**3' and updateResult should be call with '8' */
    cal.evaluate('2**3');
    expect(updateResult).toHaveBeenCalledWith('8');
  });

  test('evaluate with 2&1', () => {
    /* evaluate with '2&1' and updateResult should be call with '0' */
    cal.evaluate('2&1');
    expect(updateResult).toHaveBeenCalledWith('0');
  });

});
