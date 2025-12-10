import React from 'react';
import type { LensDivProps, ResponsiveGridSections, ResponsiveType } from '../../types';
declare const ArrangeWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & ArrangeWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Arrange: ({ children, width, height, minWidth, minHeight, maxWidth, maxHeight, gap, columns, rows, alignItems, justifyContent, justifyItems, alignContent, autoFlow, htmlTag, className, style, ...props }: ArrangeProps & React.ComponentProps<typeof ArrangeWrapper> & Omit<LensDivProps, keyof ArrangeProps & React.ComponentProps<typeof ArrangeWrapper>>) => React.JSX.Element;
interface SharedProps {
    children?: React.ReactNode;
    width?: ResponsiveType<string | number>;
    height?: ResponsiveType<string | number>;
    minWidth?: ResponsiveType<string | number>;
    minHeight?: ResponsiveType<string | number>;
    maxWidth?: ResponsiveType<string | number>;
    maxHeight?: ResponsiveType<string | number>;
    gap?: ResponsiveType<string | number> | null;
    alignItems?: ResponsiveType<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
    justifyItems?: ResponsiveType<'start' | 'end' | 'center' | 'stretch'>;
    alignContent?: ResponsiveType<'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'>;
    justifyContent?: ResponsiveType<'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'>;
    autoFlow?: ResponsiveType<'column' | 'row'>;
    columns?: ResponsiveGridSections;
    rows?: ResponsiveGridSections;
}
interface ArrangeProps extends SharedProps {
    htmlTag?: 'div' | 'ul' | 'ol' | 'li';
}
interface ArrangeWrapperProps extends SharedProps {
    as?: string;
}
export default Arrange;
//# sourceMappingURL=arrange.d.ts.map