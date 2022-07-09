import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from './ThemeProvider';
import { lightColors } from './colors';
const isClassComponent = (Component) => Boolean(Component?.prototype?.isReactComponent);
const combineByStyles = (propName = '') => {
    if (propName.endsWith('style') || propName.endsWith('Style')) {
        return (prop1, prop2) => {
            return [prop1, prop2].flat();
        };
    }
    return undefined;
};
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children, ...rest } = props;
        return (<ThemeConsumer>
          {(context) => {
                if (!context) {
                    const newProps = {
                        ...rest,
                        theme: { colors: lightColors },
                        children,
                    };
                    return isClassComponent(WrappedComponent) ? (<WrappedComponent ref={forwardedRef} {...newProps}/>) : (<WrappedComponent {...newProps}/>);
                }
                const { theme, updateTheme, replaceTheme } = context;
                const themedProps = typeof theme[themeKey] === 'function'
                    ? theme[themeKey]?.(rest)
                    : theme[themeKey];
                const newProps = {
                    theme: { colors: theme.colors, mode: theme.mode },
                    updateTheme,
                    replaceTheme,
                    ...deepmerge(themedProps || {}, rest, {
                        customMerge: combineByStyles,
                        clone: false,
                    }),
                    children,
                };
                if (isClassComponent(WrappedComponent)) {
                    return <WrappedComponent ref={forwardedRef} {...newProps}/>;
                }
                return <WrappedComponent {...newProps}/>;
            }}
        </ThemeConsumer>);
    }, { displayName: displayName });
};
function withTheme(WrappedComponent, themeKey) {
    const name = themeKey
        ? `Themed.${themeKey}`
        : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
    const Component = ThemedComponent(WrappedComponent, themeKey, name);
    if (isClassComponent(WrappedComponent)) {
        return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent);
    }
    return Component;
}
export default withTheme;
