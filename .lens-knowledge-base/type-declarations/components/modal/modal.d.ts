import React, { type PropsWithChildren } from 'react';
import type { LensDialogProps } from '../../types';
declare const ModalCardWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & {
    id?: string;
    isOpen?: boolean;
    onKeyDown?: React.ReactEventHandler;
    onCloseClick?: React.ReactEventHandler;
    closeOnEscape?: boolean;
    placement?: string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    ariaLabel?: string;
    ariaModal?: boolean;
    ariaLabelledBy?: string;
    removeClose?: boolean;
} & {
    children?: React.ReactNode | undefined;
}, React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, {}>;
export declare const ModalCard: ({ children, onCloseClick, isOpen, maxWidth, maxHeight, placement, ariaLabel, ariaModal, ariaLabelledBy, ref, removeClose, initialFocus, closeOnEscape, ...props }: ModalCardProps & {
    initialFocus?: HTMLElement | SVGElement | string | false | (() => HTMLElement | SVGElement | string | false | undefined);
} & React.ComponentProps<typeof ModalCardWrapper> & Omit<LensDialogProps, keyof ModalCardProps & React.ComponentProps<typeof ModalCardWrapper>>) => React.JSX.Element;
declare const Modal: React.ForwardRefExoticComponent<Omit<{
    isOpen?: boolean;
    mainButton?: React.ReactNode;
    secondaryButton?: React.ReactNode;
    alternativeButton?: React.ReactNode;
    title?: React.ReactNode;
    onCloseClick?: React.ReactEventHandler;
    onBackgroundClick?: React.ReactEventHandler;
    onKeyDown?: React.ReactEventHandler;
    hasDividers?: boolean;
    maxHeight?: number | string;
    maxWidth?: number | string;
    noPadding?: boolean;
    placement?: "center" | "bottom";
    zIndex?: number;
    ariaLabel?: string;
    ariaModal?: boolean;
    ariaLabelledBy?: string;
    initialFocus?: HTMLElement | SVGElement | string | false | (() => HTMLElement | SVGElement | string | false | undefined);
} & {
    children?: React.ReactNode | undefined;
} & Omit<{
    isOpen?: boolean;
    children?: React.ReactNode;
    zIndex?: number;
    backgroundColor?: string;
} & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Omit<import("../..").LensDivProps, keyof {
    isOpen?: boolean;
    children?: React.ReactNode;
    zIndex?: number;
    backgroundColor?: string;
} & {
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & {
    isOpen?: boolean;
    children?: React.ReactNode;
    zIndex?: number;
    backgroundColor?: string;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>, "ref"> & React.RefAttributes<HTMLDivElement> & {
    initialFocus?: HTMLElement | SVGElement | string | false | (() => HTMLElement | SVGElement | string | false | undefined);
}, "ref"> & React.RefAttributes<HTMLDialogElement>>;
type ModalCardProps = PropsWithChildren<{
    id?: string;
    isOpen?: boolean;
    onKeyDown?: React.ReactEventHandler;
    onCloseClick?: React.ReactEventHandler;
    closeOnEscape?: boolean;
    placement?: string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    ariaLabel?: string;
    ariaModal?: boolean;
    ariaLabelledBy?: string;
    removeClose?: boolean;
}>;
export default Modal;
//# sourceMappingURL=modal.d.ts.map