import React, {Component} from 'react';
import ProductPageHeader from '../../Common/ProductPageHeader';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-navigation';
import {connect} from 'react-redux';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';
let pagesize;

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
  }
  render() {
    const {
      container,
      ImageHeader,
      WishlistView,
      heartView,
      imageslide,
      imagestyle,
      circle,
      outerCircle,
      maindetailview,
      itemdeatisview,
      fontfamliy,
      headerfontsize,
      RatingView,
      Rateview,
      flipkartassuredStyle,
      Ratetext,
      Ratenumber,
      SpecialView,
      specialtext,
      flexdire,
      fonfamliybold,
      offtext,
      offRupee,
      horizontalline,
      availbleoffer,
      availbleoffertext,
      availableofferitemview,
      aoffertext,
      atextcolor,
      aofferbtn,
      btnview,
      aofferbtntext,
      DescriptiontextView,
      desciptiontext,
      shadowview,
      shareview,
      description,
      actionbutton,
      actionbuttontext,
      buttonview,
      buynoewbuttoncolor,
    } = styles;
    const DATA = [
      {
        title: 'Drones',
        image: require('../../Assets/Product/Electronic/laptop1.jpeg'),
      },
      {
        title: 'Lighting',
        image: require('../../Assets/Product/Electronic/Laptop2.jpeg'),
      },
      {
        title: 'PhotoGraphy',
        image: require('../../Assets/Product/Electronic/laptop3.jpeg'),
      },
      {
        title: 'PhotoGraphy',
        image: require('../../Assets/Product/Electronic/laptop4.jpeg'),
      },
      {
        title: 'PhotoGraphy',
        image: require('../../Assets/Product/Electronic/laptop6.jpeg'),
      },
    ];
    const animations = DATA.map(a => {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            alert('move');
          }}>
          <Image source={a.image} resizeMode={'contain'} style={imagestyle} />
        </TouchableOpacity>
      );
    });
    const RoundView = DATA.map((a, index) => {
      pagesize = Animated.divide(this.opacity, swidth);
      const changeOpcity = pagesize.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.3, 1, 0.5],
        extrapolate: 'clamp',
      });
      return (
        <TouchableOpacity
          onPress={() => {
            this.scrollview_ref.scrollTo({
              x: index * swidth,
              y: 0,
              animated: true,
            });
          }}>
          <Animated.View style={[circle, {opacity: changeOpcity}]} />
        </TouchableOpacity>
      );
    });
    return (
      <SafeAreaView style={container}>
        <ScrollView>
          <ProductPageHeader
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <View style={container}>
            <View style={ImageHeader}>
              <TouchableOpacity style={WishlistView}>
                <View style={heartView}>
                  <Icon name={'heart'} size={sheigth * 0.03} color={'gray'} />
                </View>
              </TouchableOpacity>
              <View style={imageslide}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                  scrollEventThrottle={1}
                  ref={ref => {
                    this.scrollview_ref = ref;
                  }}
                  onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: this.opacity}}},
                  ])}>
                  {animations}
                </ScrollView>
                <View style={outerCircle}>{RoundView}</View>
              </View>
            </View>
            <View style={maindetailview}>
              <View style={itemdeatisview}>
                <Text numberOfLines={2} style={[fontfamliy, headerfontsize]}>
                  Hero Stomper 16 T Recereation Cycle(Single Speed ,Red)
                </Text>
                <View style={RatingView}>
                  <View style={Rateview}>
                    <Text style={[fontfamliy, Ratenumber]}>4</Text>
                    <MaterialIcons
                      name={'star'}
                      size={swidth * 0.03}
                      color={iconcolor}
                    />
                  </View>
                  <Text style={Ratetext}>5,326 ratings</Text>
                  <Image
                    source={require('../../Assets/Image/flipkartAssured.png')}
                    style={flipkartassuredStyle}
                    resizeMode={'contain'}
                  />
                </View>
                <View style={SpecialView}>
                  <Text style={specialtext}>Special Price</Text>
                </View>
                <View style={flexdire}>
                  <Text style={[fonfamliybold, {fontSize: sheigth * 0.02}]}>
                    {'\u20B9'}1,797
                  </Text>
                  <Text style={[fonfamliybold, offRupee]}>3,995</Text>
                  <Text style={[offtext, fonfamliybold]}>55% Off</Text>
                </View>
              </View>
              <View style={horizontalline} />
              <View style={availbleoffer}>
                <Text style={[fonfamliybold, availbleoffertext]}>
                  Availble offers
                </Text>
                <View style={availableofferitemview}>
                  <MaterialIcons
                    name={'local-offer'}
                    size={swidth * 0.05}
                    color={'#4caf50'}
                  />
                  <View style={aoffertext}>
                    <Text style={[fontfamliy, atextcolor]}>
                      5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons
                      name={'keyboard-arrow-right'}
                      size={swidth * 0.06}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={availableofferitemview}>
                  <MaterialIcons
                    name={'local-offer'}
                    size={swidth * 0.05}
                    color={'#4caf50'}
                  />
                  <View style={aoffertext}>
                    <Text style={[fontfamliy, atextcolor]}>
                      Extra 5% off with Axis Bank Buzz Credit Card Place
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons
                      name={'keyboard-arrow-right'}
                      size={swidth * 0.06}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={aofferbtn}>
                  <TouchableOpacity style={btnview}>
                    <Text style={aofferbtntext}>Free Delivery in 2 days</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={btnview}>
                    <Text style={aofferbtntext}>Cash on Delivery</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={[shareview, shadowview]}>
                <MaterialCommunityIcons
                  size={sheigth * 0.03}
                  name={'share'}
                  color={'gray'}
                />
                <Text style={[fonfamliybold, {marginLeft: swidth * 0.01}]}>
                  Share
                </Text>
              </TouchableOpacity>
              <View style={[desciptiontext, shadowview, description]}>
                <Text style={[fonfamliybold, availbleoffertext]}>
                  Product Description
                </Text>
                <Text style={DescriptiontextView}>
                  With the Redmi 7A smartphone, you can access your digital
                  world right in the palm of your hand. It is crafted and
                  designed to ensure smooth operation and seamless performance.
                  It comes with an HD Full Screen Display that enhances your
                  viewing experience. Also, as it comes with up to 256 GB of
                  expandable storage, you can store your favourite videos,
                  photos, and songs and enjoy them anytime and anywhere. It also
                  comes with powerful rear and front cameras that let you click
                  stunning pictures and selfies. Access all these features and
                  more, such as the High-volume Speaker, and Headphone-free FM
                  Radio by unlocking the Redmi 7A instantly using the AI Face
                  Unlock Technology.
                </Text>
              </View>
              <View style={[actionbutton, shadowview]}>
                <TouchableOpacity style={buttonview}>
                  <Text style={[actionbuttontext, fontfamliy]}>Go To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[buttonview, buynoewbuttoncolor]}>
                  <Text
                    style={[actionbuttontext, fontfamliy, {color: iconcolor}]}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageHeader: {
    backgroundColor: '#fff',
    height: sheigth * 0.4,
  },
  WishlistView: {
    height: sheigth * 0.07,
    // backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: swidth * 0.03,
  },
  heartView: {
    height: swidth * 0.1,
    width: swidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: (swidth * 0.1) / 2,
    elevation: 5,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 0.5,
  },
  imageslide: {
    height: sheigth * 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imagestyle: {
    height: sheigth * 0.28,
    width: swidth,
  },
  circle: {
    height: sheigth * 0.01,
    width: sheigth * 0.01,
    borderRadius: (sheigth * 0.5) / 2,
    backgroundColor: 'black',
    margin: sheigth * 0.003,
    marginTop: sheigth * 0.05,
  },
  outerCircle: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    marginTop: sheigth * 0.25,
  },
  maindetailview: {
    // backgroundColor: 'red',
    flex: 1,
  },
  itemdeatisview: {
    backgroundColor: '#fff',
    height: sheigth * 0.17,
    padding: sheigth * 0.01,
  },
  fontfamliy: {
    fontFamily: 'Roboto-Regular',
  },
  fonfamliybold: {
    fontFamily: 'Roboto-Bold',
  },
  headerfontsize: {
    fontSize: swidth * 0.04,
  },
  RatingView: {
    // backgroundColor: 'red',
    height: sheigth * 0.03,
    alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: sheigth * 0.01,
  },
  Rateview: {
    backgroundColor: '#43a047',
    width: swidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: swidth * 0.005,
  },
  flipkartassuredStyle: {
    height: sheigth * 0.02,
    width: swidth * 0.15,
    marginLeft: swidth * 0.01,
  },
  Ratetext: {
    marginLeft: swidth * 0.01,
    color: 'gray',
    fontSize: swidth * 0.03,
    fontFamily: 'Roboto-Regular',
  },
  Ratenumber: {
    color: iconcolor,
    marginRight: swidth * 0.01,
  },
  SpecialView: {
    backgroundColor: '#a5d6a7',
    height: sheigth * 0.03,
    width: swidth * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  specialtext: {
    color: 'green',
    fontFamily: 'Roboto-bold',
    fontSize: swidth * 0.03,
  },
  flexdire: {
    flexDirection: 'row',
    marginTop: sheigth * 0.01,
    alignItems: 'center',
    marginLeft: swidth * 0.01,
  },
  offtext: {
    color: '#4caf50',
    marginLeft: swidth * 0.01,
  },
  offRupee: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: swidth * 0.01,
  },
  horizontalline: {
    borderBottomWidth: 0.7,
    marginTop: sheigth * 0.02,
    borderColor: 'gray',
    marginBottom: sheigth * 0.02,
  },
  availbleoffer: {
    backgroundColor: '#fff',
    height: sheigth * 0.2,
    padding: sheigth * 0.01,
  },
  availbleoffertext: {
    fontSize: swidth * 0.03,
  },
  availableofferitemview: {
    flexDirection: 'row',
    marginTop: sheigth * 0.01,
    alignItems: 'center',
  },
  aoffertext: {
    width: swidth * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: swidth * 0.01,
  },
  atextcolor: {
    color: 'gray',
    fontSize: swidth * 0.04,
  },
  aofferbtn: {
    backgroundColor: '#fff',
    height: sheigth * 0.07,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: sheigth * 0.01,
  },
  btnview: {
    backgroundColor: '#e1f5fe',
    height: sheigth * 0.05,
    width: swidth * 0.4,
    marginRight: swidth * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: swidth * 0.02,
  },
  aofferbtntext: {
    fontSize: swidth * 0.03,
    fontFamily: 'Roboto-regular',
  },
  DescriptiontextView: {
    fontFamily: 'Roboto-regular',
    fontSize: swidth * 0.03,
    marginTop: sheigth * 0.01,
    textAlign: 'justify',
  },
  desciptiontext: {
    backgroundColor: '#fff',
    marginTop: sheigth * 0.01,
  },
  shadowview: {
    elevation: 5,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 1.0,
  },
  shareview: {
    backgroundColor: '#fff',
    height: sheigth * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: swidth * 0.01,
    marginRight: swidth * 0.01,
    flexDirection: 'row',
    marginTop: sheigth * 0.04,
  },
  description: {
    flex: 1,
    flexGrow: 1,
    padding: sheigth * 0.01,
  },
  actionbutton: {
    // backgroundColor: 'red',
    height: sheigth * 0.07,
    marginTop: sheigth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionbuttontext: {
    fontSize: swidth * 0.05,
  },
  buttonview: {
    backgroundColor: '#fff',
    width: swidth / 2,
    height: sheigth * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buynoewbuttoncolor: {
    backgroundColor: 'rgb(255,96,44)',
  },
});
