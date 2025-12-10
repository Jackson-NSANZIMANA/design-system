import React from 'react';
import type { LensButtonProps } from '../../types';
declare const TextButtonWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & TextButtonWrapperProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
type AllProps = TextButtonProps & React.ComponentProps<typeof TextButtonWrapper> & Omit<LensButtonProps, keyof TextButtonProps & React.ComponentProps<typeof TextButtonWrapper>>;
declare const TextButton: React.ForwardRefExoticComponent<Omit<AllProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
type TextButtonProps = {
    onClick?: React.ReactEventHandler;
    isDisabled?: boolean;
    isActive?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    htmlTag?: 'button' | 'a';
    offsetSide?: 'left' | 'right';
    href?: string;
    target?: string;
    type?: string;
};
type TextButtonWrapperProps = {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    as?: 'button' | 'a';
    offsetSide?: 'left' | 'right';
    isActive?: boolean;
};
export default TextButton;
//# sourceMappingURL=text-button.d.ts.map