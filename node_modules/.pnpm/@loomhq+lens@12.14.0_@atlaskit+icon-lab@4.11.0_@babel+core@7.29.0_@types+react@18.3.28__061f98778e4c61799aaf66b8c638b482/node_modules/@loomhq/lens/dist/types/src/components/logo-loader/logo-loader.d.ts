import React from 'react';
declare const LogoLoaderWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & LogoLoaderProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const LogoLoader: ({ animation, brand, size, }: LogoLoaderProps & React.ComponentProps<typeof LogoLoaderWrapper>) => React.JSX.Element;
type LogoLoaderProps = {
    animation?: string;
    brand?: 'loom' | 'ai';
    size?: 'small' | 'medium';
};
export default LogoLoader;
//# sourceMappingURL=logo-loader.d.ts.map