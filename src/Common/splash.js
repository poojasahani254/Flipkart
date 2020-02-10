import React, {Component} from 'react';
import {View, Image, AsyncStorage, Text} from 'react-native';
let a;
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: true,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>fgfdgfdg</Text>
        {/*<Image*/}
        {/*  source={require('../Assets/Image/flipkart.png')}*/}
        {/*  style={{height: '100%', width: '100%'}}*/}
        {/*  resizeMode={'cover'}*/}
        {/*/>*/}
      </View>
    );
  }
}
