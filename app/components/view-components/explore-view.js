//card view for each restaurant in explore tab
var React = require('react-native');
var {Text, View, StyleSheet, Image, TouchableHighlight} = React;
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//libraries
var { Icon } = require('react-native-icons');
//components
var ImageButton = require('../image-button');
var CategoryBox = require('../category-box');
var UpVote = require('../upvote');
var DownVote = require('../downvote');


module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.touchCard}>
        <View style={styles.card}>
          <Image
            source={this.props.source}
            style={styles.restaurantImage}
            resizeMode={'contain'} />
          <View style={styles.restaurantDetails}>
            <Text style={styles.restaurantTitle}>{this.props.title}</Text>
            <Text style={styles.restaurantAddress}>{this.props.address}</Text>
            <View style={styles.keywordSpan}>
              {this.getKeywords(this.props.diets)}
            </View>
            <View style={styles.restaurantDietRow}>
              <View style={styles.votes}>
                <UpVote
                  onPress={this.props.upVotePress}
                  voteCount={this.props.voteCountUp} />
                <DownVote
                  onPress={this.props.downVotePress}
                  voteCount={this.props.voteCountDown} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  },
  getKeywords: function(diets) {
    var that = this;
    return diets.map(function(diet, i) {

			return <CategoryBox
        onPress={that.props.dietPress}
        style={{marginLeft: 5, marginRight: 5}}
        key={i}
        length={diets.length}
        boxText={diets[i]} />
		});
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 2,
    }
  },
});

var styles = StyleSheet.create({
  restaurantDietRow: {
    flexDirection: 'row',
  },
  restaurantImage: {
    width: window.width/2,
    height: window.width/2,
  },
  restaurantAddress: {
    fontSize: 10,
    fontFamily: 'Avenir Next',
    textAlign: 'left',
    color: 'black',
  },
  votes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center', 
  },
  keywordSpan: {
    flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection:'row',
    flex: 2,
    paddingTop: 5,
  },
  restaurantTitle: {
    fontSize: 13,
    fontFamily: 'Avenir Next',
    textAlign: 'left',
    color: 'black',
  },
  restaurantText: {
    fontSize: 12,
    fontFamily: 'Avenir Next',
    textAlign: 'left',
  },
  restaurantDiv: {
    flex: 0.5,
    width: window.width/2.3,
    height:window.width/2.3,
  },
  restaurantDietRow: {
    paddingLeft: 5,
  },
  restaurantDetails: {
    flex: 0.5,
    width: window.width/2.3,
    height:window.width/2.3,
    flexDirection: 'column',
    padding: 5,
  },
  touchCard: {
    margin: 3,
    width: window.width,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignSelf:'center',
  },
  card: {
    flex: 1,
    width: window.width*0.98,
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
  },
});
