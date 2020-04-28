import { VPA } from '../src/vpa';

describe('VPA', () => {
  const tests: [string, boolean][] = [
    ['amazing-uid@upi', true],
    ['random9999@upi', true],
    ['vpa_with_underscore@upi', true],
    ['vpa-with-hyphen@upi', true],
    ['vpa.with.dot@upi', true],
    ['9876543210@upi', true],

    ['it@upi', false],
    ['with#hash@upi', false],
    ['with space@upi', false],
    ['with@at@upi', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@upi', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(VPA.validate(value)).toBe(expected);
  });
});

describe('VPA with options: { maxLength: 20 }', () => {
  const tests: [string, boolean][] = [
    ['amazing-uid@upi', true],
    ['random9999@upi', true],

    ['vpa_with_underscore@upi', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@upi', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(VPA.validate(value, { maxLength: 20 })).toBe(expected);
  });
});

describe('VPA with options: { handles: true }', () => {
  const tests: [string, boolean][] = [
    ['amazing-uid@upi', true],
    ['random9999@upi', true],
    ['yesbank@ybl', true],
    ['axisbank@okaxis', true],

    ['axisbank@bankaxis', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@upi', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(VPA.validate(value, { handles: true })).toBe(expected);
  });
});

describe('VPA with options: { handles: ["bankaxis", "superbank"] }', () => {
  const tests: [string, boolean][] = [
    ['amazing-uid@upi', true],
    ['random9999@upi', true],
    ['yesbank@ybl', true],
    ['axisbank@okaxis', true],
    ['axisbank@bankaxis', true],
    ['super-vpa@superbank', true],

    ['super-vpa@banksuper', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@upi', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@superbank', false],
  ];
  const handles = ['bankaxis', 'superbank'];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(VPA.validate(value, { handles })).toBe(expected);
  });
});

describe('VPA with options: { maxLength: 20, handles: ["bankaxis", "superbank"] }', () => {
  const tests: [string, boolean][] = [
    ['amazing-uid@upi', true],
    ['random9999@upi', true],
    ['yesbank@ybl', true],
    ['axisbank@okaxis', true],
    ['axisbank@bankaxis', true],
    ['super-vpa@superbank', true],

    ['super-vpa@banksuper', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@upi', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@superbank', false],
  ];
  const handles = ['bankaxis', 'superbank'];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(VPA.validate(value, { maxLength: 20, handles })).toBe(expected);
  });
});
