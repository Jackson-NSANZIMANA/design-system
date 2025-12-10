import React from 'react';
import type { LensButtonProps } from '../../types';
import { type TooltipProps } from '../tooltip/tooltip';
declare const TabWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & TabWrapperProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
/** @deprecated Use tabs prop instead */
export declare const Tab: ({ children, isActive, htmlTag, icon, isDisabled, ...props }: TabProps & React.ComponentProps<typeof TabWrapper> & Omit<LensButtonProps, keyof TabProps & React.ComponentProps<typeof TabWrapper>>) => React.JSX.Element;
export declare const TabNew: React.ForwardRefExoticComponent<Omit<TabItem & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & TabWrapperProps & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & Omit<LensButtonProps, keyof TabItem & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & TabWrapperProps & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const TabsNew: ({ tabs, scrollOffset, hasFullTabs, isPilledDesign, hasBottomBorder, ...props }: TabsProps) => React.JSX.Element;
declare const Tabs: ({ children, tabs, ...props }: TabsProps) => React.JSX.Element;
type TabsProps = {
    scrollOffset?: number | string;
    hasFullTabs?: boolean;
    /** @deprecated Use tabs[] prop instead */
    children?: React.ReactNode;
    tabs?: TabItem[];
    isPilledDesign?: boolean;
    hasBottomBorder?: boolean;
};
type TooltipPropsForTabItem = Omit<TooltipProps, 'children' | 'tooltipId' | 'tabIndex'>;
type TabItem = {
    tabContent: React.ReactNode;
    tooltipProps?: TooltipPropsForTabItem;
    icon?: React.ReactNode;
    htmlTag?: 'a' | 'button' | 'span';
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
};
/** @deprecated Don't use this component directly, instead pass in tabs[] prop to <Tabs> */
type TabProps = {
    isActive?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    htmlTag?: 'a' | 'button' | 'span';
    isPilledDesign?: boolean;
    isDisabled?: boolean;
};
type TabWrapperProps = {
    isActive?: boolean;
    icon?: React.ReactNode;
    as?: string;
    isDisabled?: boolean;
};
export default Tabs;
//# sourceMappingURL=tabs.d.ts.map