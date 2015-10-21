/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Video = require('react-native-video');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SliderIOS,
  Component,
  ActivityIndicatorIOS
} = React;

class videoplayerTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isLoading: true,
      rate: 0.5
    };
  }

  _seekTo(value){
    console.log(value+"ddd")
    this.setState({value: value});
    this.refs.video.seek(value);
  }

  _onLoad(value){
    this.setState({
      duration: value.duration,
      isLoading: false,
    });
  }
  _onProgress(value){
 console.log('setTime'+JSON.stringify(value))
    this.setState({
      currentTime: value.currentTime
    });
  }

  _replay(){
    this.setState({
      currentTime: 0
    });
  }


  _onEnd(){

  }

  _onVideoError(){
    console.log('_onError')
  }
  render () {

    var activityIndicatorIOS = this.state.isLoading ? <ActivityIndicatorIOS size="large" style={styles.activityIndicatorIOS} /> : false;
    return (
      <View style={styles.container}>

        <Video
          style={styles.backgroundVideo}

          ref='video'
          source={{uri: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"}}
          style={styles.backgroundVideo}
          rate={this.state.rate}
          volume={1}
          muted={false}
          onLoad={this._onLoad.bind(this)}
          onProgress={this._onProgress.bind(this)}
          onEnd={this._onEnd.bind(this)}
          onError={this._onVideoError.bind(this)}
          resizeMode="cover"
          repeat={false}
          key="video1" />
        {activityIndicatorIOS}
        <Text style={styles.elapsedTime}>
          {this.state.currentTime}
        </Text>
        <SliderIOS
          minimumValue={0}
          maximumValue={this.state.duration}
          style={styles.slider}
          value={this.state.currentTime}
          onValueChange={this._seekTo.bind(this)} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  activityIndicatorIOS: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  //  alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  elapsedTime: {
    alignSelf: 'flex-start',
  },
  slider: {
   alignSelf: 'center',
    height: 10,
    width: 300,
    margin: 10,
  },
});

AppRegistry.registerComponent('videoplayerTest', () => videoplayerTest);
