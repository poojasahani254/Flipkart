import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Fether from 'react-native-vector-icons/Feather';
import {BACKGROUND} from '../../Colors/Colors';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';
class PaaswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isactive: false,
      message: '',
      password: '',
      hidePassword: true,
      dbpassword: '',
      status: '',
      username: '',
    };
  }

  pwdvisible() {
    this.setState({hidePassword: !this.state.hidePassword});
  }

  componentDidMount(): void {
    let data = this.props.navigation.getParam('data');
    console.log(JSON.stringify(this.props.navigation.getParam('data')));
    this.setState({
      dbpassword: data.password,
      status: data.status,
      username: data.Email,
    });
    console.log(
      'Redux Register data' + JSON.stringify(this.props.loginuserdata1),
    );
  }
  _OnPress = () => {
    // let passw = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    if (this.state.password == '') {
      this.setState({message: 'Please Enter Password'});
    } else {
      if (this.state.status === 'Old') {
        if (this.state.password === this.state.dbpassword) {
          this._StoreAsyndata();
          this.props.navigation.navigate('MyAccount');
        } else {
          this.setState({message: 'Invalid Password'});
        }
      } else {
        this.props.navigation.navigate('LoginPage', {IsView: true});
      }
    }
  };
  _StoreAsyndata = async () => {
    const {loginuserdata1} = this.props;
    const obj = {
      PhoneNumber: loginuserdata1.PhoneNumber,
      EmailAddress: loginuserdata1.EmailAddress,
      status: true,
    };
    console.log('Register Async' + JSON.stringify(obj));
    await AsyncStorage.setItem('data', JSON.stringify(obj));
  };
  render() {
    const {
      container,
      chlidView,
      HeaderView,
      headerleft,
      headerright,
      headerimg,
      mainView,
      maininnerview,
      fontstyle,
      textboxview,
      Textinputstyle,
      fontlabel,
      footerbtn,
      hairline,
      btn,
      continuetext,
      btnbackround,
      warningtext,
      Passwordimg,
    } = styles;
    return (
      <SafeAreaView style={container}>
        <View style={container}>
          <View style={chlidView}>
            <View style={HeaderView}>
              <View style={headerleft}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('LoginPage');
                  }}>
                  <Icon name={'close'} size={swidth * 0.07} color={iconcolor} />
                </TouchableOpacity>
              </View>
              <View style={headerright}>
                <Image
                  source={require('../../Assets/Image/flipheaderimg.jpg')}
                  style={headerimg}
                />
              </View>
            </View>
            <View style={mainView}>
              <Text style={fontstyle}>Please enter password for</Text>
              <Text style={{color: 'black'}}>{this.state.username}</Text>
              <View style={{marginTop: sheigth * 0.02}}>
                <View
                  style={[
                    maininnerview,
                    this.state.message != '' && {borderColor: 'red'},
                  ]}>
                  <TextInput
                    style={Textinputstyle}
                    returnKeyType={'done'}
                    onChangeText={text => {
                      if (this.state.password !== '') {
                        this.setState({isactive: true});
                      }
                      this.setState({password: text, message: ''});
                    }}
                    onKeyPress={() => {
                      if (this.state.password == '') {
                        this.setState({isactive: false});
                      }
                    }}
                    secureTextEntry={this.state.hidePassword}
                    value={this.state.password}
                  />
                </View>
                <View style={textboxview}>
                  <Text
                    style={[
                      fontlabel,
                      this.state.message != '' && {color: 'red'},
                    ]}>
                    Password
                  </Text>
                </View>
                {this.state.message != '' && (
                  <Text style={warningtext}>{this.state.message}</Text>
                )}
              </View>

              <TouchableOpacity
                style={Passwordimg}
                onPress={() => {
                  this.pwdvisible();
                }}>
                {this.state.hidePassword ? (
                  <Fether name={'eye'} size={swidth * 0.06} color={'gray'} />
                ) : (
                  <Fether
                    name={'eye-off'}
                    size={swidth * 0.06}
                    color={'gray'}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={footerbtn}>
            <View style={hairline} />
            <TouchableOpacity
              onPress={() => {
                this._OnPress();
              }}>
              <View style={[btn, this.state.isactive && btnbackround]}>
                <Text style={[continuetext]}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const mapToStateProps = state => {
  const loginuserdata1 = state.LoginReducer.getmatchdata;
  return {
    loginuserdata1,
  };
};
export default connect(
  mapToStateProps,
  null,
)(PaaswordPage);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  chlidView: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  HeaderView: {
    height: sheigth * 0.07,
    backgroundColor: BACKGROUND,
    flexDirection: 'row',
  },
  headerleft: {
    width: (swidth * 0.3) / 2,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerright: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'red'
  },
  headerimg: {
    height: sheigth * 0.07,
    width: swidth * 0.4,
    marginLeft: swidth * 0.17,
    marginRight: swidth * 0.17,
  },
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: (swidth * 0.05) / 2,
    borderTopRightRadius: (swidth * 0.05) / 2,
    padding: sheigth * 0.05,
  },
  maininnerview: {
    height: swidth * 0.14,
    marginTop: swidth * 0.03,
    borderColor: '#0d47a1',
    borderWidth: 2,
    borderRadius: (swidth * 0.03) / 2,
  },
  fontstyle: {
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    color: 'black',
  },
  textboxview: {
    backgroundColor: 'white',
    width: swidth * 0.2,
    position: 'absolute',
    marginLeft: swidth * 0.02,
    paddingLeft: swidth * 0.01,
    alignItems: 'center',
  },
  Textinputstyle: {
    height: sheigth * 0.06,
    width: swidth * 0.65,
    marginLeft: swidth * 0.02,
    marginTop: swidth * 0.01,
    // backgroundColor: 'yellow',
  },
  fontlabel: {
    color: '#0d47a1',
    fontFamily: 'Roboto-Regular',
  },
  footerbtn: {
    // backgroundColor:'red',
    height: sheigth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    width: swidth,
  },
  btn: {
    backgroundColor: '#bdbdbd',
    height: sheigth * 0.08,
    width: swidth * 0.97,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: swidth * 0.02,
  },
  continuetext: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  btnbackround: {
    backgroundColor: '#e65100',
  },
  warningtext: {
    color: 'red',
    fontFamily: 'Roboto-MediumItalic',
    marginTop: sheigth * 0.01,
  },
  Passwordimg: {
    height: sheigth * 0.07,
    width: swidth * 0.1,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginTop: swidth * 0.26,
    marginLeft: swidth * 0.79,
  },
});
