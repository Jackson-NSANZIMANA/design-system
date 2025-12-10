import React from 'react';
import type { LensSpanProps } from '../../types';
import { type SizeProp } from '../../utilities';
declare const IconWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IconProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
type IconProps = {
    size?: SizeProp;
    altText?: string;
    icon?: React.ReactNode;
    color?: string;
};
declare const Icon: ({ altText, icon, color, size, ...props }: IconProps & React.ComponentProps<typeof IconWrapper> & Omit<LensSpanProps, keyof IconProps & React.ComponentProps<typeof IconWrapper>>) => React.JSX.Element;
export default Icon;
//# sourceMappingURL=icon.d.ts.map