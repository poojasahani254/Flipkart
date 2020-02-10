import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import ALlHeader from '../../Common/AllPageHeader';
import Icon from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {BACKGROUND} from '../../Colors/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-navigation';
import {connect} from 'react-redux';
import {GetMatchedData} from '../../Action/LoginAction';
import {NavigationEvents} from 'react-navigation';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      userdata: [],
    };
  }

  componentDidMount(): void {
    this.getdata();
  }

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ): void {
    // this.getdata();
    // console.log(this.props)
  }

  getdata = async () => {
    const value = await AsyncStorage.getItem('data');
    // console.log('Getting Async Data' + JSON.stringify(value));
    const obj = {
      PhoneNumber: JSON.parse(value).PhoneNumber,
    };
    this.props
      .GetMatchedData(obj)
      .then(response => {
        this.setState({userdata: response});
        // console.log(this.state.userdata.FirstName);
      })
      .catch(err => {
        console.log(err);
      });
  };

  Logout = async () => {
    try {
      const obj = {
        status: false,
      };
      await AsyncStorage.setItem('data', JSON.stringify(obj));
      this.props.navigation.navigate('Home');
    } catch (error) {
      console.log('Error Occured While storing data on AsyncStorage', error);
    }
  };

  render() {
    const {
      container,
      profileview,
      imgview,
      orview,
      fontstyle,
      Textinputstyle,
      textinputview,
      textstyle,
      editView,
      Listview,
      Headerlist,
      headertext,
      footertetx,
      addresview,
      addresstext,
      navigatview,
      chlidnavigateview,
      navigatetext,
      horizontalline,
      viewhorizontalline,
      addressline,
    } = styles;
    return (
      <SafeAreaView style={container}>
        <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        <View style={container}>
          <ALlHeader
            HeaderText={'My Account'}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={profileview}>
              <View style={imgview}>
                <View>
                  <Icon name={'female'} size={sheigth * 0.1} />
                </View>
                <View style={orview}>
                  <Text style={fontstyle}>Or</Text>
                </View>
                <View>
                  <Icon name={'male'} size={sheigth * 0.1} />
                </View>
              </View>
              {this.state.userdata.FirstName != undefined &&
              this.state.userdata.LastName != undefined ? (
                <View style={textinputview}>
                  <Text style={[Textinputstyle, {color: '#fff'}]}>
                    {this.state.userdata.FirstName}{' '}
                    {this.state.userdata.LastName}
                  </Text>
                </View>
              ) : (
                <View style={textinputview}>
                  <TextInput
                    style={Textinputstyle}
                    returnKeyType={'done'}
                    onChangeText={text => {}}
                    placeholder={'Enter Full Name'}
                    placeholderTextColor={'#e0e0e0'}
                    editable={false}
                  />
                </View>
              )}
              <View style={textstyle}>
                <Text style={fontstyle}>{this.state.userdata.PhoneNumber}</Text>
              </View>
              <View style={textstyle}>
                <Text style={fontstyle}>
                  {this.state.userdata.EmailAddress}
                </Text>
              </View>
              <TouchableOpacity
                style={editView}
                onPress={() => {
                  this.props.navigation.navigate('UpdateProfile');
                }}>
                <EvilIcons
                  name={'pencil'}
                  size={sheigth * 0.06}
                  color={'#424242'}
                />
              </TouchableOpacity>
            </View>
            <View style={container}>
              <TouchableOpacity style={Listview}>
                <View style={Headerlist}>
                  <Text style={headertext}>Flipkart Plus</Text>
                </View>
                <View style={horizontalline} />
                <View style={{flexDirection: 'row-reverse'}}>
                  <Text style={footertetx}>VIEW PLUS ZONE</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={Listview}>
                <View style={Headerlist}>
                  <Text style={headertext}>My Orders</Text>
                </View>
                <View style={horizontalline} />
                <View style={{flexDirection: 'row-reverse'}}>
                  <Text style={footertetx}>VIEW ALL ORDERS</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={Listview}>
                <View style={Headerlist}>
                  <Text style={headertext}>Cardless credit</Text>
                </View>
                <View style={horizontalline} />
                <View style={{flexDirection: 'row-reverse'}}>
                  <Text style={footertetx}>VIEW DETAILS</Text>
                </View>
              </TouchableOpacity>
              {this.state.userdata.Address != undefined ? (
                <TouchableOpacity style={[Listview, {height: sheigth * 0.2}]}>
                  <View style={addresview}>
                    <Text style={headertext}>My Addresses</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={addresstext}>
                      {this.state.userdata.Address}
                    </Text>
                  </View>
                  <View style={addressline} />
                  <View style={{flexDirection: 'row-reverse'}}>
                    <Text style={[footertetx, {marginTop: swidth * 0.03}]}>
                      VIEW MORE
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={Listview}>
                  <View style={Headerlist}>
                    <Text style={headertext}>My Addresses</Text>
                  </View>
                  <View style={horizontalline} />
                  <View style={{flexDirection: 'row-reverse'}}>
                    <Text style={footertetx}>VIEW MORE</Text>
                  </View>
                </TouchableOpacity>
              )}

              <View style={navigatview}>
                <TouchableOpacity style={chlidnavigateview}>
                  <MaterialIcons name={'language'} size={sheigth * 0.03} />
                  <Text style={navigatetext}>Language Settings</Text>
                </TouchableOpacity>
                <View style={viewhorizontalline} />
                <TouchableOpacity style={chlidnavigateview}>
                  <MaterialIcons
                    name={'notifications-active'}
                    size={sheigth * 0.03}
                  />
                  <Text style={navigatetext}>Notification Preferences</Text>
                </TouchableOpacity>
                <View style={viewhorizontalline} />
                <TouchableOpacity
                  style={chlidnavigateview}
                  onPress={() => {
                    this.props.navigation.navigate('UpdateProfile');
                  }}>
                  <MaterialIcons name={'settings'} size={sheigth * 0.03} />
                  <Text style={navigatetext}>Account Settings</Text>
                </TouchableOpacity>
                <View style={viewhorizontalline} />
                <TouchableOpacity
                  style={chlidnavigateview}
                  onPress={() => {
                    this.Logout();
                  }}>
                  <SimpleLineIcons name={'logout'} size={sheigth * 0.03} />
                  <Text style={navigatetext}>Logout of this app</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  {
    GetMatchedData,
  },
)(MyAccount);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  profileview: {
    height: sheigth * 0.3,
    backgroundColor: BACKGROUND,
  },
  imgview: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sheigth * 0.05,
  },
  orview: {
    backgroundColor: 'rgb(7,95,189)',
    height: swidth * 0.08,
    width: swidth * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: swidth * 0.1,
    borderColor: '#9e9e9e',
  },
  fontstyle: {
    color: 'white',
  },
  Textinputstyle: {
    height: sheigth * 0.06,
    width: swidth * 0.7,
    marginLeft: swidth * 0.02,
    marginTop: swidth * 0.01,
    // backgroundColor: 'red',
    borderColor: '#e0e0e0',
    textAlign: 'center',
    borderBottomWidth: 1,
    fontSize: sheigth * 0.03,
  },
  textinputview: {
    // backgroundColor: 'green',
    height: sheigth * 0.07,
    alignItems: 'center',
  },
  textstyle: {
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: sheigth * 0.03,
  },
  editView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: sheigth * 0.01,
  },
  Listview: {
    backgroundColor: 'white',
    height: sheigth * 0.15,
    margin: sheigth * 0.01,
    elevation: 5,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 3.0,
  },
  Headerlist: {
    // backgroundColor: 'green',
    height: sheigth * 0.08,
    marginLeft: swidth * 0.06,
    marginTop: sheigth * 0.02,
  },
  headertext: {
    fontSize: sheigth * 0.03,
  },
  footertetx: {
    // backgroundColor:'red',
    fontSize: sheigth * 0.02,
    color: '#01579b',
    marginRight: swidth * 0.05,
  },
  addresview: {
    height: sheigth * 0.04,
    marginLeft: swidth * 0.06,
    marginTop: sheigth * 0.02,
  },
  addresstext: {
    fontSize: swidth * 0.04,
    color: '#01579b',
    marginLeft: swidth * 0.06,
    marginTop: sheigth * 0.01,
    marginBottom: sheigth * 0.02,
  },
  navigatview: {
    height: sheigth * 0.22,
    backgroundColor: '#eeeeee',
  },
  chlidnavigateview: {
    flexDirection: 'row',
    margin: sheigth * 0.01,
    alignItems: 'center',
  },
  navigatetext: {
    marginLeft: swidth * 0.02,
    fontSize: sheigth * 0.02,
  },
  horizontalline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: swidth * 0.06,
    marginRight: swidth * 0.06,
    marginBottom: sheigth * 0.01,
  },
  viewhorizontalline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  addressline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: swidth * 0.06,
    marginRight: swidth * 0.06,
  },
});
