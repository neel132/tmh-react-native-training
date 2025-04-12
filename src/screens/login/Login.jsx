/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { Keyboard, useWindowDimensions, View } from "react-native"
import { CustomButton, CustomInput, CustomLabel, Spacer } from "../../components";
import { loginStyles as styles } from "./login.style";
import { useNavigation } from "@react-navigation/native";
import { HOME } from "../../navigation/routes";
const Login = () => {
  const [inputs, setUserInputs] = useState({email: '', password: ''});
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation();
  const userLoginForm = [
    {
      value: inputs.email,
      onChangeText: ((text) => handleChange('email', text)),
      placeholder: 'Enter email id',
      autoCapitalize: 'none',
      keyboardType: 'email-address',
    },
    {
      value: inputs.password,
      onChangeText: ((text) => handleChange('password', text)),
      placeholder: 'Enter password',
      keyboardType: 'visible-password',
      secureTextEntry: true,
    },
  ];
  const handleChange = (key, value) => {
    setUserInputs({...inputs, [key]: value});
  };
  const onSubmit = () => {
    Keyboard.dismiss();
    navigate(HOME);
    console.log("user email", inputs.email);
    console.log("user password", inputs.password);
    console.log("Form is submitted...");
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomLabel label="User Login" />
      </View>
      <View style={styles.formContainer}>
        {userLoginForm.map((val, ind) => (
          <CustomInput
            {...val}
            style={{...styles.inputContainer, width: width * 0.8}}
            key={ind}
          />
        ))}
        <Spacer space={15} />
        <View style={styles.headerContainer}>
          <CustomButton label={'Sign In'} onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};
export {Login};
