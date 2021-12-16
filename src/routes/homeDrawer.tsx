import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScaledSheet} from 'react-native-size-matters';
import DrawerContent from "../components/screens/Drawer/DrawerContent";
import HomeBottomTabs from "./homeBottomTabs";

const Drawer = createDrawerNavigator();

export default function RootTab() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Main"
        component={HomeBottomTabs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
