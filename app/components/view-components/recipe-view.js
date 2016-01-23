//preview for each recipe
var React = require('react-native');
var { View, StyleSheet, Text, Image, TouchableHighlight } = React;
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
var ImageButton = require('../image-button');
var KeywordBox = require('../keyword-box');
//libraries
var { Icon } = require('react-native-icons');

module.exports = React.createClass({
  render: function() {
      return (
        <View style={styles.touchCard}>
          <View style={styles.card}>
              <View style={[styles.container, this.border('organge')]}>
                  <View style={[this.border('white'), {flexDirection: 'row'}]}>
                    <ImageButton
                        style={[styles.logoBtn]}
                        resizeMode={'contain'}
                        onPress={this.onHeartPress}
                        source={this.props.src} />
                    <Text style={styles.username}>{this.props.username}</Text>
                  </View>
              </View>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={this.props.onPress}>
                <Image
                  source={this.props.source}
                  style={[styles.articlePreview, this.border('red')]} />
              </TouchableHighlight>
              <View style={[styles.container, this.border('organge')]}>
                  <View style={[styles.header, this.border('blue')]}>
                      <Text style={[styles.previewText]}>{this.props.text}</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'space-around', flex: 1}}>
                        <TouchableHighlight
                          underlayColor={'transparent'}
                          onPress={this.props.onPressFave}>
                          <Icon
                            name='ion|android-favorite-outline'
                            size={30}
                            color='#55C066'
                            style={[styles.arrows, this.border('blue')]} />
                        </TouchableHighlight>
                        <TouchableHighlight
                          underlayColor={'transparent'}
                          onPress={this.props.onPressComments}>
                          <Icon
                            name='ion|chatbubble-working'
                            size={30}
                            color='#55C066'
                            style={[styles.arrows, this.border('blue')]} />
                        </TouchableHighlight>
                      </View>
                  </View>
                  <View style={[styles.footer, this.border('white')]}>
                    <View style={[styles.sourceRow, this.border('blue')]}>
                        <View style={[this.border('white'), {flex: 3}]}>
                          <Text style={[styles.rowText]}>{this.props.postTime}</Text>
                        </View>
                        <View style={[this.border('white'), {flex: 1, flexDirection:'row'}]}>
                          <Icon
                            name='ion|heart'
                            size={20}
                            color='#55C066'
                            style={{width: 20, height: 20}} />
                          <Text style={[styles.rowText]}>{this.props.upvotes} likes</Text>
                        </View>
                    </View>
                  </View>
              </View>
            </View>
        </View>
      );

  },
  onHeartPress: function() {
    //will move this function to a general module
  },
  border: function(color) {
      return {
        //borderColor: color,
        //borderWidth: 2,
      }
   },
});

var styles = StyleSheet.create({
  arrows: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  username: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  more: {
    fontSize: 30,
    fontFamily: 'Avenir Next',
    color: 'white',
    justifyContent: 'space-around',
  },
  thoughtsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  sourceRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: window.width*0.90,
  },
  rowText: {
    textAlign: 'left',
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
    fontFamily: 'Avenir Next',
  },
  detailText: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 5,
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
    alignSelf:'center'
  },
  heartText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'Avenir Next',
  },
  logoBtn: {
    height: window.width/9,
    width: window.width/9,
    borderRadius: window.width/9/2,
    alignSelf:'center',
    margin: 5,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  heartBtn: {
    height: (92/97)*(window.width/13),
    width: window.width/13,
  },
  category: {
    fontFamily: 'Avenir Next',
    fontSize: 10,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: window.height/60,
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: window.height/80,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  articlePreview: {
    flex: 2,
    height: window.width*0.95,
    width:window.width*0.98,
    flexDirection: 'column',
    alignSelf:'center',
  },
  previewText: {
    fontFamily: 'Avenir Next',
    fontSize: 23,
    color: 'black',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 5,
    flex: 3,
  },

});
