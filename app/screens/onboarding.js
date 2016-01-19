//home page that connects everything together in app index
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;


module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text> Im the onboarding screen</Text>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
