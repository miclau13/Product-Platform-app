import React from 'react';
import { Icon } from 'react-native-elements';
import RNPickerSelect, { PickerProps } from 'react-native-picker-select';

import styles, { pickerSelectStyles } from './styles';

const DropdownComponent: React.ComponentType<PickerProps> = (props) => {
  return (
    <RNPickerSelect
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          ...styles.iconContainer
        },
        viewContainer: {
          ...styles.viewContainer
        }
      }}
      useNativeAndroidPickerStyle={false}
      textInputProps={{ underlineColor: 'yellow' }}
      Icon={() => (<Icon name="expand-more"/>)}
      {...props}
    />
  )
}; 

export default DropdownComponent;