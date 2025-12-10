import { type Breakpoint, type Space } from '../variables';
export declare const u: (amount: number) => string;
/**
 * @example
 * Sample values: "large", 42, "80px"
 */
export type Size = Space | number | string;
export declare const getSizeValue: (size: Size) => string;
export type SizeProp = Size | Size[] | Partial<Record<Breakpoint | 'default', Size>>;
export declare const getSize: (property: string, size: SizeProp) => string;
//# sourceMappingURL=size.d.ts.map