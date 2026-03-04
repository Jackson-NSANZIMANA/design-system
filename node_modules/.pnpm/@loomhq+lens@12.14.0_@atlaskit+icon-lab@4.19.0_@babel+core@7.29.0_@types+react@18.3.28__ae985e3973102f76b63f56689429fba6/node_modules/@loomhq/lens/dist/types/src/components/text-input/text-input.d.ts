import React from 'react';
declare const TextInput: React.ForwardRefExoticComponent<Omit<TextInputProps & Omit<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & InputFieldProps & Pick<TextInputProps, "type"> & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>, "size">, "ref"> & React.RefAttributes<HTMLInputElement>>;
type TextInputProps = {
    placeholder?: string;
    value?: string | number;
    onFocus?: React.ReactEventHandler;
    onChange?: React.ReactEventHandler;
    onBlur?: React.ReactEventHandler;
    onKeyDown?: React.ReactEventHandler;
    isDisabled?: boolean;
    icon?: React.ReactNode | string;
    type?: 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
    id?: string;
    hasError?: boolean;
    size?: 'small' | 'medium' | 'large';
    addOn?: React.ReactNode;
};
type InputFieldProps = {
    icon?: React.ReactNode;
    hasError?: boolean;
    inputSize?: 'small' | 'medium' | 'large';
    addOn?: React.ReactNode;
};
export default TextInput;
//# sourceMappingURL=text-input.d.ts.map