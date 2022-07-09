import React from 'react';
import { View, Animated, StyleSheet, ScrollView, } from 'react-native';
import { defaultTheme } from '../helpers';
export const TabBase = ({ theme = defaultTheme, children, value, scrollable = false, onChange = () => { }, indicatorStyle, disableIndicator, variant, containerStyle, ...rest }) => {
    const animationRef = React.useRef(new Animated.Value(0));
    const scrollViewRef = React.useRef(null);
    const scrollViewPosition = React.useRef(0);
    const validChildren = React.Children.toArray(children);
    const tabItemsPosition = React.useRef([]);
    const [tabContainerWidth, setTabContainerWidth] = React.useState(0);
    const scrollHandler = React.useCallback(() => {
        if (tabItemsPosition.current.length > value) {
            let itemStartPosition = value === 0 ? 0 : tabItemsPosition.current[value - 1].position;
            let itemEndPosition = tabItemsPosition.current[value].position;
            const scrollCurrentPosition = scrollViewPosition.current;
            const tabContainerCurrentWidth = tabContainerWidth;
            let scrollX = scrollCurrentPosition;
            if (itemStartPosition < scrollCurrentPosition) {
                scrollX += itemStartPosition - scrollCurrentPosition;
            }
            else if (scrollCurrentPosition + tabContainerCurrentWidth <
                itemEndPosition) {
                scrollX +=
                    itemEndPosition - (scrollCurrentPosition + tabContainerCurrentWidth);
            }
            scrollViewRef.current.scrollTo({
                x: scrollX,
                y: 0,
                animated: true,
            });
        }
    }, [tabContainerWidth, value]);
    React.useEffect(() => {
        Animated.timing(animationRef.current, {
            toValue: value,
            useNativeDriver: true,
            duration: 170,
        }).start();
        scrollable && requestAnimationFrame(scrollHandler);
    }, [animationRef, scrollHandler, value, scrollable]);
    const onScrollHandler = React.useCallback((event) => {
        scrollViewPosition.current = event.nativeEvent.contentOffset.x;
    }, []);
    const indicatorTransitionInterpolate = React.useMemo(() => {
        const countItems = validChildren.length;
        if (countItems < 2 || !tabItemsPosition.current.length) {
            return 0;
        }
        const inputRange = [...Array(countItems).keys()];
        const outputRange = tabItemsPosition.current.map(({ position }) => position);
        if (inputRange.length !== outputRange.length) {
            return 0;
        }
        return animationRef.current.interpolate({
            inputRange,
            outputRange: [0, ...outputRange].slice(0, -1),
        });
    }, [animationRef, validChildren]);
    const WIDTH = tabItemsPosition.current[value]?.width;
    return (<View {...rest} accessibilityRole="tablist" style={[
            variant === 'primary' && {
                backgroundColor: theme?.colors?.primary,
            },
            styles.viewStyle,
            containerStyle,
        ]} onLayout={({ nativeEvent: { layout } }) => {
            setTabContainerWidth(layout.width);
        }}>
      {React.createElement(scrollable ? ScrollView : React.Fragment, {
            ...(scrollable && {
                horizontal: true,
                ref: scrollViewRef,
                onScroll: onScrollHandler,
                showsHorizontalScrollIndicator: false,
            }),
            children: (<>
            {validChildren.map((child, index) => {
                    return React.cloneElement(child, {
                        onPress: () => onChange(index),
                        onLayout: (event) => {
                            const { width } = event.nativeEvent.layout;
                            const previousItemPosition = tabItemsPosition.current[index - 1]?.position || 0;
                            tabItemsPosition.current[index] = {
                                position: previousItemPosition + width,
                                width,
                            };
                        },
                        active: index === value,
                        variant,
                    });
                })}
            {!disableIndicator && (<Animated.View style={[
                        styles.indicator,
                        {
                            backgroundColor: theme?.colors?.secondary,
                            transform: [
                                {
                                    translateX: indicatorTransitionInterpolate,
                                },
                            ],
                            width: WIDTH,
                        },
                        indicatorStyle,
                    ]}/>)}
          </>),
        })}
    </View>);
};
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        textTransform: 'uppercase',
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
TabBase.displayName = 'Tab';
