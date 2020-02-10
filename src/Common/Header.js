import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BACKGROUND} from '../Colors/Colors';
Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

const Header = props => {
  const {onPress} = props;
  const {
    container,
    expolrefont,
    expolreview,
    imageview,
    Imagestyle,
    plusfont,
    expolretext,
    notificationview,
    plusimg,
    Headeright,
    flipkarttext
  } = styles;
  return (
    <View style={container}>
      <View style={[expolreview, {alignItems: 'center'}]}>
        <TouchableOpacity onPress={onPress}>
          <Icon name={'menu'} size={swidth * 0.1} color={'#fff'} />
        </TouchableOpacity>
        <View style={imageview}>
          <Text style={flipkarttext}>Flipkart</Text>
          <View style={expolreview}>
            <Text style={expolrefont}>Explore</Text>
            <View style={expolretext}>
              <Text style={[plusfont, {color: 'yellow'}]}>Plus</Text>
              <Image
                source={require('../Assets/Image/plus.png')}
                style={plusimg}
              />
            </View>
          </View>
        </View>
        <View style={Headeright}>
          <TouchableOpacity style={notificationview}>
            <MaterialIcons
              color={iconcolor}
              name={'notifications'}
              size={sheigth * 0.03}
            />
          </TouchableOpacity>
          <TouchableOpacity style={notificationview}>
            <MaterialIcons
              color={iconcolor}
              name={'shopping-cart'}
              size={sheigth * 0.03}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: swidth * 0.16,
    backgroundColor: BACKGROUND,
    paddingLeft: swidth * 0.02,
  },
  expolrefont: {
    marginLeft: swidth * 0.02,
    color: '#fff',
    fontFamily: 'Roboto-MediumItalic',
    marginBottom: sheigth * 0.01,
    fontSize: swidth*0.03
  },
  expolreview: {
    flexDirection: 'row',
    // alignContent: 'center',
  },
  imageview: {
    // backgroundColor: 'red',
    width: swidth * 0.35,
    paddingTop: swidth * 0.01,
  },
  Imagestyle: {
    height: swidth * 0.03,
    width: swidth * 0.15,
    marginLeft: swidth * 0.05,
  },
  plusfont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:swidth*0.03,
    fontFamily: 'Roboto-ThinItalic',
  },
  expolretext: {
    marginLeft: swidth * 0.01,
    flexDirection: 'row',
  },
  plusimg: {
    height: swidth * 0.03,
    width: swidth * 0.03,
    marginTop:sheigth*0.003,
    marginLeft:swidth*0.001
  },
  notificationview: {
    width: swidth * 0.1,
    alignItems: 'center',
  },
  Headeright: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    marginRight: swidth * 0.02,
  },flipkarttext:{
    color:'#fff',
    fontFamily:'Roboto-BoldItalic',
    marginLeft:swidth*0.02,
    fontSize:swidth*0.05
  }
});
