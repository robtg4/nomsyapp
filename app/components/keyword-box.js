var React = require('react-native');
var { TouchableHighlight, StyleSheet, Text, Image, View } = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');


module.exports = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				style={[styles.keywordBox]}
				onPress={this.props.onPress}
				key={this.props.key}
				underlayColor={'transparent'} >
        <Image
          source={this.props.source}
          style={this.props.imageStyle} >
            <View style={[this.border('red'), styles.overlay, this.props.selected ? {backgroundColor: '#49B64D'} : {backgroundColor:'rgba(0,0,0,0.7)'}]}>
				      <Text style={this.props.textStyle}>{this.props.text}</Text>
            </View>
        </Image>
			</TouchableHighlight>
		);
	},
  border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width/4.8,
    height: window.width/4.8,
    borderRadius: window.width/4.8/2,
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
