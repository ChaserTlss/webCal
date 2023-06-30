//const calc = require('./calculator');
import {Calculator as calc} from './calculator'
import {jest} from '@jest/globals';

describe('calculator', () => {


  test('evaluate', () => {
    /* evaluate with '' and updateResult should not be call */
    updateResult = jest.fn();

    const cal = new calc(updateResult);

    cal.evaluate('');
    expect(updateResult).not.toHaveBeenCalled();
  });
});
