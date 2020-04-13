import React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

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

  const handleScanIconOnPress = React.useCallback(() => {
    if (currenScreen === "BarCodeScanner") return;
    navigation.navigate("BarCodeScanner");
  }, [currenScreen, navigation]);

  const handleOnPress = React.useCallback(() => {
  }, [open]);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'menu-open' : 'menu'}
          actions={[
            { icon: 'history', label: 'History', onPress: handleHistoryIconOnPress},
            { icon: 'more', label: 'More', onPress: handleMoreIconOnPress},
            { icon: 'barcode-scan', label: 'Scan', onPress: handleScanIconOnPress},
          ]}
          onStateChange={_onStateChange}
          onPress={handleOnPress}
          visible={true}
        />
      </Portal>
  </Provider>
  )
}; 

export default FloatingMenuComponent;