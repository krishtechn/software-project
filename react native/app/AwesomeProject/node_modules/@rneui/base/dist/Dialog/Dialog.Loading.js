import React from 'react';
import { StyleSheet, ActivityIndicator, View, } from 'react-native';
import { defaultTheme } from '../helpers';
export const DialogLoading = ({ loadingStyle, loadingProps, theme = defaultTheme, }) => {
    return (<View style={styles.loadingView}>
      <ActivityIndicator style={StyleSheet.flatten([styles.loading, loadingStyle])} color={loadingProps?.color ?? theme?.colors?.primary} size={loadingProps?.size ?? 'large'} testID="Dialog__Loading" {...loadingProps}/>
    </View>);
};
DialogLoading.defaultProps = {
    loadingProps: { size: 'large' },
};
const styles = StyleSheet.create({
    loading: {
        marginVertical: 20,
    },
    loadingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
DialogLoading.displayName = 'Dialog.Loading';
