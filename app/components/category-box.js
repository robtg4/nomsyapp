var React = require('react-native');
var { TouchableHighlight, StyleSheet, Text, Image, View } = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');


module.exports = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				style={[this.categoryBox(this.props.dimension)]}
				onPress={this.props.onPress}
				key={this.props.key}
				underlayColor={'transparent'} >
          <Text style={styles.boxText}>{this.props.boxText}</Text>
			</TouchableHighlight>
		);
	},
  categoryBox: function(dimension) {
    return {
      width: dimension,
      height: dimension*(2/5),
      borderColor: '#55C066',
      borderWidth: 1,
    }
  },
  border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  boxText: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 8,
    fontFamily: 'Avenir Next',
  }
});
