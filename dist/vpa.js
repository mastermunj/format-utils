"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPA = void 0;
const ValidationOptionsDefaults = {
    maxLength: 50,
    handles: true,
};
const vpa_handles_json_1 = __importDefault(require("./vpa-handles.json"));
class VPA {
    static validate(value, options) {
        options = Object.assign({}, ValidationOptionsDefaults, options);
        const regex = /^[a-z0-9_.-]{3,}@[a-z]{3,}$/i;
        let isValidFormat = regex.test(value) && value.length <= options.maxLength;
        if (!isValidFormat) {
            return false;
        }
        if (options.handles) {
            options.handles = (options.handles === true ? vpa_handles_json_1.default : [...options.handles, ...vpa_handles_json_1.default]);
            const handle = value.split('@')[1];
            isValidFormat = options.handles.indexOf(handle) >= 0;
        }
        return isValidFormat;
    }
}
exports.VPA = VPA;
VPA.defaultVpaHandles = undefined;
