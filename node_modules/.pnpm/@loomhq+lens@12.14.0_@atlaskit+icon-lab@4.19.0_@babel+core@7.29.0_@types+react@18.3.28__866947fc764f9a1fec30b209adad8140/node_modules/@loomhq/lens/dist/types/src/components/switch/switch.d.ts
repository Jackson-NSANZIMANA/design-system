import React from 'react';
import type { LensInputProps } from '../../types';
declare const SwitchInput: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & SwitchInputProps, React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
declare const Switch: ({ isActive, isDisabled, onChange, size, ariaLabelledby, ariaLabel, ariaDescribedby, ...props }: SwitchProps & Omit<React.ComponentProps<typeof SwitchInput>, "size"> & Omit<LensInputProps, keyof SwitchProps & Omit<React.ComponentProps<typeof SwitchInput>, "size">>) => React.JSX.Element;
type SwitchProps = {
    isActive?: boolean;
    isDisabled?: boolean;
    onChange?: React.ReactEventHandler;
    size?: 'medium' | 'large';
    ariaLabelledby?: string;
    ariaLabel?: string;
    ariaDescribedby?: string;
};
type SwitchInputProps = {
    switchSize?: 'medium' | 'large';
};
export default Switch;
//# sourceMappingURL=switch.d.ts.map