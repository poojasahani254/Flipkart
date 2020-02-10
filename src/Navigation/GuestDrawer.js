import LoginPage from '../Component/Login/LoginPage';
import HomePage from '../Component/Home/HomePage';
import SuperCoins from '../Component/SuperCoins';
import Videos from '../Component/Videos';
import Ideas from '../Component/ideas';
import Games from '../Component/Games';
import OtpPage from '../Component/Login/OtpPage';
import Paasword from '../Component/Login/Paasword';
import MyAccount from '../Component/Login/MyAccount';
import UpdateProfile from '../Component/Login/UpdateProfile';
import ChangePassword from '../Component/Login/changePassword';
import SubCategory from '../Component/Product/SubCatgoryList';
import AllProductDisplay from '../Component/Product/AllProductDisplay';
import customDrawer from '../Common/CustomeDrawer';
import MovingBanner from '../Common/MovingBanner';
import Myorders from '../Component/Order/Myorders';
import AllProductCategory from '../Component/Product/AllProductsCatergory';
import {BACKGROUND} from '../Colors/Colors';
import ProductDetails from '../Component/Product/ProductDetails';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {View, Text, Dimensions} from 'react-native';

Icon.loadFont();
Entypo.loadFont();

const AppNavigator = createBottomTabNavigator(
  {
    HomePage: HomePage,
    SuperCoins,
    Videos,
    Ideas,
    Games,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName == 'HomePage') {
          return (
            <View style={{alignItems: 'center'}}>
              <Icon name={'shopping-package'} size={25} color={tintColor} />
              <Text style={{color: tintColor}}>Shop</Text>
            </View>
          );
        } else if (routeName == 'SuperCoins') {
          return (
            <View style={{alignItems: 'center'}}>
              <Entypo name={'compass'} size={25} color={tintColor} />
              <Text style={{color: tintColor}}>Supercoin</Text>
            </View>
          );
        } else if (routeName == 'Videos') {
          return (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={'lightbulb-on'}
                size={25}
                color={tintColor}
              />
              <Text style={{color: tintColor}}>Ideas</Text>
            </View>
          );
        } else if (routeName == 'Ideas') {
          return (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={'library-video'}
                size={25}
                color={tintColor}
              />
              <Text style={{color: tintColor}}>Video</Text>
            </View>
          );
        } else if (routeName == 'Games') {
          return (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={'google-play'}
                size={25}
                color={tintColor}
              />
              <Text style={{color: tintColor}}>Games</Text>
            </View>
          );
        }
      },
      tabBarOptions: {
        activeTintColor: BACKGROUND,
        showLabel: false,
        inactiveTintColor: 'gray',
        indicatorStyle: {
          top: 0,
          backgroundColor: 'red',
        },
      },
    }),
  },
);

const ALLPageStack = createStackNavigator(
  {
    HomePage,
    UpdateProfile,
    ChangePassword,
    SubCategory,
    AllProductDisplay,
    ProductDetails,
    MyAccount,
    Paasword,
    AllProductCategory,
  },
  {
    headerMode: 'none',
  },
);

const LoginSwitch = createSwitchNavigator(
  {
    LoginPage,
    OtpPage,
    ALLPageStack,
  },
  {
    headerMode: 'none',
  },
);

const drawer = createDrawerNavigator(
  {
    Home: AppNavigator,
    'My Account': LoginSwitch,
    MyAccount,
    Myorders,
    MovingBanner,
    SubCategory,
  },
  {
    contentComponent: customDrawer,
  },
);
export default createAppContainer(drawer);
