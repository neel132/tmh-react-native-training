/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text } from "react-native";
const CustomLabel = (props) => {
  const {label, ...rest} = props;
  return (
    <Text {...rest} style={styles.label}>{label}</Text>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export {CustomLabel};
