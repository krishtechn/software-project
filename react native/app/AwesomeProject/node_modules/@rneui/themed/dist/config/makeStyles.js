import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeProvider';
export const useTheme = () => {
    return useContext(ThemeContext);
};
export const useThemeMode = () => {
    return useContext(ThemeContext).theme.mode;
};
export const makeStyles = (styles) => (props = {}) => {
    const { theme } = useTheme();
    return useMemo(() => {
        const css = typeof styles === 'function'
            ? styles({ colors: theme.colors, mode: theme.mode }, props)
            : styles;
        return StyleSheet.create(css);
    }, [props, theme.colors, theme.mode]);
};
