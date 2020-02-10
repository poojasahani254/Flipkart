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
import AsyncStorage from '@react-native-community/async-storage';
import {RegisterUser} from '../../Action/LoginAction';
import {connect} from 'react-redux';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

class App extends Component {
  otpTextInput = [];
  constructor() {
    super();
    this.state = {
      message: '',
      otp: [],
      otptext: '',
      phonenumber: '',
      isActive: false,
      status: '',
    };
  }

  componentDidMount(): void {
    this.otpTextInput[0].focus();
    let data = this.props.navigation.getParam('data');
    console.log(
      'Pass Data' + JSON.stringify(this.props.navigation.getParam('data')),
    );
    this.setState({
      otptext: data.otp,
      phonenumber: data.PhoneNumber,
      status: data.status,
    });
    console.log('Redux Data' + JSON.stringify(this.props.loginuserdata1));
  }

  focusPrevious(key, index) {
    if (key === 'Backspace' && index !== 0) {
      this.otpTextInput[index - 1].focus();
      this.otpTextInput[index - 1].clear();
    }
  }

  focusNext(index, value) {
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1].focus();
    }
    if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index].blur();
    }

    this.VERifyOTP(index, value);
  }

  VERifyOTP = (index, value) => {
    const otp = this.state.otp;
    otp[index] = value;
    this.setState({otp});
    console.log(otp.join('') + '   ' + this.state.otptext);
    if (index === 5) {
      this.setState({isActive: true});
      if (this.state.otptext == otp.join('')) {
        if (this.state.status == 'Register') {
          const obj = {
            PhoneNumber: this.state.phonenumber,
          };
          this._RegisterUser(obj);
        } else {
          this.props.navigation.navigate('MyAccount');
          this._StoreAsyndata();
        }
        // alert('Moveloginuserdata1 to My Account Page');
      } else {
        console.log('Else' + this.state.otp);
        // this.setState({otp: []});
        alert('Please Enter Valid Otp');
      }
    } else {
      this.setState({isActive: false});
    }
  };

  _RegisterUser = data => {
    this.props
      .RegisterUser(data)
      .then(response => {
        this.props.navigation.navigate('MyAccount');
        this._StoreAsyndata();
      })
      .catch(err => {
        console.log(err);
      });
  };

  _StoreAsyndata = async () => {
    const obj = {
      PhoneNumber: this.state.phonenumber,
      status: true,
    };
    console.log(JSON.stringify(obj));
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
      emailidtextboxview,
      fontlabel,
      usedlabel,
      footerbtn,
      hairline,
      btn,
      continuetext,
      btnbackround,
      warningtext,
      fontotp,
      otpview,
    } = styles;
    const inputs = Array(6).fill(0);
    const txt = inputs.map((i, j) => (
      <View style={[maininnerview]} key={j}>
        <TextInput
          style={{
            width: swidth * 0.13,
            fontSize: sheigth * 0.04,
            alignSelf: 'center',
          }}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={v => this.focusNext(j, v)}
          returnKeyType="next"
          onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
          ref={ref => {
            this.otpTextInput[j] = ref;
          }}
        />
      </View>
    ));

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
              <Text style={fontstyle}>Please enter OTP we've sent you on</Text>
              <Text style={fontstyle}>+91-{this.state.phonenumber}</Text>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                {txt}
              </View>
              <TouchableOpacity
                style={usedlabel}
                onPress={() => {
                  let otpnum = Math.floor(100000 + Math.random() * 900000);
                  this.setState({
                    otptext: otpnum,
                    otp: [],
                  });
                  this.otpTextInput = [];
                }}>
                <Text style={fontlabel}>Resend OTP</Text>
              </TouchableOpacity>
              <View style={otpview}>
                <Text style={[fontlabel, fontotp]}>{this.state.otptext}</Text>
              </View>
            </View>
          </View>
          <View style={footerbtn}>
            <View style={hairline} />
            <TouchableOpacity>
              <View style={[btn, this.state.isActive && btnbackround]}>
                <Text style={[continuetext]}>Verify</Text>
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
    height: swidth * 0.15,
    marginTop: swidth * 0.02,
    marginRight: swidth * 0.01,
    borderColor: '#0d47a1',
    // borderWidth: 2,
    alignContent: 'center',
    borderBottomWidth: 1,
    borderRadius: (swidth * 0.03) / 2,
  },
  fontstyle: {
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    fontSize: sheigth * 0.02,
    marginBottom: sheigth * 0.01,
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
  fontotp: {
    fontSize: sheigth * 0.02,
    color: 'red',
  },
  otpview: {
    alignItems: 'center',
    marginTop: sheigth * 0.06,
  },
});
