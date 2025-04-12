/* eslint-disable prettier/prettier */

import React from 'react';
import { useWindowDimensions } from 'react-native';
import WebView from 'react-native-webview';

const CustomWebview = (props) => {
  const {uri} = props;
  const {width, height} = useWindowDimensions();
  return (
    <WebView
      source={{
        uri,
      }}
      style={{
        width, height: height * 0.8,
      }}
    />
  );
};
export {CustomWebview};
