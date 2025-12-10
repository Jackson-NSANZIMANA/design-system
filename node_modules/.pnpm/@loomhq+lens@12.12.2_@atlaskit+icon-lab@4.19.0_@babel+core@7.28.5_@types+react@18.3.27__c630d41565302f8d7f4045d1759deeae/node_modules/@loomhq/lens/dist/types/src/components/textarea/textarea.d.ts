import React from 'react';
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
type TextareaProps = {
    rows?: number;
    value?: string;
    placeholder?: string;
    isDisabled?: boolean;
    onChange?: React.ReactEventHandler;
    size?: 'small' | 'medium';
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    error?: string;
};
export default Textarea;
//# sourceMappingURL=textarea.d.ts.map