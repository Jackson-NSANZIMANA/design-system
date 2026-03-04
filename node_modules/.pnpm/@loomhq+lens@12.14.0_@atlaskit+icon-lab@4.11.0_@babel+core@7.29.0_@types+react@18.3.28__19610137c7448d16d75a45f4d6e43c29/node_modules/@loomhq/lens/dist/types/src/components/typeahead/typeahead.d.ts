import React, { type HTMLAttributes } from 'react';
import type { LensDivProps } from '../../types';
declare const Typeahead: React.ForwardRefExoticComponent<Omit<TypeaheadProps & Omit<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, keyof TypeaheadProps> & Omit<LensDivProps, keyof TypeaheadProps & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>, "ref"> & React.RefAttributes<HTMLInputElement>>;
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
    headingTag?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
};
type TypeaheadProps = {
    menuZIndex?: number;
    menuMaxHeight?: string | number;
    menuPosition?: 'left' | 'right' | 'topRight' | 'topLeft';
    options: OptionsObject[] | GroupedOptionsObject[];
    selectedOptionValue: string | null;
    placeholder?: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    loadingMessage?: React.ReactNode;
    emptyResultsMessage?: React.ReactNode;
    errorMessage?: string;
    container?: HTMLElement;
    ariaMenuName?: string;
    menuMaxWidth?: string | number;
    menuMinWidth?: string | number;
    onInputValueChange?: (inputValue: string) => void;
    onOptionChange?: (selectedOption: OptionsObject | null) => void;
    onOpenChange?: (isOpen: boolean) => void;
    onOuterClick?: () => void;
};
export default Typeahead;
//# sourceMappingURL=typeahead.d.ts.map