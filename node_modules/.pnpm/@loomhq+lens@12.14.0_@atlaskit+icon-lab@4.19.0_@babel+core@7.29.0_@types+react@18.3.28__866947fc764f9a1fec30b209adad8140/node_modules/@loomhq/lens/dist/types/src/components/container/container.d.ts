import React from 'react';
import type { LensDivProps, ResponsiveType } from '../../types';
declare const ContainerWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & ContainerWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Container: ({ children, backgroundColor, backgroundImage, contentColor, borderColor, radius, borderSide, borderWidth, shadow, padding, paddingX, paddingY, paddingLeft, paddingRight, paddingTop, paddingBottom, margin, marginX, marginY, marginLeft, marginRight, marginTop, marginBottom, width, height, minWidth, minHeight, maxWidth, maxHeight, htmlTag, position, overflow, zIndex, top, bottom, left, right, refHandler, ...props }: ContainerProps & React.ComponentProps<typeof ContainerWrapper> & Omit<LensDivProps, keyof ContainerProps & React.ComponentProps<typeof ContainerWrapper>>) => React.JSX.Element;
export declare const availableBorderSides: string[];
export declare const availableRadii: string[];
export declare const availableHtmlTags: string[];
interface SharedProps {
    backgroundColor?: string;
    backgroundImage?: string;
    contentColor?: string;
    borderColor?: string;
    radius?: 'medium' | 'large' | 'xlarge' | 'full' | 'none' | '50' | '100' | '150' | '175' | '200' | '250' | '300' | 'round';
    borderSide?: 'all' | 'left' | 'right' | 'top' | 'bottom';
    shadow?: 'small' | 'medium' | 'large';
    padding?: ResponsiveType<string | number> | null;
    paddingX?: ResponsiveType<string | number> | null;
    paddingY?: ResponsiveType<string | number> | null;
    paddingLeft?: ResponsiveType<string | number> | null;
    paddingRight?: ResponsiveType<string | number> | null;
    paddingTop?: ResponsiveType<string | number> | null;
    paddingBottom?: ResponsiveType<string | number> | null;
    margin?: ResponsiveType<string | number> | null;
    marginX?: ResponsiveType<string | number> | null;
    marginY?: ResponsiveType<string | number> | null;
    marginLeft?: ResponsiveType<string | number> | null;
    marginRight?: ResponsiveType<string | number> | null;
    marginTop?: ResponsiveType<string | number> | null;
    marginBottom?: ResponsiveType<string | number> | null;
    width?: ResponsiveType<string | number>;
    height?: ResponsiveType<string | number>;
    minWidth?: ResponsiveType<string | number>;
    minHeight?: ResponsiveType<string | number>;
    maxWidth?: ResponsiveType<string | number>;
    maxHeight?: ResponsiveType<string | number>;
    children?: React.ReactNode;
    position?: string;
    overflow?: string;
    top?: ResponsiveType<string | number> | null;
    bottom?: ResponsiveType<string | number> | null;
    left?: ResponsiveType<string | number> | null;
    right?: ResponsiveType<string | number> | null;
    zIndex?: number | string;
    borderWidth?: string | number;
    refHandler?: ((ref: HTMLElement) => void) | ((ref: HTMLDivElement) => void) | ((ref: HTMLSpanElement) => void);
}
interface ContainerProps extends SharedProps {
    htmlTag?: 'div' | 'header' | 'article' | 'section' | 'nav' | 'aside' | 'footer' | 'main' | 'span' | 'form' | 'table';
}
interface ContainerWrapperProps extends SharedProps {
    as?: string;
}
export default Container;
//# sourceMappingURL=container.d.ts.map