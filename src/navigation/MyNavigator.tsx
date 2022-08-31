import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Scale from '../screens/Scale';
import PdfDownload from '../screens/PdfDownload';

const Stack = createStackNavigator();

export const MyNavigator = (): React.ReactElement => {

    return <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Splash} name="Splash" />
            <Stack.Screen component={Scale} name="Scale" />
            <Stack.Screen component={PdfDownload} name="PdfDownload" />

        </Stack.Navigator>
    </NavigationContainer>
}