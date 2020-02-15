import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BACKGROUND} from '../Colors/Colors';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

const CommonModal = props => {
  const {visible} = props;
  const {container, modal} = styles;
  return (
    <Modal animationType={'fade'} transparent={true} visible={visible}>
      <View style={container}>
        <View style={modal}>
          <Text>Hello Modal Open</Text>
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: (swidth * 0.04) / 2,
    width: swidth * 0.92,
  },
});
