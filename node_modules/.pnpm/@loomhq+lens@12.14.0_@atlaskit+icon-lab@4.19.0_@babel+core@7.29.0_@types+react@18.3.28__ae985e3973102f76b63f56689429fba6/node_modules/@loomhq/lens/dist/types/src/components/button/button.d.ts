import React from 'react';
import type { LensButtonProps } from '../../types';
declare const ButtonWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & ButtonWrapperProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const Button: ({ size, children, variant, hasFullWidth, width, icon, iconPosition, iconBefore, iconAfter, logoSrc, hasLoader, isDisabled, ariaDisabled, htmlTag, interactionName, onClick, refHandler, ...props }: ButtonProps & React.ComponentProps<typeof ButtonWrapper> & Omit<LensButtonProps, keyof ButtonProps & React.ComponentProps<typeof ButtonWrapper>>) => React.JSX.Element;
type Variant = 'neutral' | 'neutralSecondary' | 'primary' | 'secondary' | 'record' | 'upgrade' | 'danger' | 'ai';
type Width = 'auto' | 'full' | 'maxContent';
interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    variant?: Variant;
    children?: React.ReactNode;
    isDisabled?: boolean;
    ariaDisabled?: boolean;
    /** @deprecated Use width={'full'} instead */
    hasFullWidth?: boolean;
    width?: Width;
    /** @deprecated Use iconBefore or iconAfter instead */
    icon?: React.ReactNode;
    /** @deprecated Use iconBefore or iconAfter instead */
    iconPosition?: 'left' | 'right';
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    logoSrc?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    hasLoader?: boolean;
    isFloating?: boolean;
    htmlTag?: 'button' | 'a';
    href?: string;
    download?: string;
    target?: string;
    type?: string;
    refHandler?: (ref: HTMLButtonElement) => void;
    /** Used to enable press tracing. See more at https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/press-interactions/#implementation */
    interactionName?: string;
    /** @deprecated Usage of className results in non-standard components */
    className?: string;
    /** @deprecated Usage of style results in non-standard components */
    style?: any;
}
interface ButtonWrapperProps {
    hasNoPaddingRight?: boolean;
    hasNoPaddingLeft?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: Variant;
    hasFullWidth?: boolean;
    width?: Width;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    logoSrc?: string;
    as?: string;
    disabled?: boolean;
    ariaDisabled?: boolean;
    buttonPadding?: number | string;
    hasChildren?: React.ReactNode;
    isFloating?: boolean;
}
export declare const availableSizes: string[];
export declare const availableVariants: string[];
export declare const availableHtmlTags: string[];
export declare const availableIconPositions: string[];
export default Button;
//# sourceMappingURL=button.d.ts.map