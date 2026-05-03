import React from 'react';
declare const IllustrationWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IllustrationWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const Illustration: ({ altText, illustration, src, color, size, ...props }: IllustrationProps & React.ComponentProps<typeof IllustrationWrapper>) => React.JSX.Element;
type IllustrationProps = {
    altText?: string;
    src?: React.ReactNode;
    size?: number | string;
    /** @deprecated Not applicable to Atlassian Design System Illustrations */
    color?: string;
    /** @deprecated Use src instead */
    illustration?: React.ReactNode;
};
type IllustrationWrapperProps = {
    color?: string;
    size?: number | string;
};
export default Illustration;
//# sourceMappingURL=illustration.d.ts.map