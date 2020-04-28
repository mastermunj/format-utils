import { VpaValidationOptions } from './vpa';
export declare class Validator {
    static mobile(value: string): boolean;
    static pincode(value: string | number): boolean;
    static pan(value: string): boolean;
    static tan(value: string): boolean;
    static uan(value: string): boolean;
    static ifsc(value: string): boolean;
    static esic(value: string): boolean;
    static imei(value: string): boolean;
    static aadhaar(value: string): boolean;
    static aadhaarVID(value: string): boolean;
    static gst(value: string): boolean;
    static gstChecksum(value: string): boolean;
    static vehicleRegistration(value: string): boolean;
    static vpa(value: string, options?: VpaValidationOptions): boolean;
}
