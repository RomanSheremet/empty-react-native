/**
 * @format
 */

import {AppRegistry} from 'react-native';
const appConfig = require('./app.json');
import {App} from "./App";

AppRegistry.registerComponent(appConfig.name, () => App);
