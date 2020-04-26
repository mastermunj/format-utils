export class Validator {
  static mobile(value: string): boolean {
    return /^[6789]\d{9}$/.test(value);
  }

  static pincode(value: string | number): boolean {
    return /^[1-9]\d{5}$/.test(value as string);
  }
}
