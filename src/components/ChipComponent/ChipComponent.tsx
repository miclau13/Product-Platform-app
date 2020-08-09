import React from 'react';
import { Button, ButtonProps, Icon } from 'react-native-elements';

import styles from './styles';

interface ChipComponentProps extends ButtonProps {
  isClose?: boolean;
}

const ChipComponent: React.ComponentType<ChipComponentProps> = (props) => {
  const { disabled, isClose, icon, onPress, ...buttonProps } = props;

  const [isSelected, setIsSelected] = React.useState(false);

  const onButtonPress = React.useCallback((event) => {
    if (disabled) {
      return;
    }
    setIsSelected(selected => !selected);
    onPress(event);
  }, [disabled, onPress]);

  const buttonIcon = React.useMemo(() => {
    if (icon) {
      return icon;
    };
    return (
      <Icon
        name={!isClose ? "check" : "close"}
        size={18}
        color={'rgba(0,0,0, 0.87)'}
        containerStyle={{ marginRight: 4 }}
      />
    )
  }, [icon]);

  return (
    <Button
      buttonStyle={[styles.button, isSelected && styles.selected]}
      containerStyle={[styles.container]}
      icon={(isSelected || isClose) && buttonIcon}
      titleStyle={[styles.title]}
      onPress={onButtonPress}
      { ...buttonProps }
    />
  )
}; 

export default ChipComponent;