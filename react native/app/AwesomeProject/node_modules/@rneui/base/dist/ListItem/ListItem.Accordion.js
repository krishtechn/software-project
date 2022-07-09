import React from 'react';
import { Animated } from 'react-native';
import { ListItemBase } from './ListItem';
import { ListItemContent } from './ListItem.Content';
import { Icon } from '../Icon';
export const ListItemAccordion = ({ children, isExpanded, icon, expandIcon, content, noRotation, noIcon, animation = {
    duration: 350,
    type: 'timing',
}, ...rest }) => {
    const { current: transition } = React.useRef(new Animated.Value(0));
    const startAnimation = React.useCallback(() => {
        if (typeof animation !== 'boolean') {
            Animated[animation.type || 'timing'](transition, {
                toValue: Number(isExpanded),
                useNativeDriver: true,
                duration: animation.duration || 350,
            }).start();
        }
    }, [isExpanded, transition, animation]);
    React.useEffect(() => {
        startAnimation();
    }, [isExpanded, startAnimation]);
    const rotate = noRotation || (typeof animation === 'boolean' && animation)
        ? '0deg'
        : transition.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-180deg'],
        });
    return (<>
      <ListItemBase {...rest}>
        {React.isValidElement(content) ? content : <ListItemContent />}
        {!noIcon &&
            (icon ? (React.createElement(Icon, (isExpanded ? expandIcon : icon))) : (<Animated.View testID="RNE__ListItem__Accordion__Icon" style={{
                    transform: [
                        {
                            rotate,
                        },
                    ],
                }}>
              <Icon name={'chevron-down'} type="material-community"/>
            </Animated.View>))}
      </ListItemBase>
      {isExpanded && (<Animated.View testID="RNE__ListItem__Accordion__Children" style={[
                {
                    opacity: transition,
                },
            ]}>
          {children}
        </Animated.View>)}
    </>);
};
ListItemAccordion.displayName = 'ListItem.Accordion';
