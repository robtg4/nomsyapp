//explore places page
var React = require('react-native');
var { Text, Image, View, StyleSheet, ScrollView} = React;
//libraries
var NavigationBar = require('react-native-navbar');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
var ExploreView = require('../components/view-components/explore-view');

module.exports = React.createClass({
  render: function() {
    return <ScrollView
        showsVerticalScrollIndicator={false}
        centerContent={true}
        contentContainerStyle={styles.container}>
        <ExploreView
          source={{uri: 'http://www.theurbanlist.com/content/article/wysiwyg/who-to-follow-on-instagram-foodies-mynewroots-Screen%20Shot%202014-06-19%20at%202.33.17%20PM-550x551.png'}}
          title={'AA Vegan Soul'}
          address={'550 South Main, Ann Arbor MI 48104'}
          diets={['Vegan', 'Gluten Free', 'Veggie']}
          dietPress={() => {return null}}
          upVotePress={() => {return null}}
          voteCountUp={100}
          downVotePress={() => {return null}}
          voteCountDown={3}/>
        <ExploreView
          source={{uri: 'http://cdn.phillymag.com/wp-content/uploads/2014/04/donuts.png'}}
          title={'Gluten Free Bakery Express'}
          dietPress={() => {return null}}
          address={'323 Packard St, Ann Arbor MI 48104'}
          diets={['Gluten Free']}
          upVotePress={() => {return null}}
          voteCountUp={2}
          downVotePress={() => {return null}}
          voteCountDown={0} />
        <ExploreView
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/84/0f/51/840f51e8c608fdbcbe9b8fd148b85387.jpg'}}
          title={'Fogo de Chao'}
          address={'1313 South State St, Ann Arbor MI 48104'}
          dietPress={() => {return null}}
          diets={['Paleo']}
          upVotePress={() => {return null}}
          voteCountUp={58}
          downVotePress={() => {return null}}
          voteCountDown={2} />
        <ExploreView
          source={{uri: 'http://www.theurbanlist.com/content/article/wysiwyg/who-to-follow-on-instagram-foodies-mynewroots-Screen%20Shot%202014-06-19%20at%202.33.17%20PM-550x551.png'}}
          title={'AA Vegan Soul'}
          address={'550 South Main, Ann Arbor MI 48104'}
          diets={['Vegan']}
          dietPress={() => {return null}}
          upVotePress={() => {return null}}
          voteCountUp={100}
          downVotePress={() => {return null}}
          voteCountDown={3} />
        <ExploreView
          source={{uri: 'http://cdn.phillymag.com/wp-content/uploads/2014/04/donuts.png'}}
          title={'Gluten Free Bakery Express'}
          dietPress={() => {return null}}
          address={'323 Packard St, Ann Arbor MI 48104'}
          diets={['Gluten Free']}
          upVotePress={() => {return null}}
          voteCountUp={2}
          downVotePress={() => {return null}}
          voteCountDown={0} />
        <ExploreView
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/84/0f/51/840f51e8c608fdbcbe9b8fd148b85387.jpg'}}
          title={'Fogo de Chao'}
          address={'1313 South State St, Ann Arbor MI 48104'}
          dietPress={() => {return null}}
          diets={['Paleo']}
          upVotePress={() => {return null}}
          voteCountUp={58}
          downVotePress={() => {return null}}
          voteCountDown={2} />
        <ExploreView
          source={{uri: 'http://www.theurbanlist.com/content/article/wysiwyg/who-to-follow-on-instagram-foodies-mynewroots-Screen%20Shot%202014-06-19%20at%202.33.17%20PM-550x551.png'}}
          title={'AA Vegan Soul'}
          address={'550 South Main, Ann Arbor MI 48104'}
          diets={['Vegan', 'Dairy Free']}
          dietPress={() => {return null}}
          upVotePress={() => {return null}}
          voteCountUp={100}
          downVotePress={() => {return null}}
          voteCountDown={3} />
        <ExploreView
          source={{uri: 'http://cdn.phillymag.com/wp-content/uploads/2014/04/donuts.png'}}
          title={'Gluten Free Bakery Express'}
          dietPress={() => {return null}}
          address={'323 Packard St, Ann Arbor MI 48104'}
          diets={['Gluten Free', 'Vegan']}
          upVotePress={() => {return null}}
          voteCountUp={2}
          downVotePress={() => {return null}}
          voteCountDown={0} />
        <ExploreView
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/84/0f/51/840f51e8c608fdbcbe9b8fd148b85387.jpg'}}
          title={'Fogo de Chao'}
          address={'1313 South State St, Ann Arbor MI 48104'}
          dietPress={() => {return null}}
          diets={['Paleo']}
          upVotePress={() => {return null}}
          voteCountUp={58}
          downVotePress={() => {return null}}
          voteCountDown={2} />
      </ScrollView>
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
  }
});
