import React from 'react';
declare const Dropdown: ({ ariaMenuName, menuPosition, menuZIndex, options, trigger, triggerCallback, isOpen: isOpenFromProps, menuMinWidth, menuMaxWidth, menuMaxHeight, container, onOuterClick, triggerOffset, onOpenChange, search, role, menuItemRole, ...props }: DropdownProps) => React.JSX.Element;
type OptionsObject = {
    key?: string;
    title?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: React.ReactEventHandler;
    disabled?: boolean;
    selected?: boolean;
    hasDivider?: boolean;
};
type SearchProps = {
    searchPlaceholder: string;
    searchType?: 'contains' | 'startsWith';
};
type TriggerProps = {
    /** @deprecated Use triggerCallback and possibly with ariaMenuName for better accessibility support */
    trigger: React.ReactNode;
    triggerCallback?: never;
} | {
    trigger?: never;
    triggerCallback: (buttonProps: any) => React.ReactNode;
};
type DropdownProps = TriggerProps & {
    ariaMenuName?: string;
    menuPosition?: 'left' | 'right' | 'topRight' | 'topLeft' | 'leftSide' | 'rightSide';
    options?: OptionsObject[];
    isOpen?: boolean;
    menuZIndex?: number;
    menuMinWidth?: number | string;
    menuMaxWidth?: number | string;
    menuMaxHeight?: number | string;
    container?: HTMLElement | (() => HTMLElement) | string;
    onOuterClick?: () => void;
    triggerOffset?: number;
    onOpenChange?: (isOpen: boolean) => void;
    search?: SearchProps;
    role?: React.AriaRole;
    menuItemRole?: React.AriaRole;
};
export default Dropdown;
//# sourceMappingURL=dropdown.d.ts.map