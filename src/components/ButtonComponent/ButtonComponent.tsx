import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';

import styles from './styles';

interface ButtonComponentProps extends ButtonProps {
}

const ButtonComponent: React.ComponentType<ButtonComponentProps> = (props) => {
  const { ...buttonProps } = props;
  return (
    <Button
      buttonStyle={styles.button}
      containerStyle={styles.container}
      titleStyle={styles.title}
      { ...buttonProps }
    />
  )
}; 

export default ButtonComponent;