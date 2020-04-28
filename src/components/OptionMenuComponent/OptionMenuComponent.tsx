import React from 'react';
import { GestureResponderEvent, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Icon, IconProps } from 'react-native-elements';
import { Menu } from 'react-native-paper';

interface MenuIconItemProps {
  onPress?: (event: GestureResponderEvent) => void;
  iconProps?: IconProps;
};

const MenuItem: React.ComponentType<MenuIconItemProps> = (props) => {
  const { iconProps, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginVertical: 4 }}
    >
      <Icon {...iconProps} />
    </TouchableOpacity>
  )
}

export interface OptionMenuProps {
  containerStyle?: StyleProp<ViewStyle>;
  menuItemList?: MenuIconItemProps[];
};

const OptionMenuComponent: React.ComponentType<OptionMenuProps> = (props) => {
  const { containerStyle, menuItemList } = props;
  const [open, setOpen] = React.useState(false);

  const openMenu = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeMenu = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <View
      style={containerStyle}
    >
      <Menu
        visible={open}
        onDismiss={closeMenu}
        anchor={
          <Icon 
            color='#00aced'
            name="dots-horizontal"
            size={40}
            onPress={openMenu}
            type='material-community'
            underlayColor="grey"
          />
        }
        style={{ top: 50, right: 0,  width: 100 }}
        contentStyle={{ width: 100 }}
      >
        {menuItemList.map((item, index) => {
          return (
            // <Menu.Item 
            //   icon={item.icon}
            //   key={index} 
            //   onPress={item.onPress}  
            //   // title=" hihi"
            //   style={{ justifyContent: 'flex-end'}}
            // />
            <MenuItem 
              key={index} 
              onPress={item.onPress}  
              iconProps={item.iconProps}
            />
          )
        })}
      </Menu>
    </View>
  )
}; 

export default OptionMenuComponent;