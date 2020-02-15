import React, {Component} from 'react';
import Header from '../../Common/Header';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Animated,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from 'react-native-splash-screen';
import Banner from '../../Common/MovingBanner';
import {BACKGROUND} from '../../Colors/Colors';
import {connect} from 'react-redux';
import {GETCATEGORYData} from '../../Action/CategoryAction';
Icon.loadFont();

let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';
const catimage = 'http://192.168.200.175:3000/images/Image/category/';

class App extends Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
  }

  componentDidMount(): void {
    SplashScreen.hide();
    this.props
      .GETCATEGORYData()
      .then(response => {
        // console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
  _RenderCatergories = ({item, index}) => {
    const {
      allcategoriesview,
      allview,
      allroundview,
      alltext,
      textview,
      flexdir,
      marginlist,
    } = styles;
    return (
      <View style={flexdir}>
        {index === 0 ? this._RenderAllCategoriesView() : <></>}
        <TouchableOpacity
          style={[allcategoriesview, marginlist]}
          onPress={() => {
            alert(item.Category_name);
            if (item.Category_name == 'Electronics') {
              this.props.navigation.navigate('SubCategory');
            }
          }}>
          <View style={allroundview}>
            <Image
              source={{uri: catimage + item.CategoryImage}}
              style={allview}
              resizeMode={'cover'}
            />
            <View style={[textview]}>
              <Text style={alltext}>{item.Category_name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _RenderAllCategoriesView = () => {
    const {
      Allroundview,
      allcategoriesview,
      allroundview,
      alltext,
      textview,
      allview,
      marginlist,
    } = styles;
    return (
      <TouchableOpacity
        style={[allcategoriesview, marginlist]}
        onPress={() => {
          this.props.navigation.navigate('AllProductCategory');
        }}>
        <View style={allroundview}>
          <Image
            source={require('../../Assets/Category/allmenu.png')}
            style={[allview, {tintColor: BACKGROUND}]}
            resizeMode={'contain'}
          />
          <View style={[textview]}>
            <Text style={alltext}>All Categories</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {CategoryData} = this.props;
    // console.log('cat data -----', CategoryData);

    const {
      container,
      chlidcontainer,
      serachviewheader,
      searchview1,
      icon,
      searchbox,
      bannerview,
      allview,
      offview,
      topitemview,
      topimageview,
      topimage,
      topttitle,
      texttop,
      listmainview,
      backroundimage,
      viewallbtntext,
      viewalltext,
      viewtitletext,
      subtitlefonttext,
      chlidlistview,
      titletext,
      viewallview,
      containerview,
      containlistview,
      containitemview,
      containmainview,
      containetexttitle,
      containitetextview,
      imageviewocontainitem,
      containtext,
      aligncentertext,
      brandview,
      brandtext,
      brandviewtext,
      featurebrandimageview,
      featurebrandimag,
      flatlistview,
    } = styles;

    const changeOpcity1 = this.opacity.interpolate({
      inputRange: [0, sheigth * 0.1],
      outputRange: [sheigth * 0.07, 0],
      extrapolate: 'clamp',
    });

    return (
      <SafeAreaView style={container}>
        <Animated.View style={{height: changeOpcity1}}>
          <Header onPress={() => this.props.navigation.openDrawer()} />
        </Animated.View>
        <View style={[serachviewheader]}>
          <View style={searchview1}>
            <View style={icon}>
              <Icon name={'search1'} size={sheigth * 0.02} color={'gray'} />
            </View>
            <TextInput
              style={searchbox}
              placeholder={'Search for Products,Brands and More'}
              placeholderTextColor={'gray'}
            />
          </View>
        </View>
        <View style={flatlistview}>
          <ScrollView
            scrollEventThrottle={1}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: this.opacity}}},
            ])}>
            {CategoryData != null && CategoryData.length != 0 ? (
              <FlatList
                horizontal={true}
                data={CategoryData}
                showsHorizontalScrollIndicator={false}
                renderItem={this._RenderCatergories}
              />
            ) : (
              <View />
            )}

            <View style={bannerview}>
              <Banner />
            </View>
            <View style={offview}>
              <TouchableOpacity style={topitemview}>
                <View style={topimage}>
                  <Text style={topttitle}>From {'\u20B9'} 9999</Text>
                  <Text style={texttop}>Saving Junction </Text>
                </View>
                <View style={[topimageview]}>
                  <Image
                    source={require('../../Assets/Image/category/mobile.jpeg')}
                    style={{height: sheigth * 0.1, width: swidth * 0.3}}
                    resizeMode={'contain'}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={topitemview}>
                <View style={topimage}>
                  <Text style={topttitle}>From {'\u20B9'} 999</Text>
                  <Text style={texttop}>Saving Junction </Text>
                </View>
                <View style={[topimageview]}>
                  <Image
                    source={require('../../Assets/Image/category/mobile.jpeg')}
                    style={{height: sheigth * 0.1, width: swidth * 0.3}}
                    resizeMode={'contain'}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={topitemview}>
                <View style={topimage}>
                  <Text style={topttitle}>From {'\u20B9'} 9999 </Text>
                  <Text style={texttop}>Saving Junction </Text>
                </View>
                <View style={[topimageview]}>
                  <Image
                    source={require('../../Assets/Image/category/mobile.jpeg')}
                    style={{height: sheigth * 0.1, width: swidth * 0.3}}
                    resizeMode={'contain'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={listmainview}>
              <View style={backroundimage}>
                <View style={chlidlistview}>
                  <View style={titletext}>
                    <Text style={viewtitletext}>Top offers</Text>
                    <Text style={subtitlefonttext}>On Footwear</Text>
                  </View>
                  <TouchableOpacity style={viewallview}>
                    <View style={viewallbtntext}>
                      <Text style={viewalltext}>View All</Text>
                      <MaterialIcons
                        name={'keyboard-arrow-right'}
                        color={iconcolor}
                        size={swidth * 0.05}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={containerview}>
                  <View style={containlistview}>
                    <View style={containmainview}>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={containmainview}>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={brandview}>
              <View style={brandviewtext}>
                <Text style={brandtext}>Feature Brands</Text>
              </View>
              <ScrollView horizontal={true}>
                <TouchableOpacity style={featurebrandimageview}>
                  <Image
                    source={require('../../Assets/Product/featurebrand1.jpeg')}
                    style={featurebrandimag}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={featurebrandimageview}>
                  <Image
                    source={require('../../Assets/Product/featurebrand2.jpeg')}
                    style={featurebrandimag}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={listmainview}>
              <View style={backroundimage}>
                <View style={chlidlistview}>
                  <View style={titletext}>
                    <Text style={viewtitletext}>Top offers</Text>
                    <Text style={subtitlefonttext}>On Footwear</Text>
                  </View>
                  <TouchableOpacity style={viewallview}>
                    <View style={viewallbtntext}>
                      <Text style={viewalltext}>View All</Text>
                      <MaterialIcons
                        name={'keyboard-arrow-right'}
                        color={iconcolor}
                        size={swidth * 0.05}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={containerview}>
                  <View style={containlistview}>
                    <View style={containmainview}>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={containmainview}>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={containitemview}>
                        <View>
                          <Image
                            source={require('../../Assets/Product/watch.jpeg')}
                            style={imageviewocontainitem}
                            resizeMode={'contain'}
                          />
                          <View style={aligncentertext}>
                            <Text style={containetexttitle}>Watch</Text>
                            <Text style={containtext}>
                              Under {'\u20B9'} 999
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
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
  {
    GETCATEGORYData,
  },
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: BACKGROUND,
  },
  chlidcontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  serachviewheader: {
    backgroundColor: BACKGROUND,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchview1: {
    height: sheigth * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: swidth * 0.05,
    alignItems: 'center',
    borderRadius: swidth * 0.01,
    backgroundColor: '#fff',
    opacity: 0.9,
  },
  icon: {
    height: sheigth * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: swidth * 0.02,
  },
  searchbox: {
    height: sheigth * 0.06,
    width: swidth * 0.88,
    fontSize: swidth * 0.03,
    marginLeft: swidth * 0.02,
  },
  Allroundview: {
    backgroundColor: BACKGROUND,
    height: swidth * 0.12,
    width: swidth * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: swidth * 0.01,
    borderRadius: (swidth * 0.5) / 2,
  },
  allcategoriesview: {
    alignSelf: 'flex-start',
    height: swidth * 0.21,
  },
  allroundview: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: swidth * 0.009,
    padding: swidth * 0.002,
  },
  Flatlistdata: {
    // margin: swidth * 0.01,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  listtext: {
    marginTop: swidth * 0.02,
    fontSize: swidth * 0.03,
    color: 'black',
  },
  allview: {
    height: sheigth * 0.06,
    width: swidth * 0.16,
  },
  alltext: {
    marginTop: swidth * 0.02,
    fontSize: swidth * 0.03,
    color: 'black',
  },
  alllistview: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textview: {
    // backgroundColor: 'red',
    alignItems: 'center',
    height: sheigth * 0.03,
  },
  flexdir: {
    flexDirection: 'row',
  },
  marginlist: {
    marginTop: sheigth * 0.007,
  },
  bannerview: {
    height: sheigth * 0.24,
  },
  offview: {
    height: sheigth * 0.15,
    width: swidth,
    // backgroundColor: 'red',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  topitemview: {
    // backgroundColor: 'green',
    height: sheigth * 0.15,
    alignItems: 'center',
    width: swidth / 3,
  },
  topimageview: {
    height: sheigth * 0.1,
    width: swidth * 0.3,
    // borderRadius: swidth * 0.01,
    position: 'absolute',
    elevation: 5,
    shadowOffset: {width: 0, height: 0.1},
    shadowColor: 'gray',
    shadowOpacity: 1.0,
  },
  topimage: {
    backgroundColor: '#ffd600',
    height: sheigth * 0.06,
    width: swidth * 0.32,
    borderRadius: swidth * 0.006,
    marginTop: sheigth * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topttitle: {
    fontSize: swidth * 0.03,
    fontFamily: 'Roboto-Bold',
    marginTop: sheigth * 0.02,
  },
  texttop: {
    fontSize: swidth * 0.02,
    fontFamily: 'Roboto-Regular',
  },
  listmainview: {
    height: sheigth * 0.55,
    // backgroundColor: 'red',
    marginBottom: sheigth * 0.01,
  },
  backroundimage: {
    height: sheigth * 0.52,
    backgroundColor: 'rgb(205,237,231)',
  },
  viewallbtntext: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: sheigth * 0.02,
    backgroundColor: 'rgb(0,132,255)',
    height: sheigth * 0.04,
    width: swidth * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: swidth * 0.01,
  },
  viewalltext: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: swidth * 0.03,
  },
  viewtitletext: {
    fontFamily: 'Roboto-Bold',
    color: '#000',
    fontSize: swidth * 0.04,
  },
  subtitlefonttext: {
    fontFamily: 'Roboto-Regular',
    color: '#000',
    fontSize: swidth * 0.03,
    marginTop: sheigth * 0.001,
  },
  chlidlistview: {
    //backgroundColor: 'red',
    height: sheigth * 0.06,
    flexDirection: 'row',
    marginTop: sheigth * 0.02,
  },
  titletext: {
    width: swidth * 0.5,
    justifyContent: 'center',
    marginLeft: swidth * 0.05,
  },
  viewallview: {
    width: swidth * 0.4,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  containerview: {
    backgroundColor: '#fff',
    height: sheigth * 0.47,
    width: swidth * 0.95,
    alignSelf: 'center',
    // marginLeft: swidth * 0.03,
    // marginRight: swidth * 0.03,
    borderRadius: swidth * 0.01,
    elevation: 5,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 5.0,
    position: 'absolute',
    marginTop: sheigth * 0.08,
  },
  containlistview: {
    // backgroundColor: 'red',
    height: sheigth * 0.45,
    marginTop: sheigth * 0.009,
    justifyContent: 'center',
  },
  containitemview: {
    height: sheigth * 0.22,
    width: swidth * 0.45,
    alignItems: 'center',
  },
  containmainview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containetexttitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: swidth * 0.03,
    color: 'gray',
  },
  containitetextview: {
    backgroundColor: iconcolor,
  },
  containtext: {
    fontFamily: 'Roboto-Regular',
    fontSize: swidth * 0.04,
    color: '#00c853',
  },
  imageviewocontainitem: {
    height: sheigth * 0.15,
    width: swidth * 0.3,
  },
  aligncentertext: {
    alignItems: 'center',
  },
  brandview: {
    height: sheigth * 0.33,
    backgroundColor: '#fff',
    marginBottom: sheigth * 0.01,
  },
  brandtext: {
    fontFamily: 'Roboto-Medium',
    fontSize: swidth * 0.04,
  },
  brandviewtext: {
    backgroundColor: '#fff',
    height: sheigth * 0.05,
    justifyContent: 'center',
    marginLeft: swidth * 0.03,
  },
  featurebrandimageview: {
    height: sheigth * 0.28,
    marginRight: swidth * 0.02,
  },
  featurebrandimag: {
    height: sheigth * 0.28,
    width: swidth,
    borderRadius: swidth * 0.02,
  },
  flatlistview: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
