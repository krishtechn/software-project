import React from 'react';
import { PressableProps } from 'react-native';
import { FABProps } from '../FAB';
import { IconNode } from '../Icon';
import { RneFunctionComponent } from '../helpers';
export interface SpeedDialProps extends FABProps {
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    openIcon?: IconNode;
    overlayColor?: string;
    children?: React.ReactChild[];
    transitionDuration?: number;
    backdropPressableProps?: PressableProps;
}
export declare const SpeedDial: RneFunctionComponent<SpeedDialProps>;
