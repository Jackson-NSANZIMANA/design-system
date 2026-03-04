import React from 'react';
import type { LensDivProps } from '../../types';
declare const ColorPickerContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const ColorPicker: ({ defaultColor, confirmButton, swatches, onChange, ...props }: ColorPickerProps & Omit<React.ComponentProps<typeof ColorPickerContainer>, keyof ColorPickerProps> & Omit<LensDivProps, keyof ColorPickerProps & Omit<React.ComponentProps<typeof ColorPickerContainer>, keyof ColorPickerProps>>) => React.JSX.Element;
type ColorPickerProps = {
    defaultColor?: string;
    confirmButton?: React.ReactNode;
    swatches?: string[];
    onChange?: (selectedColor: string) => void;
};
export default ColorPicker;
//# sourceMappingURL=color-picker.d.ts.map