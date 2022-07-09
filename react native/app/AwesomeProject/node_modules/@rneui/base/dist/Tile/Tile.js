import React from 'react';
import { View, StyleSheet, Dimensions, Pressable, } from 'react-native';
import { Image } from '../Image';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { FeaturedTile } from './components/FeaturedTile';
import { androidRipple, defaultTheme } from '../helpers';
import Color from 'color';
export const Tile = ({ featured, imageSrc, icon, title, children, caption, titleStyle, onPress, activeOpacity, overlayContainerStyle, captionStyle, iconContainerStyle, imageContainerStyle, containerStyle, contentContainerStyle, titleNumberOfLines, ImageComponent = Image, imageProps = {}, width = Dimensions.get('window').width, height = width * 0.8, theme = defaultTheme, ...attributes }) => {
    if (featured) {
        const featuredProps = {
            title,
            icon,
            caption,
            imageSrc,
            onPress,
            activeOpacity,
            containerStyle,
            imageContainerStyle,
            overlayContainerStyle,
            titleStyle,
            captionStyle,
            width,
            height,
            imageProps,
            ImageComponent,
        };
        return <FeaturedTile {...featuredProps}/>;
    }
    return (<Pressable {...{
        onPress,
        android_ripple: androidRipple(Color(theme?.colors?.primary).alpha(activeOpacity).rgb().toString()),
        ...attributes,
    }} style={StyleSheet.flatten([
            {
                width,
                height,
            },
            containerStyle && containerStyle,
        ])}>
      <ImageComponent resizeMode="cover" source={imageSrc} containerStyle={StyleSheet.flatten([
            styles.imageContainer,
            imageContainerStyle && imageContainerStyle,
        ])} style={{
            ...StyleSheet.absoluteFillObject,
            alignItems: 'center',
            justifyContent: 'center',
        }} {...imageProps}>
        <View style={StyleSheet.flatten([
            styles.iconContainer,
            iconContainerStyle && iconContainerStyle,
        ])}>
          {icon && <Icon {...icon}/>}
        </View>
      </ImageComponent>

      <View style={StyleSheet.flatten([
            styles.contentContainer,
            contentContainerStyle && contentContainerStyle,
        ])}>
        <Text testID="tileTitle" h4={!titleStyle || !('fontSize' in titleStyle)} style={StyleSheet.flatten([styles.text, titleStyle && titleStyle])} numberOfLines={titleNumberOfLines}>
          {title}
        </Text>
        {children}
      </View>
    </Pressable>);
};
const styles = StyleSheet.create({
    imageContainer: {
        flex: 2,
    },
    text: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 5,
    },
    contentContainer: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
Tile.displayName = 'Tile';
