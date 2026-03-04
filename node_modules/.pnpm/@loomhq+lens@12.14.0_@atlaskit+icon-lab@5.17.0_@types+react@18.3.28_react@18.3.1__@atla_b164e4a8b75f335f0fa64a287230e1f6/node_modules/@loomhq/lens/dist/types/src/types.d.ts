export type ResponsiveType<T> = T | T[] | {
    [key: string]: T;
};
export type ResponsiveGridSections = string | (string | number)[] | {
    [key: string]: string | (string | number)[];
};
type DivProps = React.HTMLProps<HTMLDivElement>;
export interface LensDivProps {
    /** @deprecated Prefer using Lens builtin props */
    className?: DivProps['className'];
    /** @deprecated Prefer using Lens builtin props */
    style?: DivProps['style'];
    /** @deprecated Prefer using Lens builtin props */
    onClick?: DivProps['onClick'];
    /** @deprecated Prefer using Lens builtin props */
    onMouseEnter?: DivProps['onMouseEnter'];
    /** @deprecated Prefer using Lens builtin props */
    onMouseLeave?: DivProps['onMouseLeave'];
    /** @deprecated Prefer using Lens builtin props */
    onMouseMove?: DivProps['onMouseMove'];
    /** @deprecated Prefer using Lens builtin props */
    onKeyDown?: DivProps['onKeyDown'];
    /** @deprecated Prefer using Lens builtin props */
    onScroll?: DivProps['onScroll'];
    /** @deprecated Prefer using Lens builtin props */
    color?: DivProps['color'];
    /** @deprecated Prefer using Lens builtin props */
    size?: DivProps['size'];
    /** @deprecated Prefer using Lens builtin props */
    title?: DivProps['title'];
    /** @deprecated Prefer using Lens builtin props */
    as?: DivProps['as'];
    /** @deprecated Prefer using Lens builtin props */
    onSubmit?: DivProps['onSubmit'];
    id?: DivProps['id'];
    tabIndex?: DivProps['tabIndex'];
    role?: DivProps['role'];
}
type AnchorProps = React.HTMLProps<HTMLAnchorElement>;
export interface LensAnchorProps {
    /** @deprecated Prefer using Lens builtin props */
    className?: DivProps['className'];
    /** @deprecated Prefer using Lens builtin props */
    color?: AnchorProps['color'];
    /** @deprecated Prefer using Lens builtin props */
    style?: DivProps['style'];
    /** @deprecated Prefer using Lens builtin props */
    onKeyDown?: AnchorProps['onKeyDown'];
    id?: AnchorProps['id'];
    type?: AnchorProps['type'];
    rel?: AnchorProps['rel'];
    title?: AnchorProps['title'];
}
type SpanProps = React.HTMLProps<HTMLSpanElement>;
export interface LensSpanProps {
    /** @deprecated Prefer using Lens builtin props */
    className?: SpanProps['className'];
    /** @deprecated Prefer using Lens builtin props */
    style?: SpanProps['style'];
    /** @deprecated Prefer using Lens builtin props */
    onClick?: SpanProps['onClick'];
    /** @deprecated Prefer using Lens builtin props */
    as?: SpanProps['as'];
    id?: SpanProps['id'];
    role?: SpanProps['role'];
}
type ButtonProps = React.HTMLProps<HTMLButtonElement>;
export interface LensButtonProps {
    /** @deprecated Prefer using Lens builtin props */
    className?: DivProps['className'];
    /** @deprecated Prefer using Lens builtin props */
    style?: DivProps['style'];
    /** @deprecated Prefer using Lens builtin props */
    disabled?: ButtonProps['disabled'];
    /** @deprecated Prefer using Lens builtin props */
    as?: ButtonProps['as'];
    /** @deprecated Prefer using Lens builtin props */
    color?: ButtonProps['color'];
    /** @deprecated Prefer using Lens builtin props */
    type?: ButtonProps['type'];
    /** @deprecated Prefer using Lens builtin props */
    title?: ButtonProps['title'];
    /** @deprecated Prefer using Lens builtin props */
    onBlur?: ButtonProps['onBlur'];
    /** @deprecated Prefer using Lens builtin props */
    onMouseDown?: ButtonProps['onMouseDown'];
    /** @deprecated Prefer using Lens builtin props */
    onMouseEnter?: ButtonProps['onMouseEnter'];
    /** @deprecated Prefer using Lens builtin props */
    onMouseLeave?: ButtonProps['onMouseLeave'];
    /** @deprecated Prefer using Lens builtin props */
    onKeyDown?: ButtonProps['onKeyDown'];
    /** @deprecated Prefer using Lens builtin props */
    onTouchStart?: ButtonProps['onTouchStart'];
    /** @deprecated Prefer using Lens builtin props */
    onTouchMove?: ButtonProps['onTouchMove'];
    /** @deprecated Prefer using Lens builtin props */
    onFocus?: ButtonProps['onFocus'];
    id?: ButtonProps['id'];
    rel?: ButtonProps['rel'];
    form?: ButtonProps['form'];
    autoFocus?: ButtonProps['autoFocus'];
    onClick?: ButtonProps['onClick'];
}
type InputProps = React.HTMLProps<HTMLInputElement>;
export interface LensInputProps {
    readOnly?: InputProps['readOnly'];
    id?: InputProps['id'];
}
type DialogProps = React.HTMLProps<HTMLDialogElement>;
export interface LensDialogProps {
    /** @deprecated Prefer using Lens builtin props */
    style?: DialogProps['style'];
    /** @deprecated Prefer using Lens builtin props */
    className?: DialogProps['className'];
    tabIndex?: DialogProps['tabIndex'];
}
export interface LensAsideProps {
    id?: HTMLElement['id'];
}
export {};
//# sourceMappingURL=types.d.ts.map