import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import Login from "../components/screens/Login";

const BottomTab = createBottomTabNavigator();

export default function HomeBottomTabs() {
    return (
        <BottomTab.Navigator
            initialRouteName={'Menu'}
            tabBarOptions={{
                labelStyle: {
                    fontSize: scale(8),
                    fontFamily: 'Montserrat-Medium',
                    height: 50
                },
                tabStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                },
            }}>
            <BottomTab.Screen
                name="Login"
                component={Login}
                options={{title: 'Первая'}}
            />
            <BottomTab.Screen
                name="Login2"
                component={Login}
                options={{title: 'Вторая'}}
            />
            <BottomTab.Screen
                name="Login3"
                component={Login}
                options={{title: 'Третья'}}
            />
        </BottomTab.Navigator>
    );
}
