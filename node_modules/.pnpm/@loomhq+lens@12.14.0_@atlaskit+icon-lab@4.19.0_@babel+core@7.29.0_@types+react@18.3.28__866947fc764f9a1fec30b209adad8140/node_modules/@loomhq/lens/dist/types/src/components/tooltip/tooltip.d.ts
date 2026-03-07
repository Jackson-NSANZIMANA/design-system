import React from 'react';
import { type Size } from '../../utilities';
type DelaySpeed = 'immediate' | 'long';
declare const TooltipBoxWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & TooltipBoxProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const ShortcutWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ShortcutBox: ({ children, }: React.ComponentProps<typeof ShortcutWrapper>) => React.JSX.Element;
export declare const TooltipBox: ({ children, maxWidth, onMouseEnter, onMouseLeave, layerProps, zIndex, ...rest }: TooltipBoxProps & React.ComponentProps<typeof TooltipBoxWrapper>) => React.JSX.Element;
declare const Tooltip: ({ ariaLive, children, content, shortcut, placement, keepOpen, triggerOffset, maxWidth, isInline, isDisabled, container, tabIndex, zIndex, verticalAlign, delay, tooltipId, ...rest }: TooltipProps) => React.JSX.Element;
export declare const availablePlacements: string[];
type TooltipBoxProps = {
    children?: React.ReactNode;
    maxWidth?: Size | [];
    onMouseEnter?: React.ReactEventHandler;
    onMouseLeave?: React.ReactEventHandler;
    layerProps?: any;
    zIndex?: number;
};
export type TooltipProps = {
    ariaLive?: boolean;
    children?: React.ReactNode;
    container?: HTMLElement | (() => HTMLElement) | string;
    content?: React.ReactNode;
    shortcut?: string[];
    isDisabled?: boolean;
    isInline?: boolean;
    keepOpen?: boolean;
    maxWidth?: Size | [];
    placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'leftTop' | 'leftCenter' | 'leftBottom' | 'rightTop' | 'rightCenter' | 'rightBottom';
    triggerOffset?: number;
    verticalAlign?: string;
    zIndex?: number;
    delay?: DelaySpeed;
    tabIndex?: number;
    tooltipId?: string;
};
export default Tooltip;
//# sourceMappingURL=tooltip.d.ts.map