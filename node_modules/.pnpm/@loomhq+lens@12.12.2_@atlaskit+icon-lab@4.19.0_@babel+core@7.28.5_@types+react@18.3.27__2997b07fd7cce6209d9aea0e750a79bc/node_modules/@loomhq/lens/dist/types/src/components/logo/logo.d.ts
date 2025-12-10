import React from 'react';
import type { LensSpanProps } from '../../types';
declare const LogoWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & LogoWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const Logo: ({ variant, maxWidth, symbolColor, wordmarkColor, brand, customId, ...props }: LogoProps & React.ComponentProps<typeof LogoWrapper> & Omit<LensSpanProps, keyof LogoProps & React.ComponentProps<typeof LogoWrapper>>) => React.JSX.Element;
export declare const availableVariants: string[];
type LogoProps = {
    variant?: 'combined' | 'symbol' | 'wordmark';
    brand?: 'loom' | 'ai' | 'apptile' | 'product' | 'marketing' | 'attributed';
    maxWidth?: number | string;
    symbolColor?: string;
    wordmarkColor?: string;
    customId?: string;
};
type LogoWrapperProps = {
    variant?: 'combined' | 'symbol' | 'wordmark';
    brand?: 'loom' | 'ai' | 'apptile' | 'product' | 'marketing' | 'attributed';
    maxWidth?: number | string;
};
export default Logo;
//# sourceMappingURL=logo.d.ts.map