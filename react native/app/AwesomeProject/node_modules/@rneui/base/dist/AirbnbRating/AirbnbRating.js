import React from 'react';
import { AirbnbRating as TapRating, } from 'react-native-ratings';
export const AirbnbRating = (props) => {
    return <TapRating {...props}/>;
};
AirbnbRating.displayName = 'AirbnbRating';
