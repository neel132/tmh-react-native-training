/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

const Spacer = (props) => {
  const {space} = props;
  return <View style={{margin: space}} />;
};

export {Spacer};
