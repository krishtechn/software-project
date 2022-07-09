import React from 'react';
import { View } from 'react-native';
export const TabViewItem = ({ children, ...rest }) => {
    return <View {...rest}>{React.isValidElement(children) && children}</View>;
};
TabViewItem.displayName = 'TabView.Item';
