import Color from 'color';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '../Button';
import { defaultTheme } from '../helpers';
export const TabItem = ({ active, theme = defaultTheme, titleStyle, containerStyle, buttonStyle, iconContainerStyle, variant, iconPosition = 'top', title, ...rest }) => {
    const activeStyle = React.useCallback((type) => (typeof type === 'function' ? type(active) : type), [active]);
    return (<Button accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityValue={typeof title === 'string' ? { text: title } : undefined} buttonStyle={[styles.buttonStyle, activeStyle(buttonStyle)]} titleStyle={[
            styles.titleStyle,
            {
                color: variant === 'primary' ? 'white' : theme?.colors?.secondary,
                paddingVertical: !rest.icon ? 8 : 2,
            },
            activeStyle(titleStyle),
        ]} containerStyle={[
            styles.containerStyle,
            {
                backgroundColor: active
                    ? Color(theme?.colors?.primary).darken(0.05).rgb().toString()
                    : 'transparent',
            },
            activeStyle(containerStyle),
        ]} iconContainerStyle={[activeStyle(iconContainerStyle)]} iconPosition={iconPosition} title={title} {...rest}/>);
};
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    containerStyle: {
        flex: 1,
        borderRadius: 0,
    },
    viewStyle: {
        flexDirection: 'row',
        position: 'relative',
    },
    indicator: {
        display: 'flex',
        position: 'absolute',
        height: 2,
        bottom: 0,
    },
});
TabItem.displayName = 'Tab.Item';
