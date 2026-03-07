import React from 'react';
import type { LensSpanProps } from '../../types';
type WaveformLoaderWrapperProps = {
    size?: 'medium';
    color?: string;
};
declare const WaveformLoaderWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & WaveformLoaderWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const WaveformLoader: ({ size, speed, color, ...props }: WaveformLoaderProps & React.ComponentProps<typeof WaveformLoaderWrapper> & Omit<LensSpanProps, keyof WaveformLoaderProps & React.ComponentProps<typeof WaveformLoaderWrapper>>) => React.JSX.Element;
export declare const availableSizes: string[];
export declare const availableSpeeds: string[];
type WaveformLoaderProps = {
    color?: string;
    size?: 'medium';
    speed?: 'fast' | 'slow';
};
export default WaveformLoader;
//# sourceMappingURL=waveform-loader.d.ts.map