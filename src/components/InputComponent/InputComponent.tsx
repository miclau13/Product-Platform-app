import React from 'react';
import { Icon, Input, InputProps } from 'react-native-elements';

import styles from './styles';

export interface InputComponentProps extends InputProps {};

const InputComponent: React.ComponentType<InputProps> = (props) => {
  const { errorMessage, value, ...inputProps } = props;
  return (
    <Input
      errorMessage={value ? '' : errorMessage}   
      errorProps={{ allowFontScaling: false }}
      inputContainerStyle={[styles.inputContainer, !value && errorMessage && styles.errorBorder]}
      labelStyle={styles.label}
      labelProps={{ allowFontScaling: false }}
      renderErrorMessage={false}
      value={value}
      allowFontScaling={false}
      { ...inputProps }
    />
  )
}; 

export default InputComponent;