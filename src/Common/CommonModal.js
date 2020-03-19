import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BACKGROUND} from '../Colors/Colors';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ScrollView} from 'react-navigation';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';
const imgurl = 'http://192.168.0.123:3000/images/';

const CommonModal = props => {
  const {visible, onClose, onFetch} = props;
  const {
    container,
    modal,
    expolrefont,
    expolreview,
    imageview,
    Imagestyle,
    plusfont,
    expolretext,
    notificationview,
    plusimg,
    Headeright,
    flipkarttext,
    headercontainer,
    common,
    MainImageView,
    BottomImageView,
    bottomslideimage,
    imagestyle,
  } = styles;

  const img = onFetch.Product_Image.map((a, index) => {
    return {
      url: imgurl + a,
    };
  });

  const footerimg = onFetch.Product_Image.map((a, index) => {
    return (
      <TouchableOpacity activeOpacity={1} style={bottomslideimage}>
        <Image
          source={{uri: imgurl + a}}
          style={imagestyle}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    );
  });
  return (
    <Modal transparent={true} visible={visible}>
      <SafeAreaView style={container}>
        <View style={headercontainer}>
          <View style={[expolreview, {alignItems: 'center'}]}>
            <TouchableOpacity onPress={onClose}>
              <Icon name={'arrowleft'} size={swidth * 0.05} color={'#fff'} />
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
                  name={'share'}
                  size={sheigth * 0.03}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={container}>
          <View style={[modal]}>
            <View style={[MainImageView]}>
              <ImageViewer
                imageUrls={img}
                renderIndicator={() => {
                  return null;
                }}
                backgroundColor={'White'}
              />
            </View>

            <View style={BottomImageView}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {footerimg}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CommonModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modal: {
    backgroundColor: '#fff',
    // 'rgb(255,255,255)',
    flex: 1,
  },
  headercontainer: {
    height: swidth * 0.15,
    backgroundColor: BACKGROUND,
    paddingLeft: swidth * 0.02,
    // marginTop: sheigth * 0.05,
  },
  expolrefont: {
    marginLeft: swidth * 0.04,
    color: '#fff',
    fontFamily: 'Roboto-MediumItalic',
    marginBottom: sheigth * 0.01,
    fontSize: swidth * 0.02,
  },
  expolreview: {
    flexDirection: 'row',
    // alignContent: 'center',
  },
  imageview: {
    // backgroundColor: 'red',
    width: swidth * 0.35,
    paddingTop: swidth * 0.04,
  },
  Imagestyle: {
    height: swidth * 0.03,
    width: swidth * 0.15,
    marginLeft: swidth * 0.05,
  },
  plusfont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: swidth * 0.02,
    fontFamily: 'Roboto-ThinItalic',
  },
  expolretext: {
    marginLeft: swidth * 0.01,
    flexDirection: 'row',
  },
  plusimg: {
    height: swidth * 0.02,
    width: swidth * 0.02,
    marginLeft: swidth * 0.001,
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
  },
  flipkarttext: {
    color: '#fff',
    fontFamily: 'Roboto-BoldItalic',
    marginLeft: swidth * 0.04,
    fontSize: swidth * 0.04,
  },
  common: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainImageView: {
    backgroundColor: '#fff',
    height: sheigth * 0.7,
  },
  BottomImageView: {
    backgroundColor: '#eeeeee',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomslideimage: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: sheigth * 0.13,
    width: swidth * 0.22,
    margin: swidth * 0.01,
    borderRadius: swidth * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    height: sheigth * 0.1,
    width: swidth * 0.2,
  },
});
