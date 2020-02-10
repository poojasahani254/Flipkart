import React, {Component} from 'react';
import {NavigationActions, ScrollView} from 'react-navigation';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {BACKGROUND} from '../Colors/Colors';
import {getAsyncdata} from '../Common/CheckLogin';
Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';
export default class drawerContentComponents extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    const {
      Maincontainer,
      container,
      headerContainer,
      common,
      headerView,
      headertextview,
      headeimageview,
      fontext,
      screenContainer,
      screenStyle,
      itemview,
      horizontalline,
      listviewmargin,
      headertextviewitem,
      bottomlist,
    } = styles;

    return (
      <SafeAreaView style={Maincontainer}>
        <View style={container}>
          <TouchableOpacity
            style={headerContainer}
            onPress={this.navigateToScreen('Home')}>
            <View style={[headerView, {...common}]}>
              <Icon name={'home'} size={sheigth * 0.03} color={iconcolor} />
            </View>
            <View style={[headertextviewitem]}>
              <Text style={fontext}>Home</Text>
            </View>
            <View style={headeimageview}>
              <Image
                source={require('../Assets/Image/f1.png')}
                style={{height: 50, width: 50}}
              />
            </View>
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={screenContainer}>
              <TouchableOpacity
                style={[screenStyle, listviewmargin]}
                onPress={this.navigateToScreen('MovingBanner')}>
                <View style={[headerView, {...common}]}>
                  <Icon
                    name={'pluscircleo'}
                    size={sheigth * 0.03}
                    color={'gray'}
                  />
                </View>
                <View style={[headertextview]}>
                  <Text style={itemview}>Flipkart Plus Zone</Text>
                </View>
              </TouchableOpacity>
              <View style={horizontalline} />
              <View>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('SubCategory')}>
                  <View style={[headerView, {...common}]}>
                    <Fontisto
                      name={'electronjs'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Electronics</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'television'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>TVs & Appliances</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'tshirt-crew'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Fashion</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'lamp'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Home and Furniture</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'ballot-outline'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Toys and Baby</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'spray-bottle'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Beauty and Personal care</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'notebook'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Sports,Books and More</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'reproduction'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Refurbished Products</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <Icon
                      name={'mobile1'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Recharges</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'airplane'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Flight,Hotels & Bus</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={horizontalline} />
              <TouchableOpacity
                style={[screenStyle, listviewmargin]}
                onPress={this.navigateToScreen('Home')}>
                <View style={[headerView, {...common}]}>
                  <Entypo
                    name={'language'}
                    size={sheigth * 0.03}
                    color={'gray'}
                  />
                </View>
                <View style={[headertextview]}>
                  <Text style={itemview}>Choose Lanaguage </Text>
                </View>
              </TouchableOpacity>
              <View style={horizontalline} />
              <View>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'sack-percent'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Offer Zone </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'paypal'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Smart Payment Offers </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <Fontisto
                      name={'shopping-bag'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>Sell on Flipkart </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={horizontalline} />
              <View>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={() => {
                    getAsyncdata()
                      .then(response => {
                        if (response) {
                          this.props.navigation.navigate('Myorders');
                        } else {
                          this.props.navigation.navigate('LoginPage');
                        }
                      })
                      .catch(err => {});
                  }}>
                  <View style={[headerView, {...common}]}>
                    <Icon name={'inbox'} size={sheigth * 0.03} color={'gray'} />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>My Orders </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <Fontisto
                      name={'ticket'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>My Coupons </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'cart'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>My Cart </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <Fontisto
                      name={'favorite'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>My Wishlist </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={() => {
                    getAsyncdata()
                      .then(response => {
                        if (response) {
                          this.props.navigation.navigate('MyAccount');
                        } else {
                          this.props.navigation.navigate('LoginPage');
                        }
                      })
                      .catch(err => {});
                  }}>
                  <View style={[headerView, {...common}]}>
                    <MaterialCommunityIcons
                      name={'account'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>My Account </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[headerView, {...common}]}>
                    <Icon
                      name={'notification'}
                      size={sheigth * 0.03}
                      color={'gray'}
                    />
                  </View>
                  <View style={[headertextview]}>
                    <Text style={itemview}>My Notifications </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={horizontalline} />
              <View>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[bottomlist, {...common}]}>
                    <Text style={itemview}>Notification Preferences </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[bottomlist, {...common}]}>
                    <Text style={itemview}>Gift Card</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[bottomlist, {...common}]}>
                    <Text style={itemview}>My Chats</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[bottomlist, {...common}]}>
                    <Text style={itemview}>Help Centre</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[screenStyle, listviewmargin]}
                  onPress={this.navigateToScreen('Home')}>
                  <View style={[bottomlist, {...common}]}>
                    <Text style={itemview}>Legal</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  Maincontainer: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  headerContainer: {
    height: sheigth * 0.08,
    backgroundColor: BACKGROUND,
    width: 280,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff8f8',
  },
  screenContainer: {
    paddingTop: sheigth * 0.001,
    width: '100%',
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    color: '#00adff',
  },
  activeBackgroundColor: {
    backgroundColor: 'grey',
  },
  common: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    height: sheigth * 0.08,
    width: swidth * 0.15,
  },
  headertextview: {
    // backgroundColor: 'red',
    height: sheigth * 0.08,
    width: swidth,
    justifyContent: 'center',
  },
  headeimageview: {
    // backgroundColor: 'green',
    height: sheigth * 0.08,
    width: 50,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  fontext: {
    fontWeight: 'bold',
    color: '#fff',
  },
  itemview: {
    color: 'black',
    fontSize: swidth * 0.04,
  },
  horizontalline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: sheigth * 0.01,
  },
  listviewmargin: {
    marginTop: sheigth * 0.01,
  },
  headertextviewitem: {
    height: sheigth * 0.08,
    width: 150,
    justifyContent: 'center',
  },
  bottomlist: {
    marginLeft: swidth * 0.07,
  },
});
