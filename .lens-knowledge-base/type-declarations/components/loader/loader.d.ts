import React from 'react';
import type { LensSpanProps } from '../../types';
declare const LoaderWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & LoaderWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const Loader: ({ color, size, ...props }: LoaderProps & React.ComponentProps<typeof LoaderWrapper> & Omit<LensSpanProps, keyof LoaderProps & React.ComponentProps<typeof LoaderWrapper>>) => React.JSX.Element;
export declare const availableSizes: string[];
type LoaderProps = {
    color?: string;
    size?: 'small' | 'medium' | 'large';
};
type LoaderWrapperProps = {
    size?: string;
};
export default Loader;
//# sourceMappingURL=loader.d.ts.map