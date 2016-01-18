//launch page of app
var React = require('react-native');
var {View, Text, StyleSheet, Image} = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');


module.exports = React.createClass({
  render: function() {
    return (
      <Image
        style={styles.bg}
        source={require('../img/launch-bg.png')} >
        <View style={styles.container}>
          <View style={[styles.logoTop, this.border('red')]}>
            <Image
              resizeMode={'contain'}
              source={require('../img/launch-logo.png')}
              style={[styles.logo]} />
          </View>
          <View style={[styles.login, this.border('blue')]}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
        </View>
      </Image>
    );
  },
  border: function(color) {
	    return {
	      borderColor: color,
	      borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  logoTop: {
    flex: 2,
    alignItems: 'center',
    width: window.width,
    justifyContent: 'space-around',
  },
  login: {
    flex: 3,
    width: window.width,
    justifyContent: 'center',
  },
  logo: {
    justifyContent: 'center',
    width: window.width/1.4,
    height: (481/816)*window.width/1.4,
    alignSelf: 'center',
  },
  bg: {
    width: window.width,
    height: window.height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
