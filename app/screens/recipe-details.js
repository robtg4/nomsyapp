//recipe details page
var React = require('react-native');
var { Text, Image, View, StyleSheet } = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries
var NavigationBar = require('react-native-navbar');
//components
var BackButton = require('../components/back-button');

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <NavigationBar
          tintColor={'#55C066'}
          style={{width: window.width}}
          title={{ title: 'Spicy Lamb Albondigas..', }}
          leftButton={
							<BackButton
								onPress={this.goBack} /> } />
      <View style={styles.recipeDetails}>
        <Image
          source={{uri: 'https://yummalert.com/content/uploads/images/BBC%20Food/Spicy_lamb_albondigas_meatballs-b7b149-fvdkv1qn.jpg'}}
          style={[styles.articlePreview]} />
        <View style={styles.body}>
        </View>
      </View>
    </View>
  },
  goBack: function() {
     this.props.navigator.pop();
  },
  border: function(color) {
     return {
       //borderColor: color,
       //borderWidth: 2,
     }
  },
});

var styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 2,
  },
  recipeDetails: {
    flexDirection: 'column',
  },
  container: {
    flex: 1,
  },
  articlePreview: {
    flex: 1,
    height: window.width,
    width: window.width,
    alignSelf:'center',
  },
});
