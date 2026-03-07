import React from 'react';
import type { LensDivProps } from '../../types';
declare const ToastWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & ToastWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Toast: ({ children, isOpen, onCloseClick, zIndex, duration, platform, }: ToastProps & React.ComponentProps<typeof ToastWrapper> & Omit<LensDivProps, keyof ToastProps & React.ComponentProps<typeof ToastWrapper>>) => React.JSX.Element;
type ToastProps = {
    children?: React.ReactNode;
    isOpen?: boolean;
    onCloseClick?: () => void;
    zIndex?: number;
    duration?: 'short' | 'medium' | 'long';
    platform?: 'web-app' | 'chrome-extension';
};
type ToastWrapperProps = {
    zIndex?: number;
    isOpen?: boolean;
    toastDuration?: number;
    platform?: 'web-app' | 'chrome-extension';
};
export default Toast;
//# sourceMappingURL=toast.d.ts.map