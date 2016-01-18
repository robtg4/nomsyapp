//launch page of app
var React = require('react-native');
var {View, Text, StyleSheet, Image, TextInput} = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
ImageButton = require('../components/image-button');


module.exports = React.createClass({
  getInitialState: function() {
		return {
			username: '',
			password: '',
			errorMessage: '',
			loadingCurrentUser: true,
		};
	},
  render: function() {
    return (
      <Image
        style={styles.bg}
        source={require('../img/launch-bg2.png')} >
        <View style={styles.container}>
          <View style={[styles.logoTop, this.border('red')]}>
            <Image
              resizeMode={'contain'}
              source={require('../img/launch-logo.png')}
              style={[styles.logo]} />
          </View>
          <View style={[styles.loginBtns, this.border('blue')]}>
            <ImageButton
                style={[styles.loginBtn]}
                resizeMode={'contain'}
                onPress={() => {}}
                source={require('../img/facebook-btn.png')}
                textStyle={styles.loginText}
                text={'connect with facebook'}/>
            <ImageButton
                style={[styles.loginBtn]}
                resizeMode={'contain'}
                onPress={() => {}}
                source={require('../img/gmail-btn.png')}
                textStyle={styles.loginText}
                text={'connect with google'}/>
            <Text style={{fontFamily: 'Avenir Next', color: '5d5d5d', fontSize: 15}}>or</Text>
          </View>
          <View style={[styles.loginInput, this.border('orange')]}>
            <TextInput
              placeholder={'email address'}
              placeholderTextColor={'#5d5d5d'}
							style={styles.input}
							value={this.state.username}
							onChangeText={(text) => this.setState({username: text})} />
            <TextInput
              placeholder={'password'}
              placeholderTextColor={'#5d5d5d'}
							style={styles.input}
							value={this.state.password}
							onChangeText={(text) => this.setState({password: text})} />
            <ImageButton
                style={[styles.loginBtn, {marginTop: 20}]}
                resizeMode={'contain'}
                onPress={() => {}}
                source={require('../img/sign-in-btn.png')}
                textStyle={styles.signinText}
                text={'connect with email'}/>
          </View>
        </View>
      </Image>
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
  input: {
    color: '#5d5d5d',
		padding: 4, //gives us offset to border
		height: window.height/18,
		backgroundColor: 'rgba(255,255,255, 0.8)',
		borderColor: 'rgba(255,255,255, 0.8)',
    fontFamily: 'Avenir Next',
		borderRadius: 5, //round input box
		margin: 2,
		width: window.width/1.5,
		alignSelf: 'center', //center yourself on form when you have fixed widths
	},
  loginInput: {
    flex: 2,
    width: window.width,
    alignItems: 'center'
  },
  signinText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Avenir Next',
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Avenir Next',
    marginLeft: window.width/20,
  },
  loginBtn: {
    width: window.width/1.6,
    height:(156/739)*window.width/1.6,
    margin: 2,
    justifyContent: 'center',
  },
  logoTop: {
    flex: 1.5,
    alignItems: 'center',
    width: window.width,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  loginBtns: {
    flex: 1,
    width: window.width,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: (window.width/1.6)*0.30,
    justifyContent: 'flex-end',
    width: window.width/1.6,
    height: (481/816)*window.width/1.6,
    alignSelf: 'center',
  },
  bg: {
    width: window.width,
    height: window.height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
