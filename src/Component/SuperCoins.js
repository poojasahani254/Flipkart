import React, {Component} from 'react';
import Header from '../Common/Header';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
let width = Dimensions.get('window').width;
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Header onPress={() => this.props.navigation.openDrawer()} />
          <Text>SuperCoins</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: width * 0.1,
    backgroundColor: 'red',
    justifyContent: 'center',
    paddingLeft: width * 0.05,
  },
});
