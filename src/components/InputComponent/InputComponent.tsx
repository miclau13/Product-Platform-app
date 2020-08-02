import React from 'react';
import { Icon, Input, InputProps } from 'react-native-elements';

import styles from './styles';

export interface InputComponentProps extends InputProps {};

const InputComponent: React.ComponentType<InputProps> = (props) => {
  const { errorMessage, value, ...inputProps } = props;
  return (
    <Input
      errorMessage={value ? '' : errorMessage}   
      inputContainerStyle={[styles.inputContainer, !value && errorMessage && styles.errorBorder]}
      labelStyle={styles.label}
      renderErrorMessage={false}
      value={value}
      { ...inputProps }
    />
  )
}; 

export default InputComponent;