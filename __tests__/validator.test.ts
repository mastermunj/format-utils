import { Validator } from '../src/validator';

describe('Mobile', () => {
  const tests: [string, boolean][] = [
    ['9876543210', true],
    ['8765432109', true],
    ['7654321098', true],
    ['6543210987', true],
    ['5432109876', false],
    ['4321098765', false],
    ['3210987654', false],
    ['2109876543', false],
    ['1098765432', false],
    ['0987654321', false],
    ['987654321', false],
    ['a987654321', false],
    ['987654321a', false],
    ['9876 54321', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.mobile(value)).toBe(expected);
  });
});

describe('Pincode', () => {
  const tests: [string, boolean][] = [
    ['403294', true],
    ['110014', true],
    ['600036', true],
    ['a12345', false],
    ['6345678', false],
    ['012345', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.pincode(value)).toBe(expected);
  });
});
