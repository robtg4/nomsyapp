var React = require('react-native');
var {
	TouchableHighlight,
	StyleSheet,
	Text,
  Image,
  View,
} = React;


module.exports = React.createClass({
	//prop 1: keyword
	//once clicked we need a boolean indicator to change to indicate that
	//that word has been clicked
	//upon next button push - the values are comitted to the user table in parse
	render: function() {
		return (
			<TouchableHighlight
				style={[styles.keywordBox,]}
				onPress={this.props.onPress}
				key={this.props.key}
				underlayColor={'rgb(68,106,122, 0.6)'} >
        <Image
          source={this.props.source}
          style={this.props.imageStyle} >
            <View style={[styles.overlay, this.props.selected ? {backgroundColor: '#49B64D'} : {}]}>
				      <Text style={this.props.textStyle}>{this.props.text}</Text>
            </View>
        </Image>
			</TouchableHighlight>
		);
	},
});

var styles = StyleSheet.create({
  overlay: {
    backgroundColor:'rgba(0,0,0,0.5)',
    width: window.width/3,
    height: window.width/3,
  },
	keywordText: {
		fontFamily: 'Bebas Neue',
		fontSize: 18,
		padding: 6,
		fontWeight: 'bold',
		color: 'white',
		letterSpacing: 1.5,
		textAlign: 'center'
	},
	keywordBox: {
		backgroundColor: 'transparent',
		margin: 3,
	},
});
