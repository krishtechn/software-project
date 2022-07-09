import React from 'react';
import { ActivityIndicatorProps, StyleProp, TextStyle, TouchableNativeFeedbackProps, TouchableOpacityProps, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { IconNode } from '../Icon';
import { TextProps } from '../Text';
export interface ButtonProps extends TouchableOpacityProps, TouchableNativeFeedbackProps {
    title?: string | React.ReactElement<{}>;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
    buttonStyle?: StyleProp<ViewStyle>;
    type?: 'solid' | 'clear' | 'outline';
    loading?: boolean;
    loadingStyle?: StyleProp<ViewStyle>;
    loadingProps?: ActivityIndicatorProps;
    containerStyle?: StyleProp<ViewStyle>;
    icon?: IconNode;
    iconContainerStyle?: StyleProp<ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    disabledTitleStyle?: StyleProp<TextStyle>;
    raised?: boolean;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
}
export declare const Button: RneFunctionComponent<ButtonProps>;
