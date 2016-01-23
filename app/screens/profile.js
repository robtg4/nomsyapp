//profile places page
var React = require('react-native');
var { Text, Image, View, StyleSheet} = React;
//libraries
var NavigationBar = require('react-native-navbar');
var SearchBar = require('react-native-search-bar');
//window size
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <View style={styles.profileCol} >
        <View style={styles.usernameRow}>
          <Text style={styles.usernameText}>@NancyGilbert</Text>
        </View>
        <View style={styles.profileRow} >
          <Image
            source={{uri: 'http://img.auctiva.com/imgdata/1/5/5/2/3/3/3/webimg/538725353_o.jpg'}}
            style={styles.profileImage} />
        </View>
        <View style={styles.profileDetails}>
          <View style={styles.greenRow}>
            <View style={styles.greenDot}>
              <Text style={styles.greenText}>1.2k</Text>
            </View>
            <View style={styles.greenDot}>
              <Text style={styles.greenText}>259</Text>
            </View>
          </View>
          <View style={styles.desc}>
          </View>
        </View>
      </View>
    </View>
  }
});

var styles = StyleSheet.create({
  usernameRow: {
    height: window.height/10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: window.width, 
  },
  usernameText: {
    fontSize: 20,
    color: 'grey',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  greenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2,
  },
  greenDot: {
    width: window.width/7,
    height: window.width/7,
    borderRadius: window.width/7/2,
    backgroundColor: '#55C066',
  },
  greenText: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  profileDetails: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
  },
  profileCol: {
    flex: 1,
  },
  profileImage: {
    width: window.width/2,
    height: window.width/2,
    borderRadius: window.width/2/2,
    alignSelf: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
  }
});
