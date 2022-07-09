import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../Button';
export const Chip = ({ titleStyle, buttonStyle, onPress, ...rest }) => {
    return (<Button titleStyle={StyleSheet.flatten([
            { fontSize: 14, paddingHorizontal: 2 },
            titleStyle,
        ])} containerStyle={{ borderRadius: 30 }} buttonStyle={StyleSheet.flatten([{ borderRadius: 30 }, buttonStyle])} {...(onPress === undefined
        ? {
            TouchableComponent: TouchableWithoutFeedback,
        }
        : { onPress })} {...rest}/>);
};
Chip.displayName = 'Chip';
