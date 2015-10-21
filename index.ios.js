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
  Component
} = React;

class videoplayerTest extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0}
  }

  setDuration(value){
    this.setState({
      duration: value.duration
    })
  }
  setTime(value){
    console.log('setTime'+JSON.stringify(value))
    this.setState({
      currentTime: value.currentTime
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Video
          ref='video'
          source={{uri: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"}}
          style={styles.backgroundVideo}
          rate={1}
          volume={1}
          muted={true}
          onLoad={this.setDuration.bind(this)}
          onProgress={this.setTime.bind(this)}
          resizeMode="cover"
          repeat={false}
          key="video1" />

        <SliderIOS
          minimumValue={0}
          maximumValue={this.state.duration}
          style={styles.slider}
          value={this.state.currentTime}
          onValueChange={(value) => {
            this.setState({value: value})
            this.refs.video.seek(value)
      } } />
      </View>
    );
  }
};

var styles = StyleSheet.create({
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

  slider: {
   alignSelf: 'center',
    height: 10,
    width: 300,
    margin: 10,
  },
});

AppRegistry.registerComponent('videoplayerTest', () => videoplayerTest);
