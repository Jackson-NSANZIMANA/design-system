import React from 'react';
declare const IllustrationWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & IllustrationWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const Illustration: ({ altText, illustration, color, size, ...props }: IllustrationProps & React.ComponentProps<typeof IllustrationWrapper>) => React.JSX.Element;
type IllustrationProps = {
    altText?: string;
    color?: string;
    illustration?: React.ReactNode;
    size?: number | string;
};
type IllustrationWrapperProps = {
    color?: string;
    size?: number | string;
};
export default Illustration;
//# sourceMappingURL=illustration.d.ts.map