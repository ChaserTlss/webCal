//const calc = require('./calculator');
import {Calculator as calc} from './calculator'
import {jest} from '@jest/globals';

function testBasicOperator(cal, output) {
  test('test the basic operator', () => {
    output.mockReset();
    /* evaluate with '' and output should not be call */
    cal.evaluate('');
    expect(output).not.toHaveBeenCalled();

    output.mockReset();
    /* evaluate with '1+2' and output should be call with '3' */
    cal.evaluate('1+2');
    expect(output).toHaveBeenCalledWith('3');

    output.mockReset();
    /* evaluate with '2-1' and output should be call with '1' */
    cal.evaluate('2-1');
    expect(output).toHaveBeenCalledWith('1');

    output.mockReset();
    /* evaluate with '2*3' and output should be call with '6' */
    cal.evaluate('2*3');
    expect(output).toHaveBeenCalledWith('6');

    output.mockReset();
    /* evaluate with '4/2' and output should be call with '2' */
    cal.evaluate('4/2');
    expect(output).toHaveBeenCalledWith('2');

    output.mockReset();
    /* evaluate with '2/0' and output should be call with 'Infinity' */
    cal.evaluate('2/0');
    expect(output).toHaveBeenCalledWith('Infinity');

    output.mockReset();
    /* evaluate with '2%3' and output should be call with '2' */
    cal.evaluate('2%3');
    expect(output).toHaveBeenCalledWith('2');

    output.mockReset();
    /* evaluate with '2**3' and output should be call with '8' */
    cal.evaluate('2**3');
    expect(output).toHaveBeenCalledWith('8');

    output.mockReset();
    /* evaluate with '2&1' and output should be call with '0' */
    cal.evaluate('2&1');
    expect(output).toHaveBeenCalledWith('0');

    output.mockReset();
    /* evaluate with 'yoiuou' and output should be call with 'error' */
    cal.evaluate('yoiuou');
    expect(output).toHaveBeenCalledWith('error');
  });

}

describe('calculator', () => {
  updateResult = jest.fn();
  const cal = new calc(updateResult);

  testBasicOperator(cal, updateResult);

  test('command clear', () => {
    /* evaluate with 'clear' and output should be call with '' */
    cal.evaluate('clear');
    expect(updateResult).toHaveBeenCalledWith('');
  });

  /* make sure the basic operator is still working */
  testBasicOperator(cal, updateResult);

});
