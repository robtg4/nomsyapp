//upvote touchable icon
var React = require('react-native');
var {Text, View, StyleSheet, Image, TouchableHighlight} = React;
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries
var { Icon } = require('react-native-icons');
//components


module.exports = React.createClass({
  render: function() {
    return <TouchableHighlight
      underlayColor={'transparent'}
      onPress={this.props.onPress}>
      <Image
        source={require('../img/up-arrow-btn.png')}
        style={[styles.arrow, this.border('red')]}>
          <Text style={styles.voteCount}>{this.props.voteCount}</Text>
      </Image>
    </TouchableHighlight>
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 2,
    }
  },
});

var styles = StyleSheet.create({
  voteCount: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 8,
    fontFamily: 'Avenir Next',
  },
  arrow: {
    width: 15,
    height: 15,
  },
});
