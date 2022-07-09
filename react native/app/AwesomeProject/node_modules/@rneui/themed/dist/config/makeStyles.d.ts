import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { FullTheme, Theme, ThemeMode } from './theme';
import { ReplaceTheme, UpdateTheme } from './ThemeProvider';
interface useThemeI {
    replaceTheme: ReplaceTheme;
    updateTheme: UpdateTheme;
    theme: {
        colors: Colors;
        mode: ThemeMode;
    } & Theme;
}
export declare const useTheme: () => useThemeI;
export declare const useThemeMode: () => ThemeMode;
export declare const makeStyles: <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(styles: T | ((theme: Partial<FullTheme>, props: V) => T)) => (props?: V) => T;
export {};
