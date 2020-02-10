import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ALlHeader from '../../Common/AllPageHeader';
import CustomTextinput from '../../Common/CustomTextInput';
import Icon from 'react-native-vector-icons/Fontisto';
import {BACKGROUND} from '../../Colors/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {
  GetMatchedData,
  UpdateCustomer,
  UpdateCustomerEmail,
  setPassword,
} from '../../Action/LoginAction';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

class App extends Component {
  componentDidMount(): void {
    this.getdata();
  }

  constructor() {
    super();
    this.state = {
      radioSelected: '',
      isview: false,
      value: '',
      userdata: [],
      firstname: '',
      lastname: '',
      emailAddress: '',
      message: '',
      password: '',
    };
  }

  getdata = async () => {
    this.value = await AsyncStorage.getItem('data');
    // console.log(JSON.stringify(this.value));
    const obj = {
      PhoneNumber: JSON.parse(this.value).PhoneNumber,
    };
    this.props
      .GetMatchedData(obj)
      .then(response => {
        this.setState({
          userdata: response,
          radioSelected: response.Gender,
          firstname: response.FirstName,
          lastname: response.LastName,
          emailAddress: response.EmailAddress,
          password: response.Password,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  radiobtnclick = id => {
    this.setState({
      radioSelected: id,
      isview: false,
    });
  };

  rdbchangestate = () => {
    this.setState({
      isview: true,
    });
  };

  _Validation = () => {
    const {firstname, lastname} = this.state;

    var name = /^[A-Za-z]+$/;

    // console.log('Firstname' + firstname);
    if (name.test(firstname) == false || firstname == undefined) {
      this.setState({
        message: 'First Name Must contain only alphabets and Non Empty',
      });
    } else if (name.test(lastname) == false || lastname == undefined) {
      this.setState({
        message: 'Last Name Must contain only alphabets and Non Empty',
      });
    } else {
      this._onPress();
    }
  };

  _onPress = () => {
    const {
      firstname,
      lastname,
      emailAddress,
      userdata,
      radioSelected,
    } = this.state;
    this.setState({message: ''});
    const obj = {
      _id: userdata._id,
      EmailAddress: emailAddress,
      FirstName: firstname,
      LastName: lastname,
      Gender: radioSelected,
    };

    this.props
      .UpdateCustomer(obj)
      .then(response => {
        if (response.data.status === 200) {
          this.props.navigation.navigate('MyAccount');
        } else {
          alert(response.data.Data);
        }
        console.log('Updated Response', response.data.Data);
      })
      .catch(err => {
        console.log('Error While updating Details', err);
      });
  };

  _EmailValidation = () => {
    const {emailAddress} = this.state;
    var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email.test(emailAddress) == false || emailAddress == undefined) {
      this.setState({
        message: 'Please Enter Valid Email Address',
      });
    } else {
      this._EmailUpdate();
    }
  };

  _EmailUpdate = () => {
    const {emailAddress, userdata} = this.state;
    this.setState({message: ''});
    const obj = {
      _id: userdata._id,
      EmailAddress: emailAddress,
    };

    this.props
      .UpdateCustomerEmail(obj)
      .then(response => {
        if (response.data.status === 200) {
          this.props.navigation.navigate('MyAccount');
        } else {
          alert(response.data.Data);
        }
        console.log('Updated Email', response.data.Data);
      })
      .catch(err => {
        console.log('Error While updating Email', err);
      });
  };

  _SetPassword = () => {
    const {password} = this.state;
    let passwordReg = /^[A-Za-z]\w{1,7}$/;
    if (passwordReg.test(password) === false || password == '') {
      alert(
        'Password Length Must be upto 7 character and must contain one uppercase and one lowercase and one number ',
      );
    } else {
      this._SetPasswordAPi();
    }
  };

  _SetPasswordAPi = () => {
    const {password, userdata} = this.state;
    const obj = {
      _id: userdata._id,
      Password: password,
    };

    this.props
      .setPassword(obj)
      .then(response => {
        if (response.data.status === 200) {
          this.componentDidMount();
        } else {
          alert(response.data.Data);
        }
      })
      .catch(err => {
        console.log('Error While Set Password', err);
      });
  };

  render() {
    const {
      container,
      profileview,
      imgview,
      orview,
      fontstyle,
      textviewcolor,
      updateform,
      submitebtnview,
      submitetext,
      mobileview,
      bottomcontentview,
      fonttext,
      listtext,
      listview,
      updatemailview,
      updatemailfont,
    } = styles;

    return (
      <SafeAreaView style={container}>
        <View style={container}>
          <ALlHeader
            HeaderText={'Update Profile'}
            onPress={() => {
              this.props.navigation.navigate('MyAccount');
            }}
          />
          <View style={profileview}>
            {this.state.isview ||
            this.state.radioSelected === '' ||
            this.state.radioSelected === undefined ? (
              <View style={imgview}>
                <TouchableOpacity onPress={() => this.radiobtnclick('Female')}>
                  <Icon name={'female'} size={sheigth * 0.1} />
                </TouchableOpacity>
                <View style={orview}>
                  <Text style={fontstyle}>Or</Text>
                </View>
                <TouchableOpacity onPress={() => this.radiobtnclick('male')}>
                  <Icon name={'male'} size={sheigth * 0.1} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={imgview}>
                {this.state.radioSelected === 'Female' ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.rdbchangestate();
                    }}>
                    <Icon name={'female'} size={sheigth * 0.1} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.rdbchangestate();
                    }}>
                    <Icon name={'male'} size={sheigth * 0.1} />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
          <KeyboardAwareScrollView>
            <View style={updateform}>
              <View style={textviewcolor}>
                <CustomTextinput
                  label="First Name"
                  value={this.state.firstname}
                  onChangeText={text => {
                    this.setState({firstname: text});
                  }}
                  keyboardType={'default'}
                  changelabel={this.state.firstname == undefined ? false : true}
                />
              </View>
              <View style={textviewcolor}>
                <CustomTextinput
                  value={this.state.lastname}
                  label="Last Name"
                  onChangeText={text => {
                    this.setState({lastname: text});
                  }}
                  keyboardType={'default'}
                  changelabel={this.state.lastname == undefined ? false : true}
                />
              </View>
            </View>
            {this.state.message !== '' ? (
              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'red', fontSize: sheigth * 0.01}}>
                  {this.state.message}
                </Text>
              </View>
            ) : (
              <></>
            )}

            <TouchableOpacity
              style={submitebtnview}
              onPress={() => {
                this._Validation();
              }}>
              <Text style={submitetext}>Submit</Text>
            </TouchableOpacity>
            <View style={[textviewcolor]}>
              <CustomTextinput
                label="Email Id"
                value={this.state.emailAddress}
                keyboardType={'email-address'}
                onChangeText={text => {
                  this.setState({emailAddress: text});
                }}
                changelabel={
                  this.state.emailAddress == undefined ? false : true
                }
              />
              <TouchableOpacity
                style={updatemailview}
                onPress={() => {
                  this._EmailValidation();
                }}>
                <Text style={updatemailfont}>Update</Text>
              </TouchableOpacity>
            </View>
            {this.state.userdata.Password == undefined && (
              <View style={[textviewcolor]}>
                <CustomTextinput
                  label="Password"
                  value={this.state.password}
                  onChangeText={text => {
                    this.setState({password: text});
                  }}
                  changelabel={this.state.password == undefined ? false : true}
                />
                <TouchableOpacity
                  style={updatemailview}
                  onPress={() => {
                    this._SetPassword();
                  }}>
                  <Text style={updatemailfont}>Update</Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={bottomcontentview}>
              <View style={mobileview}>
                <Text style={{color: 'gray'}}>Mobile Number</Text>
                <Text style={fonttext}>{this.state.userdata.PhoneNumber}</Text>
              </View>
              <TouchableOpacity
                style={listview}
                onPress={() => {
                  this.props.navigation.navigate('ChangePassword');
                }}>
                <Text style={listtext}>Change Passoword</Text>
              </TouchableOpacity>
              <TouchableOpacity style={listview}>
                <Text style={listtext}>Deactivate Account</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  {
    GetMatchedData,
    UpdateCustomer,
    UpdateCustomerEmail,
    setPassword,
  },
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:BACKGROUND
  },
  profileview: {
    height: sheigth * 0.25,
    backgroundColor: BACKGROUND,
    elevation: 5,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 1.0,
  },
  imgview: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sheigth * 0.08,
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
  textviewcolor: {
    // backgroundColor:'green',
    height: sheigth * 0.11,
    marginLeft: swidth * 0.03,
    marginRight: swidth * 0.03,
  },
  updateform: {
    // flex: 1,
    height: sheigth * 0.23,
    // backgroundColor:'green'
  },
  submitebtnview: {
    // backgroundColor:'red',
    height: sheigth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitetext: {
    color: BACKGROUND,
    fontSize: sheigth * 0.03,
    fontFamily: 'Roboto-Medium',
  },
  mobileview: {
    // backgroundColor: 'pink',
    height: sheigth * 0.08,
    marginTop: sheigth * 0.02,
    marginLeft: swidth * 0.03,
  },
  bottomcontentview: {
    flex: 1,
    // backgroundColor: 'red'
  },
  fonttext: {
    color: 'black',
    marginTop: sheigth * 0.004,
    marginLeft: swidth * 0.01,
    fontSize: sheigth * 0.02,
    fontFamily: 'Roboto-Regular',
  },
  listtext: {
    fontSize: sheigth * 0.02,
    fontFamily: 'Roboto-Regular',
  },
  listview: {
    height: sheigth * 0.04,
    // backgroundColor:'red',
    justifyContent: 'center',
    marginLeft: swidth * 0.03,
  },
  updatemailview: {
    position: 'absolute',
    right: 0,
    bottom: sheigth * 0.03,
  },
  updatemailfont: {
    color: 'green',
    fontFamily: 'Roboto-Bold',
    fontSize: sheigth * 0.02,
  },
});
