import type { ResponsiveGridSections, ResponsiveType } from '../types';
import { type Breakpoint } from '../variables';
import { type Size } from './size';
export declare const getMediaCss: (widthType: string, breakpoint: string, declaration: string) => string;
export declare const arrayToBreakpoints: (values: string[]) => string;
export type BreakpointProperties = Breakpoint | 'default';
export type BreakpointObject = Partial<Record<BreakpointProperties, string>>;
export declare const objectToBreakpoints: (property: string, obj: BreakpointObject) => string;
export declare const getResponsiveOneOf: (property: string, valueArray: ResponsiveType<string>) => string;
export declare const getAlignmentStyles: (prop: string | string[], alignments: Record<string, string>) => string;
export declare const getResponsiveBoolean: (property: string, valueArray: string[], booleanValue: boolean | boolean[]) => string;
export declare const getResponsiveNumber: (property: string, number: ResponsiveType<number | string>) => string;
type SizeParam = Size | Size[];
export declare const getResponsiveColumns: (columns: Record<Breakpoint, SizeParam>) => string;
export declare const getResponsiveGridSections: (gridSections: ResponsiveGridSections, sectionType: string) => string;
export declare const Media: ({ children, queries, values, defaultValue }: {
    children: any;
    queries: any;
    values: any;
    defaultValue: any;
}) => any;
export {};
//# sourceMappingURL=responsive.d.ts.map