import React from 'react';
import { StyleSheet, View } from 'react-native';
export const ListItemContent = ({ style, right, children, ...rest }) => {
    const containerStyle = right ? styles.rightContainer : styles.container;
    return (<View style={[containerStyle, style]} {...rest}>
      {children}
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
ListItemContent.displayName = 'ListItem.Content';
