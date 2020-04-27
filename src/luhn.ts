export class Luhn {
  static validate(value: string): boolean {
    const digits = [...value.replace(/\s/g, '')].reverse();

    const sum = digits
      .map((digit: number | string, index) => {
        digit = parseInt(digit as string, 10) * (index % 2 !== 0 ? 2 : 1);
        return digit > 9 ? digit - 9 : digit;
      })
      .reduce((prev, current) => {
        return prev + current;
      });

    return sum > 0 && sum % 10 === 0;
  }
}
