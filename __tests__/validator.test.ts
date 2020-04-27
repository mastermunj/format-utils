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

describe('PAN', () => {
  const tests: [string, boolean][] = [
    ['ALWPG5809L', true],
    ['alwpg5809l', true],
    ['ABAB12345Y', false],
    ['abab12345y', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.pan(value)).toBe(expected);
  });
});

describe('TAN', () => {
  const tests: [string, boolean][] = [
    ['RAJA99999B', true],
    ['AAAA99999A', true],
    ['BLRW39567H', true],
    ['blrw39567h', true],

    ['RAJA999991', false],
    ['RAJA9999WB', false],
    ['R2JA9999WB', false],
    ['R2JA9999B', false],
    ['R2JA9999WB1', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.tan(value)).toBe(expected);
  });
});

describe('UAN', () => {
  const tests: [string, boolean][] = [
    ['987654321098', true],
    ['123456789012', true],

    ['98765432101', false],
    ['9876543210987', false],
    ['A98765432109', false],
    ['98765432109A', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.uan(value)).toBe(expected);
  });
});

describe('IFSC', () => {
  const tests: [string, boolean][] = [
    ['SBIN0011569', true],
    ['BKID0006046', true],
    ['BKID000604D', true],

    ['BKID000604', false],
    ['BKID1006046', false],
    ['BK1D0006046', false],
    ['BKID00060461', false],
    ['BKID0006046D', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.ifsc(value)).toBe(expected);
  });
});

describe('ESIC', () => {
  const tests: [string, boolean][] = [
    ['12345678901234567', true],

    ['123456789012345678', false],
    ['1234567890123456', false],
    ['A2345678901234567', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.esic(value)).toBe(expected);
  });
});
