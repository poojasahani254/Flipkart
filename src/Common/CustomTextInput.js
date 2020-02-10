import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {BACKGROUND} from '../Colors/Colors';
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const CustomTextinput = props => {
  const [isfoucsed, setfoucs] = useState(false);
  const {label} = props;
  const {container, textinputstyle} = styles;

  function handlefoucs() {
    setfoucs(true);
  }

  function handleblur() {
    setfoucs(false);
  }

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: !isfoucsed ? sheigth * 0.04 : 0,
    fontSize: !isfoucsed ? sheigth * 0.03 : sheigth * 0.02,
    color: !isfoucsed ? '#000' : '#aaa',
  };
  return (
    <View style={container}>
      {props.changelabel ? (
        <Text
          style={[labelStyle, {top: sheigth * 0.01, fontSize: sheigth * 0.02}]}>
          {label}
        </Text>
      ) : (
        <Text style={labelStyle}>{label}</Text>
      )}

      <TextInput
        {...props}
        style={textinputstyle}
        onFocus={handlefoucs}
        onBlur={handleblur}
        blurOnSubmit
      />
    </View>
  );
};
export default CustomTextinput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: sheigth * 0.03,
    // backgroundColor: 'red'
  },
  textinputstyle: {
    // backgroundColor: 'red',
    height: sheigth * 0.06,
    fontSize: sheigth * 0.02,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
});
