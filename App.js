import React from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens, registerScreenVisibilityListener } from './src/screens/Screens';

registerScreens();
registerScreenVisibilityListener();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'app.AppMain',
    }
});