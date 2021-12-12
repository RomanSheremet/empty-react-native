/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; //required by https://reactnavigation.org/docs/getting-started/

import React, {Component} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {decode, encode} from 'base-64';


import AsyncStorage from '@react-native-async-storage/async-storage';

import WelcomeNavigator from './src/routes/homeStack';
import {Preloader} from "./src/Preloader";

if (!global.btoa) {
    global.btoa = encode;
}
if (!global.atob) {
    global.atob = decode;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: true,
            navTo: 'Home',
        };

        Text.defaultProps = Text.defaultProps || {};
        Text.defaultProps.allowFontScaling = false;

        AsyncStorage.getItem('User').then(val => {
            if (val) {
                this.setState({
                    navTo: {
                        initialRouteName: 'Home',
                        isCustomHeader: 1,
                    },
                });
            }
        });
    }

    componentDidMount() {
        SplashScreen.hide();
    }


    render() {
        return this.state.isReady
            ? (WelcomeNavigator(this.state.navTo))
            : <Preloader/>;
    }
}

export default App;
