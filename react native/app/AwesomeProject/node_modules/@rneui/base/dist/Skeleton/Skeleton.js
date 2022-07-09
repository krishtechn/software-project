import React, { useEffect, useRef } from 'react';
import { Animated, View, Platform, StyleSheet, } from 'react-native';
import { defaultTheme } from '../helpers';
import Color from 'color';
export const Skeleton = ({ circle, width = '100%', height, animation = 'wave', style, skeletonStyle, theme = defaultTheme, LinearGradientComponent, ...rest }) => {
    const animationRef = useRef(new Animated.Value(0));
    const animationLoop = useRef();
    const [layoutWidth, setLayoutWidth] = React.useState(0);
    useEffect(() => {
        animationLoop.current = Animated.timing(animationRef.current, {
            toValue: 2,
            delay: 400,
            duration: 1500,
            useNativeDriver: !!Platform.select({
                web: false,
                native: true,
            }),
        });
        animationRef.current.setValue(0);
        Animated.loop(animationLoop.current).start();
    }, []);
    return (<View accessibilityRole="none" accessibilityLabel="loading..." accessible={false} testID="RNE__Skeleton" onLayout={({ nativeEvent }) => {
            setLayoutWidth(nativeEvent.layout.width);
        }} style={[
            styles.container,
            {
                width: width,
                height: height || 12,
                backgroundColor: theme?.colors?.grey4,
            },
            circle && {
                borderRadius: 50,
                height: height || width,
            },
            style,
        ]} {...rest}>
      {animation !== 'none' && (<Animated.View style={[
                styles.skeleton,
                !LinearGradientComponent && {
                    backgroundColor: Color(theme?.colors?.grey4)
                        .darken(0.1)
                        .rgb()
                        .string(),
                },
                animation === 'pulse' && {
                    width: '100%',
                    opacity: animationRef.current.interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: [1, 0, 1],
                    }),
                },
                animation === 'wave' && {
                    transform: [
                        {
                            translateX: animationRef.current.interpolate({
                                inputRange: [0, 2],
                                outputRange: [-layoutWidth * 2, layoutWidth * 2],
                            }),
                        },
                    ],
                },
                skeletonStyle,
            ]}>
          {LinearGradientComponent && (<LinearGradientComponent style={styles.skeleton} colors={[
                    theme.colors.grey4,
                    theme.colors.grey5,
                    theme.colors.grey4,
                ]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}/>)}
        </Animated.View>)}
    </View>);
};
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderRadius: 2,
    },
    skeleton: {
        height: '100%',
    },
});
