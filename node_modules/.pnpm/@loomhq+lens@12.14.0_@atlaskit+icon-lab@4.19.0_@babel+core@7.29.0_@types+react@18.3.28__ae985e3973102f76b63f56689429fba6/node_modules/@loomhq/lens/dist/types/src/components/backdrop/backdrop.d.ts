import React from 'react';
import type { LensDivProps } from '../../types';
declare const Backdrop: React.ForwardRefExoticComponent<Omit<BackdropProps & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Omit<LensDivProps, keyof BackdropProps & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BackdropProps & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type BackdropProps = {
    isOpen?: boolean;
    children?: React.ReactNode;
    zIndex?: number;
    backgroundColor?: string;
};
export default Backdrop;
//# sourceMappingURL=backdrop.d.ts.map