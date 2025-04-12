/* eslint-disable prettier/prettier */

import { TextInput } from "react-native"
const CustomInput = (props) => {
  const {...rest} = props;
  return (
    <TextInput
      numberOfLines={1}
      placeholderTextColor={"gray"}
      {...rest}
    />
  );
};
export {CustomInput};
