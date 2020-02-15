import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BACKGROUND} from '../Colors/Colors';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

const ALlHeader = props => {
  const {onPress, HeaderText} = props;
  const {
    HeaderView,
    headerleft,
    headertext,
    headerserach,
    headerCart,
    fontlabel,
    Roundview,
  } = styles;
  return (
    <View style={HeaderView}>
      <View style={headerleft}>
        <TouchableOpacity onPress={onPress}>
          <MaterialIcons
            name={'arrow-back'}
            size={swidth * 0.07}
            color={iconcolor}
          />
        </TouchableOpacity>
      </View>
      <View style={headertext}>
        <Text style={fontlabel}>{HeaderText}</Text>
      </View>
      <TouchableOpacity style={headerserach}>
        <Icon name={'search'} size={sheigth * 0.03} color={iconcolor} />
      </TouchableOpacity>
      <TouchableOpacity style={headerCart}>
        <MaterialIcons
          name={'shopping-cart'}
          size={sheigth * 0.04}
          color={iconcolor}
        />
      </TouchableOpacity>
      <View style={Roundview}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>3</Text>
      </View>
    </View>
  );
};
export default ALlHeader;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  HeaderView: {
    height: sheigth * 0.07,
    backgroundColor: BACKGROUND,
    flexDirection: 'row',
  },
  headerleft: {
    width: swidth * 0.15,
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    width: swidth * 0.58,
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  headerserach: {
    width: swidth * 0.12,
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCart: {
    width: swidth * 0.1,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontlabel: {
    fontSize: sheigth * 0.03,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  Roundview: {
    backgroundColor: 'red',
    height: swidth * 0.05,
    width: swidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: swidth * 0.1,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    marginTop: sheigth * 0.001,
    marginRight: swidth * 0.03,
  },
});
