import React from 'react';
import { Colors } from './colors';
import { ThemeMode, RecursivePartial, Theme } from './theme';
import { ComponentTheme } from './theme.component';
export type { RecursivePartial };
declare type ComponentFunctionProps<Components = ComponentTheme> = {
    [Key in keyof Components]?: Components[Key] | ((props: Components[Key]) => Components[Key]);
};
export interface CreateThemeOptions extends ComponentFunctionProps, Theme {
    mode?: ThemeMode;
    lightColors?: RecursivePartial<Colors>;
    darkColors?: RecursivePartial<Colors>;
}
export interface ThemeOptions extends ComponentFunctionProps, Theme {
    colors: Colors;
    mode: ThemeMode;
}
export declare type UpdateTheme = (myNewTheme: CreateThemeOptions | ((myTheme: CreateThemeOptions) => CreateThemeOptions)) => void;
export declare type ReplaceTheme = (updates: CreateThemeOptions | ((myTheme: CreateThemeOptions) => CreateThemeOptions)) => void;
export declare type ThemeProviderProps<T = {}> = {
    theme: ThemeOptions & T;
    updateTheme: UpdateTheme;
    replaceTheme: ReplaceTheme;
};
export declare const ThemeContext: React.Context<ThemeProviderProps<{}>>;
export declare const createTheme: (theme: CreateThemeOptions) => CreateThemeOptions;
export declare const ThemeProvider: React.FC<{
    theme?: CreateThemeOptions;
}>;
export declare const ThemeConsumer: React.Consumer<ThemeProviderProps<{}>>;
