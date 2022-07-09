import React from 'react';
import { Switch as NativeSwitch, Platform, } from 'react-native';
import { defaultTheme } from '../helpers';
export const Switch = ({ value = false, disabled = false, onValueChange, color = 'primary', style, theme = defaultTheme, ...rest }) => {
    const switchedOnColor = color === 'primary'
        ? theme?.colors?.primary
            ? theme.colors.primary
            : ''
        : color;
    const onTintColor = Platform.OS === 'ios' || !disabled
        ? switchedOnColor
        : theme?.colors?.disabled
            ? theme.colors.disabled
            : '';
    const thumbTintColor = Platform.OS === 'ios'
        ? undefined
        : disabled || !value
            ? theme?.colors?.disabled
            : switchedOnColor;
    const props = Platform.OS === 'web'
        ? {
            activeTrackColor: onTintColor,
            thumbColor: thumbTintColor,
            activeThumbColor: switchedOnColor,
        }
        : {
            thumbColor: thumbTintColor,
            trackColor: {
                true: onTintColor,
                false: '',
            },
        };
    return (<NativeSwitch testID="RNE__SWITCH" value={value} accessibilityState={{
            checked: value,
            disabled,
        }} disabled={disabled} onValueChange={disabled ? undefined : onValueChange} style={style} {...props} {...rest}/>);
};
Switch.displayName = 'Switch';
