export type VpaValidationOptions = {
  maxLength?: number;
  handles?: boolean | string[];
};

const ValidationOptionsDefaults: VpaValidationOptions = {
  maxLength: 50,
  handles: true,
};

import defaultVpaHandles from './vpa-handles.json';

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
      options.handles = (
        options.handles === true ? defaultVpaHandles : [...options.handles, ...defaultVpaHandles]
      ) as string[];
      const handle = value.split('@')[1];
      isValidFormat = options.handles.indexOf(handle) >= 0;
    }
    return isValidFormat;
  }
}
