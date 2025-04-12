import {Pressable} from 'react-native';
import {CustomLabel} from './CustomLabel';

/* eslint-disable prettier/prettier */
const CustomButton = (props) => {
  const {label, onPress} = props;
  return (
    <Pressable onPress={onPress}>
      <CustomLabel label={label} />
    </Pressable>
  )
}
export {CustomButton};
