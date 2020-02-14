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
import {BACKGROUND} from '../../Colors/Colors';
import {GetMatchedData, RegisterUser} from '../../Action/LoginAction';
import {connect} from 'react-redux';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textview: 'Phone',
      inputtext: '',
      isactive: false,
      message: '',
    };
  }

  _Validation = () => {
    const reg = /^[0]?[789]\d{9}$/;
    var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (this.state.isactive == true) {
      if (this.state.textview == 'Phone') {
        if (reg.test(this.state.inputtext) == false) {
          this.setState({message: 'Please Enter Valid Phone Number'});
        } else {
          this._onPress();
        }
      } else {
        if (email.test(this.state.inputtext) == false) {
          this.setState({message: 'Please enter Valid Email Address'});
        } else {
          this._onPress();
        }
      }
    }
  };

  _Validatatingphonenumber = text => {
    if (this.state.inputtext.length == 9) {
      this.setState({isactive: true});
    }
    this.setState({inputtext: text, message: ''});
  };

  _onPress = () => {
    const obj = {
      PhoneNumber: this.state.inputtext,
    };
    this.props
      .GetMatchedData(obj)
      .then(response => {
        this._PasstoPage();
      })
      .catch(err => {
        console.log(err);
        alert('Please Check your Intertnet Connection');
      });
  };

  _PasstoPage = () => {
    console.log('Onpress' + this.state.textview);
    if (this.props.loginuserdata1 === null) {
      if (this.state.textview == 'Phone') {
        let otpnum = Math.floor(100000 + Math.random() * 900000);
        // console.log('send Otp' + this.state.textview + otpnum);
        const obj = {
          otp: otpnum,
          PhoneNumber: this.state.inputtext,
          status: 'Register',
        };
        this.props.navigation.navigate('OtpPage', {data: obj});
      }
      if (this.state.textview == 'Email') {
        const obj = {
          Email: this.state.inputtext,
          password: '',
          status: 'Register',
        };
        this.props.navigation.navigate('Paasword', {data: obj});
        console.log('Password Page' + this.state.textview);
      }
    }

    if (this.props.loginuserdata1 !== null) {
      if (this.state.textview == 'Phone') {
        let otpnum = Math.floor(100000 + Math.random() * 900000);
        // console.log('send Otp' + this.state.textview + otpnum);
        const obj = {
          otp: otpnum,
          PhoneNumber: this.state.inputtext,
          status: 'Old',
        };
        this.props.navigation.navigate('OtpPage', {data: obj});
      }
      if (this.state.textview == 'Email') {
        const obj = {
          Email: this.state.inputtext,
          password: this.props.loginuserdata1.Password,
          status: 'Old',
        };
        this.props.navigation.navigate('Paasword', {data: obj});
        // console.log('Password Page' + this.state.textview);
      }
    }
  };

  render() {
    // console.log('Login' + this.props.navigation.getParam('IsView'));
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
      emailidtextboxview,
      fontlabel,
      usedlabel,
      footerbtn,
      hairline,
      btn,
      continuetext,
      btnbackround,
      warningtext,
    } = styles;

    return (
      <SafeAreaView style={container}>
        <View style={container}>
          <View style={chlidView}>
            <View style={HeaderView}>
              <View style={headerleft}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('HomePage');
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
              {this.props.navigation.getParam('IsView') !== undefined &&
              this.props.navigation.getParam('IsView') ? (
                <Text style={fontstyle}>
                  Looks Like You're new Here!{'\n'}Sign up with your number to
                  continue
                </Text>
              ) : (
                <Text style={fontstyle}>Log in to check your Account</Text>
              )}

              {this.state.textview == 'Phone' ? (
                <View style={{marginTop: sheigth * 0.02}}>
                  <View
                    style={[
                      maininnerview,
                      this.state.message != '' && {borderColor: 'red'},
                    ]}>
                    <TextInput
                      maxLength={10}
                      style={Textinputstyle}
                      keyboardType={'numeric'}
                      returnKeyType={'done'}
                      onChangeText={text => {
                        this._Validatatingphonenumber(text);
                      }}
                      value={this.state.inputtext}
                      onKeyPress={() => {
                        if (this.state.inputtext.length == 10) {
                          this.setState({isactive: true});
                        } else {
                          this.setState({isactive: false});
                        }
                      }}
                    />
                  </View>
                  <View style={textboxview}>
                    <Text
                      style={[
                        fontlabel,
                        this.state.message != '' && {color: 'red'},
                      ]}>
                      Phone Number
                    </Text>
                  </View>
                  {this.state.message != '' && (
                    <Text style={warningtext}>{this.state.message}</Text>
                  )}
                  <TouchableOpacity
                    style={usedlabel}
                    onPress={() => {
                      this.setState({
                        textview: 'Email',
                        inputtext: '',
                        message: '',
                      });
                    }}>
                    <Text style={fontlabel}>Used Email id</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{marginTop: sheigth * 0.02}}>
                  <View
                    style={[
                      maininnerview,
                      this.state.message != '' && {borderColor: 'red'},
                    ]}>
                    <TextInput
                      style={Textinputstyle}
                      keyboardType={'email-address'}
                      returnKeyType={'done'}
                      onChangeText={text => {
                        if (this.state.inputtext !== '') {
                          this.setState({isactive: true});
                        }
                        this.setState({inputtext: text, message: ''});
                      }}
                      value={this.state.inputtext}
                      onKeyPress={() => {
                        if (this.state.inputtext == '') {
                          this.setState({isactive: false});
                        }
                      }}
                    />
                  </View>
                  <View style={emailidtextboxview}>
                    <Text
                      style={[
                        fontlabel,
                        this.state.message != '' && {color: 'red'},
                      ]}>
                      Email Id
                    </Text>
                  </View>
                  {this.state.message != '' && (
                    <Text style={warningtext}>{this.state.message}</Text>
                  )}
                  <TouchableOpacity
                    style={usedlabel}
                    onPress={() => {
                      this.setState({
                        textview: 'Phone',
                        inputtext: '',
                        message: '',
                      });
                    }}>
                    <Text style={fontlabel}>Used Phone Number</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <View style={footerbtn}>
            <View style={hairline} />
            <TouchableOpacity
              onPress={() => {
                this._Validation();
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
  {
    GetMatchedData,
    RegisterUser,
  },
)(App);

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
    // backgroundColor: 'black',
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
    width: swidth * 0.3,
    position: 'absolute',
    marginLeft: swidth * 0.02,
    paddingLeft: swidth * 0.01,
    alignItems: 'center',
  },
  Textinputstyle: {
    height: sheigth * 0.06,
    marginLeft: swidth * 0.02,
    marginTop: swidth * 0.01,
  },
  emailidtextboxview: {
    backgroundColor: 'white',
    width: swidth * 0.16,
    position: 'absolute',
    marginLeft: swidth * 0.02,
    paddingLeft: swidth * 0.01,
    alignItems: 'center',
  },
  fontlabel: {
    color: '#0d47a1',
    fontFamily: 'Roboto-Regular',
  },
  usedlabel: {
    flexDirection: 'row-reverse',
    marginTop: sheigth * 0.01,
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
});
