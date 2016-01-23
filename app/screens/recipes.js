//recipe page
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;
//libraries
var NavigationBar = require('react-native-navbar');
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
var RecipeView = require('../components/view-components/recipe-view');

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <RecipeView
        source={{uri: 'https://yummalert.com/content/uploads/images/BBC%20Food/Spicy_lamb_albondigas_meatballs-b7b149-fvdkv1qn.jpg'}}
        text={'Spicy Lamb Albondigas Meatballs'}
        src={{ uri: 'http://img.auctiva.com/imgdata/1/5/5/2/3/3/3/webimg/538725353_o.jpg'}}
        postTime={'2 hours ago'}
        onPress={this.recipeDetails}
        key={1}
        onPressFave={() => {}}
        onPressComments={() => {}}
        upvotes={132}
        username={'Nancy Gilbert'}
        category={'Spciy'}
        categoryPress={() => {}} />
      <RecipeView
        source={{uri: 'http://media3.popsugar-assets.com/files/2014/08/07/245/n/28443503/663aa0a8d80c29b5_10547076_1544017362488960_1678074674_nnt477D.xxxlarge/i/What-great-idea.jpg'}}
        text={'Fruits & Crackers'}
        src={{uri: 'https://s3.amazonaws.com/webassets.ticketmob.com/LS/images/comedians/Jodi_White_color.jpg'}}
        postTime={'30 minutes ago'}
        onPress={this.recipeDetails}
        key={2}
        onPressFave={() => {}}
        onPressComments={() => {}}
        upvotes={13}
        category={'Fruity'}
        username={'Bryana Luc'}
        categoryPress={() => {}} />
      <RecipeView
        source={{uri: 'http://casadekarma.com.au/wp-content/uploads/2015/05/healthy-food-inspiration-instagram-e1432362958184-1024x623.jpg'}}
        text={'Chicken, Rice, & Avocado Salad'}
        src={{uri: 'http://www.melskitchencafe.com/wp-content/uploads/website-profile-pic2.jpg'}}
        postTime={'just now'}
        onPress={this.recipeDetails}
        key={3}
        onPressFave={() => {}}
        onPressComments={() => {}}
        upvotes={85}
        category={'Healthy'}
        username={'Chelsea Scott'}
        categoryPress={() => {}} />
      <RecipeView
        source={{uri: 'http://i.huffpost.com/gen/2631864/images/o-VEGAN-INSTAGRAM-ACCOUNTS-facebook.jpg'}}
        text={'Fruit Yogurt'}
        src={{uri: 'http://img.auctiva.com/imgdata/1/5/5/2/3/3/3/webimg/538725353_o.jpg'}}
        postTime={'2 minutes ago'}
        onPress={this.recipeDetails}
        key={4}
        onPressFave={() => {}}
        onPressComments={() => {}}
        upvotes={100}
        username={'Sarah C'}
        category={'Vegan Desserts'}
        categoryPress={() => {}} />
    </View>
  },
  recipeDetails: function() {
    this.props.navigator.push({name: 'recipedetails'});
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
