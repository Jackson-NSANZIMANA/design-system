import React from 'react';
import type { LensSpanProps } from '../../types';
declare const EllipsesLoaderWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & EllipsesLoaderWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const EllipsesLoader: ({ color, size, ...props }: EllipsesLoaderProps & React.ComponentProps<typeof EllipsesLoaderWrapper> & Omit<LensSpanProps, keyof EllipsesLoaderProps & React.ComponentProps<typeof EllipsesLoaderWrapper>>) => React.JSX.Element;
export declare const availableSizes: string[];
type EllipsesLoaderProps = {
    color?: string;
    size?: 'small' | 'medium' | 'large';
};
type EllipsesLoaderWrapperProps = {
    size: 'small' | 'medium' | 'large';
};
export default EllipsesLoader;
//# sourceMappingURL=ellipses-loader.d.ts.map