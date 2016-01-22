//home page that connects everything together in app index
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;
//components
ImageButton = require('../components/image-button');
KeywordBox = require('../components/keyword-box');
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  getInitialState: function() {
		return {
			health: false,
      nutfree: false,
      vegan: false,
      vegetarian: false,
      paleo: false,
      dairyfree: false,
      glutenfree: false,
		};
	},
  render: function() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode={'contain'}
          style={styles.onboardingImage}
          source={require('../img/onboarding-bg.png')}>
        </Image>
      </View>
      <View style={styles.footer}>
        <Text style={styles.instructions}>Help us get to know your dietary restrictions.</Text>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.options}>
            <KeywordBox
              source={require('../img/buttons/dairy-free.png')}
              text={'Dairy Free'}
              textStyle={styles.keywordText}
              key={1}
              imageStyle={styles.keywordImage}
              selected={this.state.dairyfree}
              onPress={() => {setState({dairyfree: !this.state.dairyfree})}} />
            <KeywordBox
              source={require('../img/buttons/nut-free.png')}
              text={'Nut Free'}
              textStyle={styles.keywordText}
              key={2}
              imageStyle={styles.keywordImage}
              selected={this.state.nutfree}
              onPress={() => {setState({nutfree: !this.state.nutfree})}} />
            <KeywordBox
              source={require('../img/buttons/vegetarian.png')}
              text={'Veggie'}
              textStyle={styles.keywordText}
              key={3}
              imageStyle={styles.keywordImage}
              selected={this.state.vegetarian}
              onPress={() => {setState({vegetarian: !this.state.vegetarian})}} />
            <KeywordBox
              source={require('../img/buttons/vegan.png')}
              text={'Vegan'}
              textStyle={styles.keywordText}
              key={4}
              imageStyle={styles.keywordImage}
              selected={this.state.vegan}
              onPress={() => {setState({vegan: !this.state.vegan})}} />
            <KeywordBox
              source={require('../img/buttons/paleo.png')}
              text={'Paleo'}
              textStyle={styles.keywordText}
              key={5}
              imageStyle={styles.keywordImage}
              selected={this.state.paleo}
              onPress={() => {setState({paleo: !this.state.paleo})}} />
            <KeywordBox
              source={require('../img/buttons/health.png')}
              text={'Health'}
              imageStyle={styles.keywordImage}
              textStyle={styles.keywordText}
              key={6}
              selected={this.state.health}
              onPress={() => {setState({health: !this.state.health})}} />
            <KeywordBox
              source={require('../img/buttons/glutenfree.png')}
              text={'Gluten Free'}
              imageStyle={styles.keywordImage}
              textStyle={styles.keywordText}
              key={7}
              selected={this.state.glutenfree}
              onPress={() => {setState({glutenfree: !this.state.glutenfree})}} />
          </View>
        </View>
      </View>
    </View>
  }
});

var styles = StyleSheet.create({
  keywordImage: {
    width: window.width/5,
    height: window.width/5,
    borderRadius: window.width/5/2,
  },
  keywordText: {
    fontFamily: 'Avenir Next',
    fontWeight:'400',
    color:'white',
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 10,
    color: 'white',
  },
  logo: {
    width: window.width/3.5,
    height: window.width/3.5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  onboardingImage: {
    flex: 1,
  },
  options: {
    flexWrap: 'wrap',
		alignItems: 'center',
		flexDirection:'row',
    justifyContent: 'center',
    width: window.width,
    flex: 1,
  },
  instructions: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: '5D5D5D',
    marginLeft: window.width/11,
    marginRight: window.width/11,
    marginTop: window.height/40,
    marginBottom: window.height/40,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
