import { Luhn } from './luhn';
import { Verhoeff } from './verhoeff';
import { VPA, VpaValidationOptions } from './vpa';

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

  static aadhaar(value: string): boolean {
    value = value.replace(/[\s-]+/g, '');
    return /^[2-9]\d{11}$/.test(value) && Verhoeff.validate(value);
  }

  static aadhaarVID(value: string): boolean {
    value = value.replace(/[\s-]+/g, '');
    return /^\d{16}$/.test(value) && Verhoeff.validate(value);
  }

  static gst(value: string): boolean {
    const regex = /^([0-2][0-9]|[3][0-7])[A-Z]{3}[ABCFGHLJPTK][A-Z]\d{4}[A-Z][A-Z0-9][Z][A-Z0-9]$/i;
    return regex.test(value) && Validator.gstChecksum(value);
  }

  static gstChecksum(value: string): boolean {
    if (!/^[0-9A-Z]{15}$/i.test(value)) {
      return false;
    }
    const chars = [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const values = [...value.toUpperCase()];
    const lastChar = values.pop();
    const sum = values
      .map((char, index) => {
        const product = chars.indexOf(char) * (index % 2 !== 0 ? 2 : 1);
        return Math.floor(product / chars.length) + (product % chars.length);
      })
      .reduce((prev, current) => {
        return prev + current;
      });
    const checksum = (chars.length - (sum % chars.length)) % chars.length;
    return chars[checksum] === lastChar;
  }

  static vehicleRegistration(value: string): boolean {
    const regex = /^[A-Z]{2}[\s-.]?[0-9]{1,2}[\s-.]?[0-9A-Z]{1,3}[\s-.]?[0-9]{1,4}$/i;
    return regex.test(value);
  }

  static vpa(value: string, options?: VpaValidationOptions): boolean {
    return VPA.validate(value, options);
  }
}
