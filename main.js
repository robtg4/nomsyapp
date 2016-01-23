
//main navigator architecture of the app
var React = require('react-native');
var { StyleSheet, Text, View, Component, Navigator } = React;
//component pages
var Launch = require('./app/screens/launch');
var Home = require('./app/screens/main-view');
var OnboardingDiets = require('./app/screens/onboarding-diets');
var OnboardingTastes = require('./app/screens/onboarding-tastes');
var RecipeDetails = require('./app/screens/recipe-details');
//libraries
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var ROUTES ={
	launch: Launch,
	home: Home,
	onboardingdiets: OnboardingDiets,
	onboardingtastes: OnboardingTastes,
	recipedetails: RecipeDetails,
};

module.exports = React.createClass({
	componentWillMount: function() {
		Parse.initialize("D8ABr0HCaDtGeCIYeJjd0UkrGNKQD9evz3QuK3t7", "pHq86yleHd97lyY02QRdihMPQcHjwOJnkXYZ41nV");
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
