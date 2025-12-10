import React, { type ReactNode } from 'react';
import type { LensDivProps } from '../../types';
declare const FormFieldWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & FormFieldProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const FormField: ({ label, children, errorMessage, labelFor, direction, ...props }: FormFieldProps & React.ComponentProps<typeof FormFieldWrapper> & Omit<LensDivProps, keyof FormFieldProps & React.ComponentProps<typeof FormFieldWrapper>>) => React.JSX.Element;
type FormFieldProps = {
    label?: ReactNode;
    errorMessage?: string | null;
    labelFor?: string;
    children?: React.ReactNode;
    direction?: 'row' | 'column' | 'row-reverse';
    isLabelClickable?: boolean;
};
export default FormField;
//# sourceMappingURL=form-field.d.ts.map