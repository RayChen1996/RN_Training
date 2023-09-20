/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import houseKeeper from './src/views/houseKeeper'
import {name as appName} from './app.json';

import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { faMapMarker, faCalendar } from '@fortawesome/free-solid-svg-icons';
// 配置 FontAwesome 图标库
Icon.loadFont();

FontAwesomeIcons.loadFont();

AppRegistry.registerComponent(appName, () => houseKeeper);//App
