import React, { type ReactNode } from 'react';
interface StyleProviderProps {
    /**
     * A DOM element to clone matched styles into. Typically a `<div>` inside a
     * Shadow DOM.
     */
    container: HTMLElement;
    /**
     * The attribute name to match on `<style>` tags.
     * e.g. `"data-style-group"`
     */
    attribute: string;
    /** Children to render. */
    children: ReactNode;
    /**
     * Optional attribute value to match. When provided, only `<style>` tags
     * whose attribute equals this value are cloned.
     * When omitted, any `<style>` with the attribute present is cloned.
     */
    value?: string;
    /**
     * Where to look for `<style>` tags to clone.
     * @default document.head
     */
    source?: HTMLElement;
}
/**
 * StyleProvider
 *
 * Clones `<style>` tags from `document.head` into a container element
 * (typically inside a Shadow DOM) based on a configurable attribute selector.
 *
 * The source styles are expected to be disabled in the parent DOM via an
 * impossible media query (e.g. `media="max-width: 1px"`).  Cloned copies
 * have the `media` attribute removed so they are active only inside the
 * Shadow DOM.
 *
 * Multiple `StyleProvider` instances can share the same source styles —
 * each instance creates its own independent clones.
 *
 * ## How it works
 *
 * 1. Configure your bundler (e.g. webpack `style-loader`) to add a custom
 *    attribute and a disabling media query to injected `<style>` tags.
 * 2. Wrap your components with `<StyleProvider>`, passing the attribute name
 *    and a container ref inside the Shadow DOM.
 * 3. The provider clones matching `<style>` tags into the container with the
 *    `media` attribute removed, and watches for new ones via
 *    `MutationObserver`.
 *
 * ## Usage
 *
 * ```ts
 * // webpack.config.js
 * {
 *   test: /\.compiled\.css$/,
 *   use: [
 *     {
 *       loader: 'style-loader',
 *       options: {
 *         attributes: { 'data-style-group': 'atlaskit', media: 'max-width: 1px' },
 *       },
 *     },
 *     { loader: 'css-loader' },
 *   ],
 * }
 * ```
 *
 * ```tsx
 * // component.tsx
 * import { StyleProvider } from '@loomhq/lens';
 *
 * function ShadowContainer({ children }) {
 *   const [styleContainer, setStyleContainer] = useState<HTMLElement | null>(null);
 *
 *   return (
 *     <root.div>
 *       <div ref={setStyleContainer}>
 *         {styleContainer && (
 *           <StyleProvider container={styleContainer} attribute="data-style-group" value="atlaskit">
 *             {children}
 *           </StyleProvider>
 *         )}
 *       </div>
 *     </root.div>
 *   );
 * }
 * ```
 */
export declare function StyleProvider({ container, attribute, value, children, source, }: StyleProviderProps): React.JSX.Element;
export {};
//# sourceMappingURL=style-provider.d.ts.map