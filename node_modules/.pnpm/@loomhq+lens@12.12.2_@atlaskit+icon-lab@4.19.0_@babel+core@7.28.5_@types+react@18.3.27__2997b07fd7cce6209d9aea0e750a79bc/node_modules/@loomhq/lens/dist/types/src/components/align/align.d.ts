import React from 'react';
import type { LensDivProps, ResponsiveType } from '../../types';
declare const AlignWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & AlignWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Align: ({ children, alignment, htmlTag, ...props }: AlignProps & React.ComponentProps<typeof AlignWrapper> & Omit<LensDivProps, keyof AlignProps & React.ComponentProps<typeof AlignWrapper>>) => React.JSX.Element;
export declare const availableAlignments: string[];
export declare const availableHtmlTags: string[];
type AlignProps = {
    children: React.ReactNode;
    alignment?: ResponsiveType<'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'center' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'>;
    htmlTag?: 'div' | 'header' | 'article' | 'section' | 'nav' | 'aside' | 'footer' | 'main';
};
type AlignWrapperProps = {
    children: React.ReactNode;
    alignment?: ResponsiveType<'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'center' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'>;
    as?: string;
};
export default Align;
//# sourceMappingURL=align.d.ts.map