//home page that connects everything together in app index
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;
//components
ImageButton = require('../components/image-button');
KeywordBox = require('../components/keyword-box');
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

module.exports = React.createClass({
  componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},
  getInitialState: function() {
		return {
			spicy: false,
      sweet: false,
      salty: false,
      sour: false,
      bitter: false,
      fruity: false,
      user: 'null',
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
          <Text style={[styles.instructions, this.border('red')]}>What tastes do you enjoy most?</Text>
          <View style={[styles.options, this.border('red')]}>
            <KeywordBox
              source={require('../img/buttons/spicy.png')}
              text={'Spicy'}
              textStyle={styles.keywordText}
              key={1}
              imageStyle={styles.keywordImage}
              selected={this.state.spicy}
              onPress={() => {this.setState({spicy: !this.state.spicy})}} />
            <KeywordBox
              source={require('../img/buttons/sweet.png')}
              text={'Sweet'}
              textStyle={styles.keywordText}
              key={2}
              imageStyle={styles.keywordImage}
              selected={this.state.sweet}
              onPress={() => {this.setState({sweet: !this.state.sweet})}} />
            <KeywordBox
              source={require('../img/buttons/salty.png')}
              text={'Salty'}
              textStyle={styles.keywordText}
              key={3}
              imageStyle={styles.keywordImage}
              selected={this.state.salty}
              onPress={() => {this.setState({salty: !this.state.salty})}} />
            <KeywordBox
              source={require('../img/buttons/sour.png')}
              text={'Sour'}
              textStyle={styles.keywordText}
              key={4}
              imageStyle={styles.keywordImage}
              selected={this.state.sour}
              onPress={() => {this.setState({sour: !this.state.sour})}} />
            <KeywordBox
              source={require('../img/buttons/bitter.png')}
              text={'Bitter'}
              textStyle={styles.keywordText}
              key={5}
              imageStyle={styles.keywordImage}
              selected={this.state.bitter}
              onPress={() => {this.setState({bitter: !this.state.bitter})}} />
            <KeywordBox
              source={require('../img/buttons/fruity.png')}
              text={'Fruity'}
              imageStyle={styles.keywordImage}
              textStyle={styles.keywordText}
              key={6}
              selected={this.state.fruity}
              onPress={() => {this.setState({fruity: !this.state.fruity})}} />
          </View>
          <View style={{flex: 1, width: window.width}}>
            <ImageButton
                style={[styles.nextBtn, this.border('red')]}
                resizeMode={'contain'}
                onPress={this.onNextPress}
                source={require('../img/next-btn.png')}
                textStyle={styles.nextText}
                text={'get started!'}/>
          </View>
        </View>
    </View>
  },
  onNextPress: function() {
    //array of chose words
    var tastes = [];
    if (this.state.spciy){
      tastes.push('spicy');
    }
    if (this.state.sweet) {
      tastes.push('sweet');
    }
    if  (this.state.salty) {
      tastes.push('salty');
    }
    if  (this.state.sour) {
      tastes.push('sour');
    }
    if  (this.state.bitter) {
      tastes.push('bitter');
    }
    if  (this.state.fruity) {
      tastes.push('fruity');
    }

    var that = this;
    var Tastes = Parse.Object.extend("Tastes");
    var user_words = new Tastes();
      user_words.set("userObjectId", { __type: "Pointer", className: "_User", objectId: that.state.user.id });
      user_words.set("tastes", tastes);

    //check for entry errors
    user_words.save({
      success: function(user_words) {
        console.log("The save was successful.");
        that.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]);
      },
      error: function(user_words, error) {
        console.log(error);
      }
    });
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
