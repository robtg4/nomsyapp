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
          <Text style={[styles.instructions, this.border('red')]}>Help us get to know your dietary restrictions.</Text>
          <View style={[styles.options, this.border('red')]}>
            <KeywordBox
              source={require('../img/buttons/dairy-free.png')}
              text={'Dairy Free'}
              textStyle={styles.keywordText}
              key={1}
              imageStyle={styles.keywordImage}
              selected={this.state.dairyfree}
              onPress={() => {this.setState({dairyfree: !this.state.dairyfree})}} />
            <KeywordBox
              source={require('../img/buttons/nut-free.png')}
              text={'Nut Free'}
              textStyle={styles.keywordText}
              key={2}
              imageStyle={styles.keywordImage}
              selected={this.state.nutfree}
              onPress={() => {this.setState({nutfree: !this.state.nutfree})}} />
            <KeywordBox
              source={require('../img/buttons/vegetarian.png')}
              text={'Veggie'}
              textStyle={styles.keywordText}
              key={3}
              imageStyle={styles.keywordImage}
              selected={this.state.vegetarian}
              onPress={() => {this.setState({vegetarian: !this.state.vegetarian})}} />
            <KeywordBox
              source={require('../img/buttons/vegan.png')}
              text={'Vegan'}
              textStyle={styles.keywordText}
              key={4}
              imageStyle={styles.keywordImage}
              selected={this.state.vegan}
              onPress={() => {this.setState({vegan: !this.state.vegan})}} />
            <KeywordBox
              source={require('../img/buttons/paleo.png')}
              text={'Paleo'}
              textStyle={styles.keywordText}
              key={5}
              imageStyle={styles.keywordImage}
              selected={this.state.paleo}
              onPress={() => {this.setState({paleo: !this.state.paleo})}} />
            <KeywordBox
              source={require('../img/buttons/health.png')}
              text={'Health'}
              imageStyle={styles.keywordImage}
              textStyle={styles.keywordText}
              key={6}
              selected={this.state.health}
              onPress={() => {this.setState({health: !this.state.health})}} />
            <KeywordBox
              source={require('../img/buttons/glutenfree.png')}
              text={'Gluten Free'}
              imageStyle={styles.keywordImage}
              textStyle={styles.keywordText}
              key={7}
              selected={this.state.glutenfree}
              onPress={() => {this.setState({glutenfree: !this.state.glutenfree})}} />
          </View>
          <View style={{flex: 1, width: window.width}}>
            <ImageButton
                style={[styles.nextBtn, this.border('red')]}
                resizeMode={'contain'}
                onPress={this.onNextPress}
                source={require('../img/next-btn.png')}
                textStyle={styles.nextText}
                text={'next'}/>
          </View>
        </View>
    </View>
  },
  onNextPress: function() {
    this.props.navigator.push({name: 'onboardingtastes'});
  },
  border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  nextText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir Next',
    alignSelf: 'center',
  },
  nextBtn: {
    width: window.width/1.6,
    height:(156/739)*window.width/1.6,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  keywordImage: {
    width: window.width/5,
    height: window.width/5,
    borderRadius: window.width/5/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keywordText: {
    fontFamily: 'Avenir Next',
    fontWeight:'400',
    color:'white',
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: 5,
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
    flex: 1.7,
  },
  instructions: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    color: '5D5D5D',
    marginLeft: window.width/11,
    marginRight: window.width/11,
    marginTop: window.height/40,
    flex: 0.5,
  },
  header: {
    flex: 0.4,
  },
  footer: {
    flex: 0.6,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
