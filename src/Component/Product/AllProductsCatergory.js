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
import {connect} from 'react-redux';

// Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const catimage = 'http://192.168.200.175:3000/images/Image/category/';

class AllProductCategory extends Component {
  constructor(props) {
    super(props);
  }

  _RenderView = (item, index) => {
    const {imageview, ChlidView, fonsttsyle, Mainview} = styles;
    return (
      <TouchableOpacity style={[Mainview]}>
        <View style={ChlidView}>
          <Image
            source={{uri: catimage + item.CategoryImage}}
            style={imageview}
            resizeMode={'contain'}
          />
          <Text style={fonsttsyle}>{item.Category_name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {CategoryData} = this.props;
    const {container, chlidcontainer} = styles;
    return (
      <SafeAreaView style={container}>
        <View style={chlidcontainer}>
          <ALlHeader
            HeaderText={'All Categories'}
            onPress={() => {
              this.props.navigation.navigate('HomePage');
            }}
          />
          <FlatList
            numColumns={3}
            data={CategoryData}
            renderItem={({item, index}) => this._RenderView(item, index)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapToStateProps = state => {
  const {CategoryData} = state.CategoryReducer;
  return {
    CategoryData,
  };
};

export default connect(
  mapToStateProps,
  {},
)(AllProductCategory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chlidcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ChlidView: {
    backgroundColor: '#fff',
    height: sheigth * 0.15,
    width: swidth * 0.28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonsttsyle: {
    color: 'black',
    fontSize: sheigth * 0.01,
    marginTop: sheigth * 0.01,
    marginBottom: sheigth * 0.03,
  },
  imageview: {
    height: sheigth * 0.1,
    width: swidth * 0.25,
    alignSelf: 'center',
  },
  Mainview: {
    backgroundColor: '#fff',
    height: sheigth * 0.15,
    width: swidth * 0.32,
    elevation: 10,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 1.0,
    marginLeft: swidth * 0.01,
    marginTop: sheigth * 0.01,
    // marginRight: swidth * 0.01,
  },
});
