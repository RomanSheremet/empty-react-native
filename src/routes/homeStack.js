import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Drawer from './homeDrawer';

const Stack = createStackNavigator();

export default function RootStack(navProp) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navProp.initialRouteName}
        screenOptions={{gestureEnabled: false}}>
        {/*<Stack.Screen
          name="Login"
          component={Login}
          options={{title: '', headerTransparent: true}}
          initialParams={{isCustomHeader: navProp.isCustomHeader}}
        />*/}
        <Stack.Screen
            name="Home"
            component={Drawer}
            options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
