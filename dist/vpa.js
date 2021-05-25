"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPA = void 0;
const ValidationOptionsDefaults = {
    maxLength: 50,
    handles: true,
};
class VPA {
    static validate(value, options) {
        options = Object.assign({}, ValidationOptionsDefaults, options);
        const regex = /^[a-z0-9_.-]{3,}@[a-z]{3,}$/i;
        let isValidFormat = regex.test(value) && value.length <= options.maxLength;
        if (!isValidFormat) {
            return false;
        }
        if (options.handles) {
            const defaultHandles = VPA.getDefaultVpaHandles();
            options.handles = (options.handles === true ? defaultHandles : [...options.handles, ...defaultHandles]);
            const handle = value.split('@')[1];
            isValidFormat = options.handles.indexOf(handle) >= 0;
        }
        return isValidFormat;
    }
    static getDefaultVpaHandles() {
        if (VPA.defaultVpaHandles === undefined) {
            VPA.defaultVpaHandles = require('./vpa-handles.json');
        }
        return VPA.defaultVpaHandles;
    }
}
exports.VPA = VPA;
VPA.defaultVpaHandles = undefined;
