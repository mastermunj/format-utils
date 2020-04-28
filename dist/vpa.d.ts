export declare type VpaValidationOptions = {
    maxLength?: number;
    handles?: boolean | string[];
};
export declare class VPA {
    static defaultVpaHandles: string[] | undefined;
    static validate(value: string, options?: VpaValidationOptions): boolean;
    static getDefaultVpaHandles(): string[];
}
