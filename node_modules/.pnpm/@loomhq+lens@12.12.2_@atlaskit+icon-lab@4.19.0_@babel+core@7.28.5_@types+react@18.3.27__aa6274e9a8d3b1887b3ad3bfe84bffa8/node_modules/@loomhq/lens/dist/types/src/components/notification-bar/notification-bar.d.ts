import React from 'react';
import type { SeverityLevels } from './types';
import type { LensAsideProps } from '../../types';
declare const NotificationBarWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & NotificationBarWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const NotificationBar: ({ children, onCloseClick, isOpen, severity, id, }: NotificationBarProps & React.ComponentProps<typeof NotificationBarWrapper> & Omit<LensAsideProps, keyof NotificationBarProps & React.ComponentProps<typeof NotificationBarWrapper>>) => React.JSX.Element;
type NotificationBarProps = {
    children?: React.ReactNode;
    isOpen?: boolean;
    onCloseClick?: () => void;
    severity: SeverityLevels;
};
type NotificationBarWrapperProps = {
    children?: React.ReactNode;
    isOpen?: boolean;
    severity: SeverityLevels;
};
export default NotificationBar;
//# sourceMappingURL=notification-bar.d.ts.map