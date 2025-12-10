import React from 'react';
import type { ResponsiveType } from '../../types';
declare const SplitWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & SplitWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const SplitSectionWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & SplitSectionWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const SplitSection: ({ children, grow, shrink, basis, width, height, minWidth, minHeight, maxWidth, maxHeight, htmlTag, className, style, ...props }: SplitSectionProps & React.ComponentProps<typeof SplitSectionWrapper>) => React.JSX.Element;
declare const Split: ({ children, gap, rowGap, columnGap, alignItems, justifyContent, alignContent, wrap, width, height, minWidth, minHeight, maxWidth, maxHeight, htmlTag, className, style, ...props }: SplitProps & React.ComponentProps<typeof SplitWrapper>) => React.JSX.Element;
interface SharedProps {
    width?: ResponsiveType<number | string>;
    height?: ResponsiveType<number | string>;
    minWidth?: ResponsiveType<number | string>;
    minHeight?: ResponsiveType<number | string>;
    maxWidth?: ResponsiveType<number | string>;
    maxHeight?: ResponsiveType<number | string>;
    children?: React.ReactNode;
}
interface SplitProps extends SharedProps {
    alignItems?: ResponsiveType<'start' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'>;
    justifyContent?: ResponsiveType<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'start' | 'end' | 'baseline';
    wrap?: ResponsiveType<'nowrap' | 'wrap' | 'wrap-reverse'>;
    htmlTag?: 'div' | 'ul' | 'ol' | 'li';
    gap?: ResponsiveType<number | string>;
    rowGap?: ResponsiveType<number | string>;
    columnGap?: ResponsiveType<number | string>;
    direction?: ResponsiveType<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
    className?: never;
    style?: never;
}
interface SplitWrapperProps extends SplitProps {
    as?: string;
}
interface SplitSectionProps extends SharedProps {
    grow?: ResponsiveType<number | string>;
    shrink?: ResponsiveType<number | string>;
    basis?: ResponsiveType<number | string>;
    className?: never;
    style?: never;
    htmlTag?: 'div' | 'li';
}
interface SplitSectionWrapperProps extends SplitSectionProps {
    as?: string;
}
export default Split;
//# sourceMappingURL=split.d.ts.map