//explore places page
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;
//libraries
var NavigationBar = require('react-native-navbar');
var SearchBar = require('react-native-search-bar');
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text> Im the explore screen</Text>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
    height: window.height,
  }
});
