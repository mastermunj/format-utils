export type VpaValidationOptions = {
  maxLength?: number;
  handles?: boolean | string[];
};

const ValidationOptionsDefaults: VpaValidationOptions = {
  maxLength: 50,
  handles: true,
};

export class VPA {
  static defaultVpaHandles: string[] | undefined = undefined;

  static validate(value: string, options?: VpaValidationOptions): boolean {
    options = Object.assign({}, ValidationOptionsDefaults, options);

    const regex = /^[a-z0-9_.-]{3,}@[a-z]{3,}$/i;
    let isValidFormat = regex.test(value) && value.length <= (options.maxLength as number);
    if (!isValidFormat) {
      return false;
    }

    if (options.handles) {
      const defaultHandles = VPA.getDefaultVpaHandles();
      options.handles = (
        options.handles === true ? defaultHandles : [...options.handles, ...defaultHandles]
      ) as string[];
      const handle = value.split('@')[1];
      isValidFormat = options.handles.indexOf(handle) >= 0;
    }
    return isValidFormat;
  }

  static getDefaultVpaHandles(): string[] {
    if (VPA.defaultVpaHandles === undefined) {
      VPA.defaultVpaHandles = require('./vpa-handles.json');
    }
    return VPA.defaultVpaHandles as string[];
  }
}
