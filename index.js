/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import HomeMain from './src/screens/HomeMain';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeMain);
