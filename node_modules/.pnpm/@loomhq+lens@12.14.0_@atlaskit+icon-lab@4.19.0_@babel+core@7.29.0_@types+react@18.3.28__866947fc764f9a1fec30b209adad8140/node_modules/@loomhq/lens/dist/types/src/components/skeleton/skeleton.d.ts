import React from 'react';
import type { TextSize } from '../../variables';
declare const SkeletonTextWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & SkeletonTextProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const SkeletonText: ({ size, lines, animated, }: SkeletonTextProps & React.ComponentProps<typeof SkeletonTextWrapper>) => React.JSX.Element;
export declare const SkeletonContainer: ({ animated, height, radius, width, }: SkeletonContainerProps & React.ComponentProps<typeof SkeletonTextWrapper>) => React.JSX.Element;
type SkeletonTextProps = {
    animated?: boolean;
    lines?: number;
    size?: TextSize;
};
type SkeletonContainerProps = {
    animated?: boolean;
    height?: string;
    radius?: 'medium' | 'large' | 'xlarge' | 'full' | '175';
    width?: string;
};
export default SkeletonText;
//# sourceMappingURL=skeleton.d.ts.map