/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';

import 'react-native-gesture-handler'; //required by https://reactnavigation.org/docs/getting-started/

import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {decode, encode} from 'base-64';


import {RootStack} from './src/routes/homeStack';
import {Preloader} from "./src/Preloader";

if (!global.btoa) {
    global.btoa = encode;
}
if (!global.atob) {
    global.atob = decode;
}

export const App = () => {
    const [appMainState, setAppMainState] = useState({isReady: true, navTo: 'Home'})

    useEffect(() => {
        SplashScreen.hide();
    }, [])


    return appMainState.isReady
        ? (RootStack({initialRouteName: appMainState.navTo}))
        : <Preloader/>
    }


