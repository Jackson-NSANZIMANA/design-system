import React from 'react';
import type { LensSpanProps } from '../../types';
export type AvatarColor = 'orange' | 'blue' | 'yellow' | 'teal';
declare const AvatarWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & AvatarWrapperProps & {
    backgroundColor?: string;
    color?: string;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const Avatar: ({ altText, size, letter, imageSrc, children, themeColor, ...props }: AvatarProps & React.ComponentProps<typeof AvatarWrapper> & Omit<LensSpanProps, keyof AvatarProps & React.ComponentProps<typeof AvatarWrapper>>) => React.JSX.Element;
type AvatarProps = {
    altText?: string;
    letter?: string;
    imageSrc?: string;
    size?: string | number;
    children?: React.ReactNode;
    height?: number;
    width?: number;
    hasBackgroundColor?: boolean;
    backgroundColor?: string;
    themeColor?: AvatarColor;
};
type AvatarWrapperProps = {
    size?: string | number;
    hasBackgroundColor?: boolean;
    themeColor?: AvatarColor;
};
export default Avatar;
//# sourceMappingURL=avatar.d.ts.map