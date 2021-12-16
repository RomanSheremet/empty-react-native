import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../components/screens/Login";

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName={'Main'}
            screenOptions={{gestureEnabled: false}}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{title: '', headerTransparent: true}}
            />
        </Stack.Navigator>
    );
}
