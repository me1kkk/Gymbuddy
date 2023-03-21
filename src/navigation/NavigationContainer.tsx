import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { HomeScreen } from '../screens/Home/Home';
import { TabNavigator } from './TabNavigator';

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}



