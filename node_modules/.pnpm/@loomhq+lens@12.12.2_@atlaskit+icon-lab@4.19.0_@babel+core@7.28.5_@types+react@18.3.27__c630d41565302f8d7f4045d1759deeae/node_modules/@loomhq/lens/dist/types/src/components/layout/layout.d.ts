import React, { Component } from 'react';
import type { ResponsiveType } from '../../types';
declare const LayoutSectionWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & LayoutSectionProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const LayoutSection: ({ width, maxWidth, children, ...props }: LayoutSectionProps & React.ComponentProps<typeof LayoutSectionWrapper>) => React.JSX.Element;
declare class Layout extends Component<LayoutProps> {
    static Section: ({ width, maxWidth, children, ...props }: LayoutSectionProps & React.ComponentProps<typeof LayoutSectionWrapper>) => React.JSX.Element;
    render(): React.JSX.Element;
}
type Alignments = 'start' | 'center' | 'end' | 'stretch';
type LayoutProps = {
    alignment?: Alignments | Alignments[];
    gap?: ResponsiveType<string | number>;
    children?: React.ReactNode;
};
type LayoutSectionProps = {
    width?: ResponsiveType<string | number>;
    maxWidth?: ResponsiveType<string | number>;
    children?: React.ReactNode;
};
export default Layout;
//# sourceMappingURL=layout.d.ts.map