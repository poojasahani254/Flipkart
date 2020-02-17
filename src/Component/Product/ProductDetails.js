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
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from '../../Common/CommonModal.js';
import {ScrollView} from 'react-navigation';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';
let pagesize, descriptiontext;
const imageurl = 'http://192.168.200.175:3000/images/';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
    this.state = {
      isvisible: false,
    };
  }
  componentDidMount(): void {
    console.log(this.state.isvisible);
  }

  shareProductLink = () => {
    Share.share(
      {
        message:
          'This Product Is Sharing \n\n' +
          'https://www.flipkart.com/chevit-men-s-casual-shoes-sneakers-men/p/itm4838a35bd826e?pid=SHOFZ8K3DPFYM8HF&lid=LSTSHOFZ8K3DPFYM8HFTMFLMX&marketplace=FLIPKART&srno=b_1_1&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_1_2.dealCard.OMU_Deals%2Bof%2Bthe%2BDay_V6NDE0289QVE_2&otracker1=hp_omu_SECTIONED_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_dealCard_cc_1_NA_view-all_2&fm=neo%2Fmerchandising&iid=en_uo%2BoW%2FBHfJ5IUBAmyraWS6sx9M1FkwJKiUoOyVp%2FqQ2u3HsFKG2NXjAaqTI9RMHceGTtrxXuK6Eds6R6e2OALw%3D%3D&ppt=browse&ppn=browse&ssid=c7r1mkzqjk0000001581685948916',
        url:
          'https://www.flipkart.com/chevit-men-s-casual-shoes-sneakers-men' +
          '/p/itm4838a35bd826e?pid=SHOFZ8K3DPFYM8HF&lid=LSTSHOFZ8K3DPFYM8HFTMF' +
          'LMX&marketplace=FLIPKART&srno=b_1_1&otracker=hp_omu_Deals%2Bof%2Bthe%' +
          '2BDay_1_2.dealCard.OMU_Deals%2Bof%2Bthe%2BDay_V6NDE0289QVE_2&otracker' +
          '1=hp_omu_SECTIONED_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_' +
          'NA_dealCard_cc_1_NA_view-all_2&fm=neo%2Fmerchandising&iid=' +
          'en_uo%2BoW%2FBHfJ5IUBAmyraWS6sx9M1FkwJKiUoOyVp%2FqQ2u3HsFKG2NXjAaqTI' +
          '9RMHceGTtrxXuK6Eds6R6e2OALw%3D%3D&ppt=browse&ppn=browse&ssid=c7r1mkzqjk' +
          '0000001581685948916',
        title: 'Product Share',
      },
      {
        // Android only:
        dialogTitle: 'Share Product',
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      },
    );
  };

  modalVisble = () => {
    this.setState({
      isvisible: !this.state.isvisible,
    });
  };

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
    const {params} = this.props.navigation.state;
    const {isvisible} = this.state;
    const animations = params.data.Product_Image.map(a => {
      // console.log(a)
      // alert(a.ProductImage)
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.modalVisble();
          }}>
          <Image
            source={{uri: imageurl + a}}
            style={imagestyle}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      );
    });

    const RoundView = params.data.Product_Image.map((a, index) => {
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

    if (params.data.Product_description.includes(':')) {
      // alert(JSON.stringify(params.data));
    } else {
      descriptiontext = params.data.Product_description;
    }

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
                  {params.data.Product_name}
                </Text>
                <View style={RatingView}>
                  <View style={Rateview}>
                    <Text style={[fontfamliy, Ratenumber]}>
                      {params.data.rate > 0 ? params.data.rate : 0}
                    </Text>
                    <MaterialIcons
                      name={'star'}
                      size={swidth * 0.03}
                      color={iconcolor}
                    />
                  </View>
                  <Text style={Ratetext}>{params.data.DigitsRate} ratings</Text>
                  {params.data.Type_assured === 'yes' ? (
                    <Image
                      source={require('../../Assets/Image/flipkartAssured.png')}
                      style={flipkartassuredStyle}
                      resizeMode={'contain'}
                    />
                  ) : (
                    <></>
                  )}
                </View>
                <View style={SpecialView}>
                  <Text style={specialtext}>Special Price</Text>
                </View>
                <View style={flexdire}>
                  <Text style={[fonfamliybold, {fontSize: sheigth * 0.02}]}>
                    {'\u20B9' + params.data.Sell_Price}
                  </Text>
                  <Text style={[fonfamliybold, offRupee]}>
                    {params.data.Actual_Price}
                  </Text>
                  <Text style={[offtext, fonfamliybold]}>
                    {params.data.Off_percent}% Off
                  </Text>
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
              <TouchableOpacity
                style={[shareview, shadowview]}
                onPress={() => {
                  this.shareProductLink();
                }}>
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
                  {'\u2022'}{' '}
                  {params.data.Product_description.split(',')[0].trim()}
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
        <Modal
          visible={isvisible}
          onClose={this.modalVisble}
          onFetch={params.data}
        />
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
