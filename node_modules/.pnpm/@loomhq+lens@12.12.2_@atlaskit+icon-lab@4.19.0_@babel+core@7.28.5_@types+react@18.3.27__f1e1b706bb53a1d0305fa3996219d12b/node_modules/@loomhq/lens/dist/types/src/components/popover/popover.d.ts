import React from 'react';
type PlacementProps = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'leftTop' | 'leftCenter' | 'leftBottom' | 'rightTop' | 'rightCenter' | 'rightBottom';
declare const Popover: ({ children, content, offset, boundaryOffset, isOpen, zIndex, childrenZIndex, placement, rootId, boundaryElement, transitionDuration, transitionDelay, ...props }: PopoverProps) => React.JSX.Element;
type PopoverProps = {
    children?: React.ReactNode;
    content?: React.ReactNode;
    offset?: number;
    boundaryOffset?: number;
    zIndex?: number | string;
    isOpen?: boolean;
    placement?: PlacementProps;
    rootId?: string;
    boundaryElement?: 'body' | Element;
    transitionDuration?: number;
    transitionDelay?: number;
    childrenZIndex?: number;
};
export default Popover;
//# sourceMappingURL=popover.d.ts.map