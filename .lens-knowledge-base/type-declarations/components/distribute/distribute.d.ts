import React from 'react';
import type { LensDivProps, ResponsiveType } from '../../types';
declare const DistributeWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & DistributeWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Distribute: ({ children, gap, direction, alignment, isSpread, htmlTag, ...props }: DistributeProps & React.ComponentProps<typeof DistributeWrapper> & Omit<LensDivProps, keyof DistributeProps & React.ComponentProps<typeof DistributeWrapper>>) => React.JSX.Element;
export declare const availableDirections: string[];
export declare const availableAlignments: string[];
export declare const availableHtmlTags: string[];
type Alignment = 'start' | 'center' | 'end' | 'stretch';
type DistributeProps = {
    children: React.ReactNode;
    direction?: ResponsiveType<'row' | 'column'>;
    alignment?: Alignment | Alignment[];
    isSpread?: ResponsiveType<true | false>;
    htmlTag?: 'div' | 'header' | 'article' | 'section' | 'nav' | 'aside' | 'footer' | 'main';
    gap?: string | number;
};
type DistributeWrapperProps = {
    flexDirection?: ResponsiveType<'row' | 'column'>;
    flexAlign?: Alignment | Alignment[];
    isSpread?: boolean | boolean[];
    gap?: string | number;
    as?: string;
};
export default Distribute;
//# sourceMappingURL=distribute.d.ts.map