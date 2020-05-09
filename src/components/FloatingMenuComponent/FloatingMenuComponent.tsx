import React from 'react';
import { FAB } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import mapping from '../../languages/CN/mapping';

type ScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  keyof BarCodeScannerStackParamList
>;

export interface FloatingMenuProps {
  currenScreen: keyof BarCodeScannerStackParamList;
  navigation: ScreenNavigationProp;
};

const FloatingMenuComponent: React.ComponentType<FloatingMenuProps> = (props) => {
  const { currenScreen, navigation } = props;
  const [open, setOpen] = React.useState(false);

  const _onStateChange = React.useCallback(({ _open }) => {
    setOpen(!open);
  }, [open]);

  const handleHistoryIconOnPress = React.useCallback(() => {
    if (currenScreen === "Records") return;
    navigation.navigate("Records");
  }, [currenScreen, navigation]);

  const handleMoreIconOnPress = React.useCallback(() => {
    if (currenScreen === "More") return;
    navigation.navigate("More");
  }, [currenScreen, navigation]);

  const handlePlusIconOnPress = React.useCallback(() => {
    if (currenScreen === "AddProduct") return;
    navigation.navigate("AddProduct");
  }, [currenScreen, navigation]);

  const handleScanIconOnPress = React.useCallback(() => {
    if (currenScreen === "BarCodeScanner") return;
    navigation.navigate("BarCodeScanner");
  }, [currenScreen, navigation]);

  const handleOnPress = React.useCallback(() => {
  }, [open]);

  return (
    <FAB.Group
      open={open}
      icon={open ? 'menu-open' : 'menu'}
      actions={[
        { icon: 'barcode-scan', label: mapping['Scan'], onPress: handleScanIconOnPress},
        { icon: 'history', label: mapping['History'], onPress: handleHistoryIconOnPress},
        { icon: 'plus', label: mapping['Add'], onPress: handlePlusIconOnPress},
        { icon: 'more', label: mapping['More'], onPress: handleMoreIconOnPress},
      ]}
      onStateChange={_onStateChange}
      onPress={handleOnPress}
      visible={true}
    />
  )
}; 

export default FloatingMenuComponent;