import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import Login from "../components/screens/Login";

const BottomTab = createBottomTabNavigator();

export default function HomeBottomTabs() {
    return (
        <BottomTab.Navigator
            initialRouteName={'Menu'}
            barStyle={{
                height: '100%',
                width: 80,
            }}
            options={({ route }) => ({
                tabBarVisible: true,
            })}
            tabBarVisible={true}
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
                    tabBarVisible: true,
                },
                height: 50
            }}>
            <BottomTab.Screen
                name="Login"
                component={Login}
                options={{title: 'Первая', headerShown: false}}
            />
            <BottomTab.Screen
                name="Login2"
                component={Login}
                options={{title: 'Вторая', headerShown: false}}
            />
            <BottomTab.Screen
                name="Login3"
                component={Login}
                options={{title: 'Третья', headerShown: false}}
            />
        </BottomTab.Navigator>
    );
}
