"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luhn = void 0;
class Luhn {
    static validate(value) {
        const digits = [...value.replace(/\s/g, '')].reverse();
        const sum = digits
            .map((digit, index) => {
            digit = parseInt(digit, 10) * (index % 2 !== 0 ? 2 : 1);
            return digit > 9 ? digit - 9 : digit;
        })
            .reduce((prev, current) => {
            return prev + current;
        });
        return sum > 0 && sum % 10 === 0;
    }
}
exports.Luhn = Luhn;
