import React, {Component} from 'react';
import ALlHeader from '../../Common/AllPageHeader';
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

export default class ChangePassword extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <ALlHeader
            HeaderText={'Change Password'}
            onPress={() => {
              this.props.navigation.navigate('MyAccount');
            }}
          />
          <Text>Change Password</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
