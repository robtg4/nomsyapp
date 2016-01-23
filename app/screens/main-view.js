//home page that connects everything together in app index
var React = require('react-native');
var { Text, Image, View, StyleSheet, ScrollView} = React;
//libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');
//components
var TabBar = require('../components/TabBar');
//screens
var Explore = require('./explore');
var Home = require('./home');
var Recipes = require('./recipes');
var Profile = require('./profile');
var RecipePhoto = require('./recipe-photo.js')
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
        <ScrollableTabView
          tabBarPosition={'bottom'}
          initialPage={0}
          renderTabBar={() => <TabBar />}>
          <ScrollView tabLabel="ion|android-home">
            <Home navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView tabLabel="ion|android-list">
            <Recipes navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView tabLabel="ion|android-camera">
            <RecipePhoto navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView tabLabel="ion|search">
            <Explore navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView tabLabel="ion|person-stalker">
            <Profile navigator={this.props.navigator} />
          </ScrollView>
        </ScrollableTabView>
      </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
