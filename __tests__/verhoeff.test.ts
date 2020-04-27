import { Verhoeff } from '../src/verhoeff';

describe('Verhoeff', () => {
  const tests: [string, boolean][] = [
    ['98765432101234567897', true],
    ['45908745543341', true],

    ['98765432101234567896', false],
    ['a98765432101234567897', false],
    ['45908745543343', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Verhoeff.validate(value)).toBe(expected);
  });
});
