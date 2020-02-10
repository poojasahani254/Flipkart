import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import ALlHeader from '../../Common/AllPageHeader';
import {BACKGROUND} from '../../Colors/Colors';

// Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

export default class MyOrdes extends Component {
  constructor(props) {
    super(props);
  }
  _RenderData = item => {
    const {ChlidView, fonsttsyle, statustext, innerview, imageview} = styles;
    return (
      <View style={ChlidView}>
        <View style={innerview}>
          <Text style={fonsttsyle}>Lenovo K8 Plus(Venom Black,32 GB)</Text>
          <Text style={statustext}>Delivered On OCt 31,2018</Text>
        </View>
        <View>
          <Image
            source={require('../../Assets/Image/f1.png')}
            style={imageview}
            resizeMode={'contain'}
          />
        </View>
      </View>
    );
  };
  render() {
    const {container, chlidcontainer} = styles;
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
        title: 'Drones',
        image: require('../../Assets/Image/flipheader.jpg'),
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Lighting',
        image: require('../../Assets/Image/f1.png'),
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Lighting',
        image: require('../../Assets/Image/f1.png'),
      },
    ];
    return (
      <SafeAreaView style={container}>
        <View style={chlidcontainer}>
          <ALlHeader
            HeaderText={'My Orders'}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          />
          <FlatList
            data={DATA}
            renderItem={({item, index}) => this._RenderData(item)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  chlidcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ChlidView: {
    backgroundColor: '#fff',
    height: sheigth * 0.18,
    flexDirection: 'row',
    elevation: 10,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 3.0,
    marginBottom: sheigth * 0.01,
  },
  fonsttsyle: {
    color: 'black',
    fontSize: sheigth * 0.03,
    marginLeft: swidth * 0.04,
    marginTop: sheigth * 0.02,
  },
  statustext: {
    color: 'gray',
    fontSize: sheigth * 0.02,
    marginLeft: swidth * 0.04,
    marginTop: sheigth * 0.02,
  },
  innerview: {
    // backgroundColor:'pink',
    width: swidth * 0.75,
  },
  imageview: {
    height: sheigth * 0.13,
    width: swidth * 0.24,
    marginTop: sheigth * 0.01,
    marginRight: swidth * 0.01,
  },
});
