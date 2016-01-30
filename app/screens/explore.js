//explore places page
var React = require('react-native');
var { Text, Image, View, StyleSheet, ScrollView, ListView} = React;
//libraries
var NavigationBar = require('react-native-navbar');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
var ExploreView = require('../components/view-components/explore-view');
var SampleData = require('../stores/sample-data');

module.exports = React.createClass({
  componentDidMount: function() {
    this.fetchData();
  },
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaded: false,
    };
  },
  render: function() {
    return <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderScrollComponent={this._renderScroll}
          renderRow={this._renderRow}>
        </ListView>
      </View>
  },
  fetchData: function() {
    this.setState({
       dataSource: this.state.dataSource.cloneWithRows(SampleData.data),
       loaded: true,
    });
  },
  _renderScroll: function() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  },
  _renderRow: function(object) {
    return (
      <ExploreView
        source={{uri: object.url }}
        title={object.title}
        cost={object.cost}
        address={object.address}
        dietPress={() => {return null}}
        diets={object.diets}
        upVotePress={() => {return null}}
        voteCountUp={object.voteCountUp}
        downVotePress={() => {return null}}
        voteCountDown={object.voteCountDown} />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
    backgroundColor: '#F0F0F0',
  }
});
