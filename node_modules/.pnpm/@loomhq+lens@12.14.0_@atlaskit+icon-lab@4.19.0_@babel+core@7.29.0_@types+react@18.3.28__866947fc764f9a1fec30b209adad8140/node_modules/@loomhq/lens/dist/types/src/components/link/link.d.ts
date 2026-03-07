import React from 'react';
import type { LensAnchorProps } from '../../types';
declare const LinkWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & LinkWrapperProps, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
declare const Link: ({ children, href, variant, htmlTag, isDisabled, noWrap, ...props }: LinkProps & React.ComponentProps<typeof LinkWrapper> & Omit<LensAnchorProps, keyof LinkProps & React.ComponentProps<typeof LinkWrapper>>) => React.JSX.Element;
export declare const availableVariants: string[];
type LinkProps = {
    children?: React.ReactNode;
    href?: string;
    variant?: 'neutral' | 'primary' | 'subtle';
    htmlTag?: 'button' | 'a';
    isDisabled?: boolean;
    noWrap?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    target?: string;
};
type LinkWrapperProps = {
    children?: React.ReactNode;
    href?: string;
    disabled?: boolean;
    noWrap?: boolean;
    variant?: 'neutral' | 'primary' | 'subtle';
    as?: string;
    target?: string;
};
export default Link;
//# sourceMappingURL=link.d.ts.map