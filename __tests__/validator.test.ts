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

describe('IMEI', () => {
  const tests: [string, boolean][] = [
    ['49-015420-323751-8', true],
    ['490154203237518', true],
    ['356938035643809', true],

    ['49-015420-323751-9', false],
    ['490154203237519', false],
    ['4901542032375191', false],
    ['49015420323751', false],
    ['a49015420323751', false],
    ['49015420323751a', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.imei(value)).toBe(expected);
  });
});

describe('Aadhaar', () => {
  const tests: [string, boolean][] = [
    ['234567890124', true],
    ['987654321096', true],

    ['a87654321096', false],
    ['98765432109a', false],
    ['087654321096', false],
    ['187654321096', false],
    ['9876543210967', false],
    ['98765432109', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.aadhaar(value)).toBe(expected);
  });
});

describe('Aadhaar VID', () => {
  const tests: [string, boolean][] = [
    ['9876543210987659', true],
    ['6234897234982733', true],

    ['9876543210987656', false],
    ['6234897234982734', false],
    ['a876543210987659', false],
    ['987654321098765a', false],
    ['987654321098765', false],
    ['98765432109876591', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.aadhaarVID(value)).toBe(expected);
  });
});

describe('GST', () => {
  const tests: [string, boolean][] = [
    ['22ALJPT5243L1ZS', true],
    ['18AABCT3518Q1ZV', true],
    ['37AADCB2230M2ZR', true],

    ['22ALJPT5243L1ZB', false],
    ['38AABCT3518Q1ZV', false],
    ['47AADCB2230M2ZR', false],
    ['47AADCB2230M2ZRT', false],
    ['47AADCB2230M2Z', false],
    ['47AAD CB2230M2Z', false],
    ['47AAD-CB2230M2Z', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.gst(value)).toBe(expected);
  });

  test.each(tests)(`Check GST Checksum %s => %s`, (value, expected) => {
    expect(Validator.gstChecksum(value)).toBe(expected);
  });
});

describe('Vehicle Registration Number', () => {
  const tests: [string, boolean][] = [
    ['DL4CAF4943', true],
    ['GJ5CL2213', true],
    ['GJ 5 CL 2213', true],
    ['KL 01 CK 1', true],
    ['TN 58 N 4006', true],

    ['DL4CAF494G', false],
    ['DL4CANF4943', false],
    ['1DL4CAF4943', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.vehicleRegistration(value)).toBe(expected);
  });
});

describe('VPA', () => {
  const tests: [string, boolean][] = [
    ['amazing-uid@upi', true],
    ['random9999@upi', true],

    ['axisbank@bankaxis', false],
    ['very-long-upi-id-or-vpa-should-not-pass-the-validation@upi', false],
  ];
  test.each(tests)(`Check %s => %s`, (value, expected) => {
    expect(Validator.vpa(value)).toBe(expected);
  });
});
