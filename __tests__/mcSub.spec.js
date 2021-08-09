import { mcSub } from '../js/mcSub.js'

describe('substraction', () => {
  test('input two arguments', () => {
    expect(mcSub('123', '20')).toBe('103');
  });

  test('input mulitple arguments', () => {
    expect(mcSub('123', '10', '10')).toBe('103');
  });

});