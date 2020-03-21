import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import BarCodeScannerScreen, { options as BarCodeScannerScreenOptions } from "../../../screens/BarCodeScanner";

export type BarCodeScannerStackParamList = {
  BarCodeScanner: undefined;
};

const BarCodeScannerStack = createStackNavigator<BarCodeScannerStackParamList>();

const BarCodeScannerStackScreen = () => {
  return (
    <BarCodeScannerStack.Navigator
      initialRouteName="BarCodeScanner"
      screenOptions={screenOptions}
    >
      <BarCodeScannerStack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} options={BarCodeScannerScreenOptions}/>
    </BarCodeScannerStack.Navigator>
  );
};

export default BarCodeScannerStackScreen;