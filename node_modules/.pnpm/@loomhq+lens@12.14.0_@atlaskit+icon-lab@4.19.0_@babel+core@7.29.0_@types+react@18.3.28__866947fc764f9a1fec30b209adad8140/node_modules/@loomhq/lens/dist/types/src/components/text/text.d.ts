import React from 'react';
import type { LensSpanProps } from '../../types';
import { type TextSize } from '../../variables';
export declare const dimAmount = 0.6;
export declare enum FontFamily {
    'sans-serif' = "inherit",// We set this to inherit as the default as Atlassian Sans wil fall into place
    'mono' = "Atlassian Mono"
}
type VariantsProps = {
    [key: string]: {
        size: TextProps['size'];
        fontWeight: TextProps['fontWeight'];
    };
};
export declare const variants: VariantsProps;
export declare const lineHeightToPx: (size: any) => number;
declare const TextWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & TextWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const Text: ({ children, size, color, isInline, isDimmed, fontFamily, fontWeight, hasEllipsis, ellipsisLines, noWrap, variant, htmlTag, alignment, sizeMinMax, fontSetting, overflowWrap, ...props }: TextProps & React.ComponentProps<typeof TextWrapper> & Omit<LensSpanProps, keyof TextProps & React.ComponentProps<typeof TextWrapper>>) => React.JSX.Element;
export declare const availableSizes: string[];
export declare const deprecatedSizes: string[];
export declare const availableFontWeights: string[];
export declare const availableHtmlTags: string[];
export declare const alignments: string[];
interface TextProps {
    size?: TextSize;
    fontWeight?: 'book' | 'regular' | 'medium' | 'bold';
    fontFamily?: 'sans-serif' | 'mono';
    variant?: 'body' | 'title' | 'mainTitle';
    alignment?: 'left' | 'right' | 'center';
    color?: string;
    isInline?: boolean;
    isDimmed?: boolean;
    hasEllipsis?: boolean;
    noWrap?: boolean;
    ellipsisLines?: number;
    htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
    children?: React.ReactNode;
    sizeMinMax?: string[];
    fontSetting?: 'tnum' | 'normal';
    overflowWrap?: 'normal' | 'break-word' | 'anywhere';
    /** @deprecated Usage of dclassName results in non-standard components */
    className?: string;
}
interface TextWrapperProps extends TextProps {
    as?: string;
}
export default Text;
//# sourceMappingURL=text.d.ts.map