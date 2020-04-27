import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { PickerProps } from 'react-native-picker-select';

import DropdownComponent from '../DropdownComponent';

import styles from './styles';

export interface DropdownInputComponentProps extends PickerProps {
  label: string;
}

const DropdownInputComponent: React.ComponentType<DropdownInputComponentProps> = (props) => {
  const { 
    label,
    onDonePress,
    onValueChange,
    value,
    ...inputProps
  } = props;
  return (
    <View style={styles.dropDownContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ paddingVertical: 4 }} />
      <DropdownComponent
        items={[
          { label: 'Mask', value: 'mask' },
          { label: 'Sanitizer', value: 'sanitizer' },
        ]}
        onDonePress={onDonePress}
        onValueChange={onValueChange}
        value={value}
        { ...inputProps }
      />
    </View>
  )
}; 

export default DropdownInputComponent;