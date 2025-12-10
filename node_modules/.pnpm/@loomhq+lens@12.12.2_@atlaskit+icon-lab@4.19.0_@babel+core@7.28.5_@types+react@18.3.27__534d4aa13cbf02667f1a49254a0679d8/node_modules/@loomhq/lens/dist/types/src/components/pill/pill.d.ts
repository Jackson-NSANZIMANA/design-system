import React from 'react';
import type { LensDivProps } from '../../types';
declare const PillWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & PillWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Pill: ({ color, backgroundColor, children, icon, iconPosition, ...props }: PillProps & React.ComponentProps<typeof PillWrapper> & Omit<LensDivProps, keyof PillProps & React.ComponentProps<typeof PillWrapper>>) => React.JSX.Element;
type PillProps = {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    color?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
};
type PillWrapperProps = {
    color?: string;
    backgroundColor?: string;
};
export default Pill;
//# sourceMappingURL=pill.d.ts.map