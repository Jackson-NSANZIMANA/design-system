import React from 'react';
declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxProps & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
type CheckboxProps = {
    isChecked?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    onFocus?: React.ReactEventHandler;
    onChange?: React.ReactEventHandler;
    onBlur?: React.ReactEventHandler;
};
export default Checkbox;
//# sourceMappingURL=checkbox.d.ts.map