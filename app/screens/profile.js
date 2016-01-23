//profile page
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;
//libraries
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text> Im the profile screen</Text>
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
