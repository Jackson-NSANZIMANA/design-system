import React, { type HTMLAttributes } from 'react';
import type { LensDivProps } from '../../types';
declare const SelectWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Select: ({ container, onChange, menuZIndex, menuMaxWidth, menuMaxHeight, menuMinWidth, triggerOffset, ariaMenuName, selectedOptionValue, onOuterClick, options, placeholder, menuPosition, isDisabled, onOpenChange, trigger, hasError, errorMessage, search, allowsDeselect, ...props }: SelectProps & Omit<React.ComponentProps<typeof SelectWrapper>, keyof SelectProps> & Omit<LensDivProps, keyof SelectProps & React.ComponentProps<typeof SelectWrapper>>) => React.JSX.Element;
export type OptionsObject = {
    value: string;
    title: React.ReactNode;
    icon?: React.ReactNode | string;
    isDisabled?: boolean;
    hasDivider?: boolean;
    hidden?: HTMLAttributes<HTMLOptionElement>['hidden'];
};
export type GroupedOptionsObject = {
    group: string;
    items: OptionsObject[];
};
type SearchProps = {
    searchPlaceholder: string;
    searchType?: 'contains' | 'startsWith';
    /**
     * Optional callback for backend search. When provided, client-side filtering is disabled
     * and this callback is called whenever the search input changes.
     * Use this to fetch search results from your backend API.
     */
    onSearch?: (searchValue: string) => void;
};
type SelectProps = {
    /**
     * Callback when selection changes.
     * - When allowsDeselect is NOT set (default): selectedOption is always an OptionsObject
     * - When allowsDeselect=true: selectedOption can be null when user deselects
     *
     * Note: The type shows only OptionsObject for backwards compatibility, but at runtime
     * null is passed when allowsDeselect=true. If using allowsDeselect, check for null.
     */
    onChange?: (selectedOption: OptionsObject) => void;
    isDisabled?: boolean;
    placeholder?: React.ReactNode;
    selectedOptionValue?: string | null;
    menuZIndex?: number;
    menuMaxWidth?: string | number;
    menuMaxHeight?: string | number;
    menuMinWidth?: string | number;
    menuPosition?: 'left' | 'right' | 'topRight' | 'topLeft' | 'rightTop' | 'leftTop';
    triggerOffset?: number;
    ariaMenuName?: string;
    options?: OptionsObject[] | GroupedOptionsObject[];
    container?: HTMLElement | (() => HTMLElement | null);
    onOuterClick?: () => void;
    onOpenChange?: (isOpen: boolean) => void;
    trigger?: (triggerContent: any, buttonProps: any) => void;
    hasError?: boolean;
    errorMessage?: string;
    search?: SearchProps;
    /**
     * When true, clicking the selected item will deselect it and pass null to onChange.
     * When false/undefined, clicking the selected item does nothing.
     */
    allowsDeselect?: boolean;
};
export default Select;
//# sourceMappingURL=select.d.ts.map