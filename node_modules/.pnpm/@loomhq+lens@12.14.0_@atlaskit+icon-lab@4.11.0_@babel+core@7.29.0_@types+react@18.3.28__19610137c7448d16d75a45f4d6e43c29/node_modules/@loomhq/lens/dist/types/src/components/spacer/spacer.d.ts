import React from 'react';
import type { LensDivProps, ResponsiveType } from '../../types';
declare const SpacerWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & SpacerProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Spacer: ({ children, all, y, x, top, right, bottom, left, isInline, ...props }: SpacerProps & React.ComponentProps<typeof SpacerWrapper> & Omit<LensDivProps, keyof SpacerProps & React.ComponentProps<typeof SpacerWrapper>>) => React.JSX.Element;
type SpacerProps = {
    all?: ResponsiveType<string | number>;
    y?: ResponsiveType<string | number>;
    x?: ResponsiveType<string | number>;
    left?: ResponsiveType<string | number>;
    right?: ResponsiveType<string | number>;
    top?: ResponsiveType<string | number>;
    bottom?: ResponsiveType<string | number>;
    isInline?: boolean;
    children?: React.ReactNode;
};
export default Spacer;
//# sourceMappingURL=spacer.d.ts.map