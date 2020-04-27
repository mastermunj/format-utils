import { Luhn } from './luhn';

export class Validator {
  static mobile(value: string): boolean {
    return /^[6789]\d{9}$/.test(value);
  }

  static pincode(value: string | number): boolean {
    return /^[1-9]\d{5}$/.test(value as string);
  }

  static pan(value: string): boolean {
    return /^[A-Z]{3}[PCHABGJLFTE][A-Z]\d{4}[A-Z]$/i.test(value);
  }

  static tan(value: string): boolean {
    return /^[A-Z]{4}\d{5}[A-Z]$/i.test(value);
  }

  static uan(value: string): boolean {
    return /^\d{12}$/.test(value);
  }

  static ifsc(value: string): boolean {
    return /^[A-Z]{4}0[A-Z0-9]{6}$/i.test(value);
  }

  static esic(value: string): boolean {
    return /^\d{17}$/.test(value);
  }

  static imei(value: string): boolean {
    value = value.replace(/[\s-]+/g, '');
    return /^\d{15}$/.test(value) && Luhn.validate(value);
  }
}
