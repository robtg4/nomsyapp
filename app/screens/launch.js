//launch page of app
var React = require('react-native');
var {View, Text, StyleSheet, Image, TextInput, TouchableHighlight } = React;
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
ImageButton = require('../components/image-button');
//libraries
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Button = require('react-native-button');
var Modal = require('react-native-modalbox');


module.exports = React.createClass({
  getInitialState: function() {
		return {
			username: '',
			password: '',
			errorMessage: '',
			loadingCurrentUser: true,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      email: '',
      passwordConfirmation: '',
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
              secureTextEntry={true}
							value={this.state.password}
							onChangeText={(text) => this.setState({password: text})} />
            <ImageButton
                style={[styles.loginBtn, {marginTop: 20}]}
                resizeMode={'contain'}
                onPress={this.onSignInPress}
                source={require('../img/sign-in-btn.png')}
                textStyle={styles.signinText}
                text={'connect with email'}/>
          </View>
          <TouchableHighlight onPress={this.openModal1} underlayColor={'transparent'} >
            <Text style={{fontFamily: 'Avenir Next', color: '5d5d5d', fontSize: 15, marginBottom: 10}}>Create an account?</Text>
          </TouchableHighlight>
          <Modal
            backdropContent={  <Image style={styles.bg} source={require('../img/create-bg.png')} />}
            backdropOpacity={0.5}
            style={[styles.modal, styles.modal1]}
            ref={"modal1"}
            swipeToClose={this.state.swipeToClose}>
            <ImageButton
                style={[styles.xBtn, this.border('red')]}
                resizeMode={'contain'}
                onPress={this.onExitPress}
                source={require('../img/x-btn.png')}/>
            <View>
              <Image
                resizeMode={'contain'}
                source={require('../img/launch-logo.png')}
                style={[styles.logo]} />
            </View>
            <View style={[styles.createAccount, this.border('blue')]}>
              <TextInput
                placeholder={'username'}
                placeholderTextColor={'white'}
                style={styles.inputModal}
                value={this.state.username}
                onChangeText={(text) => this.setState({email: text})} />
              <TextInput
                placeholder={'email address'}
                placeholderTextColor={'white'}
                style={styles.inputModal}
                keyboardType={'email-address'}
                value={this.state.email}
                onChangeText={(text) => this.setState({username: text})} />
              <TextInput
                placeholder={'password'}
                placeholderTextColor={'white'}
                style={styles.inputModal}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})} />
              <TextInput
                placeholder={'confrim password'}
                placeholderTextColor={'white'}
  							style={styles.inputModal}
                secureTextEntry={true}
  							value={this.state.passwordConfirmation}
  							onChangeText={(text) => this.setState({password: text})} />
              <ImageButton
                  style={[styles.loginBtn, {marginTop: 20}]}
                  resizeMode={'contain'}
                  onPress={this.onSignUpPress}
                  source={require('../img/sign-in-btn.png')}
                  textStyle={styles.signinText}
                  text={'get started!'}/>
            </View>
          </Modal>
        </View>
      </Image>
    );
  },
  onSignUpPress: function() {
    if (this.state.password === this.state.passwordConfirmation && this.state.username != null && this.state.email != null)
		{
			var user = new Parse.User();
				user.set("username", this.state.username);
				user.set("password", this.state.password);
        user.set("email", this.state.email);

				user.signUp(null, {
				  //navigate to new component (.immediatelyResetRouteStack)
				  //when doing so and we pass new views of app (routes)
				  success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'onboarding'}]); },
				  error: (user, error) => { this.setState({ errorMessage: error.message }); }
			});
		} else {
			this.setState({ errorMessage: "Your passwords are not the same!"});
		}
  },
  onExitPress: function() {
  this.refs.modal1.close();
  },
  onSignInPress: function() {
    Parse.User.logIn(this.state.username, this.state.password, {
			  success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]); },
			  error: (data, error) => { this.setState({ errorMessage: error.message }); }
		});
  },
  openModal1: function(id) {
    this.refs.modal1.open();
  },
  toggleSwipeToClose: function() {
    this.setState({swipeToClose: !this.state.swipeToClose});
  },
  border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  createAccount: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
    backgroundColor: 'transparent',
  },
  xBtn: {
    flex: 0.3,
    height:40,
    width: 40,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: window.width*0.80,
    backgroundColor: 'transparent',
  },
  text: {
    color: "black",
    fontSize: 22
  },
  modal: {
    height: window.height*0.95,
    width: window.width*0.95,
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  inputModal: {
    color: 'white',
    padding: 4, //gives us offset to border
    height: window.height/18,
    fontFamily: 'Avenir Next',
    borderWidth: 1,
    borderColor: '#55C066',
    backgroundColor: '#55C066',
    borderRadius: 5, //round input box
    margin: 2,
    width: window.width/1.5,
    alignSelf: 'center', //center yourself on form when you have fixed widths
  },
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
    marginTop: (window.width/1.6)*0.20,
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
