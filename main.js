
//main navigator architecture of the app
var React = require('react-native');
var { StyleSheet, Text, View, Component, Navigator } = React;
//component pages
var Launch = require('./app/screens/launch');
var Home = require('./app/screens/home');
var Onboarding = require('./app/screens/onboarding');
//libraries
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var ROUTES ={
	launch: Launch,
	home: Home,
	onboarding: Onboarding,
};

module.exports = React.createClass({
	componentWillMount: function() {
		Parse.initialize("LdlH7zpRKczs2bBQRbpYGzJSLemRuW3d8q6A74fP", "sXxhrzBWlRuu6ykYmYj8eKZmpxbAEgF0CCFJLkTG");
	},
	renderScene: function(route, navigator) {
		//when navigator is initially shown it has to render initial route
		//render a component and return it, whatever we return is placed on stack
		//add navigator property into this component for all app access
		var Component = ROUTES[route.name]; //ROUTE['signin'] => Signin
		return <Component route={route} navigator={navigator} {...route.passProps}/>;
	},
	transition: function(route) {
    	return ROUTES[route.name].transition;
  	},
	render: function() {
		return (
			<Navigator
				style={styles.container}
				initialRoute={{name: 'launch'}}
				renderScene={this.renderScene}
				configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }} />
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
