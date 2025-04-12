/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import {CustomWebview } from '../../components';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <CustomWebview uri='https://tmc.gov.in/' />
    </View>
  )
}
export {Profile};
