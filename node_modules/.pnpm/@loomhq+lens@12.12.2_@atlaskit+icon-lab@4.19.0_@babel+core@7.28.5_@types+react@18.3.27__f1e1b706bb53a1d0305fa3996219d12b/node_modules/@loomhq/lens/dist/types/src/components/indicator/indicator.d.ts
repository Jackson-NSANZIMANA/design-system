import React from 'react';
import type { LensSpanProps } from '../../types';
declare const IndicatorContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const Indicator: ({ withPulse, color, children, ...props }: IndicatorProps & React.ComponentProps<typeof IndicatorContainer> & Omit<LensSpanProps, keyof IndicatorProps & React.ComponentProps<typeof IndicatorContainer>>) => React.JSX.Element;
type IndicatorProps = {
    withPulse?: boolean;
    color?: 'blue' | 'orange';
    children: React.ReactNode;
};
export default Indicator;
//# sourceMappingURL=indicator.d.ts.map