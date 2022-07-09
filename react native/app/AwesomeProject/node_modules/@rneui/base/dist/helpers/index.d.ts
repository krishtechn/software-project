/// <reference types="react" />
import { PressableProps, ColorValue } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType, { registerCustomIconType } from './getIconType';
import normalizeText from './normalizeText';
import { Colors, lightColors, darkColors } from './colors';
import { InlinePressableProps } from './InlinePressableProps';
declare const ScreenWidth: number;
declare const ScreenHeight: number;
declare const isIOS: boolean;
export declare type RneFunctionComponent<T> = React.FunctionComponent<T & {
    theme?: {
        colors: Colors;
    };
}>;
export declare const defaultTheme: {
    colors: Colors;
};
export declare type Theme = {
    colors: Colors;
};
export declare const androidRipple: (rippleColor?: string | ColorValue) => PressableProps['android_ripple'];
export declare const patchWebProps: <T extends Record<any, any>>({ updateTheme, replaceTheme, onClear, ...rest }: T) => Omit<T, "updateTheme" | "replaceTheme" | "onClear">;
export type { Colors, InlinePressableProps };
export { renderNode, getIconType, normalizeText, ScreenWidth, ScreenHeight, isIOS, lightColors, darkColors, color, registerCustomIconType, };
export { default as BackgroundImage } from './BackgroundImage';
export { default as fonts } from './fonts';
