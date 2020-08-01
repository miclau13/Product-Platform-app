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
    <View style={containerStyle}>
      <Menu
        visible={open}
        onDismiss={closeMenu}
        anchor={
          <Icon 
            name="dots-horizontal"
            size={40}
            onPress={openMenu}
            type='material-community'
            underlayColor="grey"
          />
        }
        style={{ top: 50,  width: 100, }}
        contentStyle={{ width: 100 }}
      >
        {menuItemList.map((item, index) => {
          return (
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

// import React from 'react';
// import { GestureResponderEvent } from 'react-native';
// import { FAB } from 'react-native-paper';
// // import { Icon, IconProps } from 'react-native-elements';
// import { StackNavigationProp } from '@react-navigation/stack';

// import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
// import mapping from '../../languages/CN/mapping';

// interface Actions {
//   icon: string;
//   label: string;
//   onPress: () => void;
// };

// type ScreenNavigationProp = StackNavigationProp<
//   BarCodeScannerStackParamList,
//   keyof BarCodeScannerStackParamList
// >;

// export interface FloatingMenuProps {
//   // currenScreen: keyof BarCodeScannerStackParamList;
//   // navigation: ScreenNavigationProp;
//   actions?: Actions[];
//   icon?: string;
// };

// const OptionMenuComponent: React.ComponentType<FloatingMenuProps> = (props) => {
//   const { actions, icon } = props;
//   const [open, setOpen] = React.useState(false);

//   const _onStateChange = React.useCallback(({ _open }) => {
//     setOpen(!open);
//   }, [open]);


//   const handleOnPress = React.useCallback(() => {
//   }, [open]);

//   return (
//     <FAB.Group
//       open={open}
//       icon={'dots-horizontal'}
//       actions={actions}
//       onStateChange={_onStateChange}
//       onPress={handleOnPress}
//       visible={true}
//     />
//   )
// }; 

// export default OptionMenuComponent;