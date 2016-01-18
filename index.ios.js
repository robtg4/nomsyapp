//ios to main.js
'use strict';
var React = require('react-native');
var { StyleSheet, Text, View, AppRegistry } = React;
var Main = require('./main');

AppRegistry.registerComponent('nomsyapp', () => Main);
