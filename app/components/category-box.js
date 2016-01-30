var React = require('react-native');
var { TouchableHighlight, StyleSheet, Text, Image, View } = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');


module.exports = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				style={this.categoryBox(this.props.length, this.props.key)}
				onPress={this.props.onPress}
				key={this.props.key}
				underlayColor={'transparent'} >
          <Text style={styles.boxText}>{this.props.boxText}</Text>
			</TouchableHighlight>
		);
	},
	categoryBox: function(length, i) {
		if (i == 1) {
			return {
				padding: 2,
				marginLeft: 5,
				marginRight: 5,
				marginBottom: 2,
				borderRadius: 5,
				backgroundColor: '#00CED1',
				borderColor: '#00CED1',
		    borderWidth: 1,
			}
		} else {
			return {
				padding: 2,
				marginRight: 5,
				borderRadius: 5,
				marginBottom: 2,
				backgroundColor: '#00CED1',
				borderColor: '#00CED1',
		    borderWidth: 1,
			}
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
    fontSize: 12,
		fontWeight: 'bold',
    fontFamily: 'Avenir Next',
		color: 'white',
  }
});
