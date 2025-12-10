import React from 'react';
import type { LensDivProps, ResponsiveType } from '../../types';
declare const ListWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & ListProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ListRow: ({ children, htmlTag, className, backgroundColor, onClick, href, role, ...props }: ListRowProps) => React.JSX.Element;
declare const List: ({ children, columns, gap, variant, htmlTag, ...props }: ListProps & React.ComponentProps<typeof ListWrapper> & Omit<LensDivProps, keyof ListProps & React.ComponentProps<typeof ListWrapper>>) => React.JSX.Element;
interface SharedProps {
    padding?: ResponsiveType<string | number>;
    paddingTop?: ResponsiveType<string | number>;
    paddingBottom?: ResponsiveType<string | number>;
    paddingLeft?: ResponsiveType<string | number>;
    paddingRight?: ResponsiveType<string | number>;
    paddingY?: ResponsiveType<string | number>;
    paddingX?: ResponsiveType<string | number>;
    height?: ResponsiveType<string | number>;
    minHeight?: ResponsiveType<string | number>;
    maxHeight?: ResponsiveType<string | number>;
    backgroundColor?: string;
}
interface ListRowProps extends SharedProps {
    className?: string;
    htmlTag?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    onClick?: React.ReactEventHandler;
    href?: string;
    role?: string;
}
type ListProps = {
    columns?: (string | number)[];
    gap?: ResponsiveType<string | number>;
    variant?: 'clear' | 'border' | 'stripe';
    htmlTag?: keyof JSX.IntrinsicElements;
    backgroundColor?: string;
    children?: React.ReactNode;
};
export default List;
//# sourceMappingURL=list.d.ts.map