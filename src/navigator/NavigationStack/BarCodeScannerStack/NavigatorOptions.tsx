import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { BarCodeScannerStackParamList } from './BarCodeScannerStack';
import { headerPrimaryColor } from '../../../styles';

export const screenOptions: StackNavigationOptions | ((props: {
  route: RouteProp<BarCodeScannerStackParamList, keyof BarCodeScannerStackParamList>;
  navigation: any;
}) => StackNavigationOptions) = (props) => {
  const { route } = props;
  return ({
    headerBackTitleVisible: false,
    headerStyle: { backgroundColor: headerPrimaryColor },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    headerTintColor: 'black',
    // headerShown: false,
  })
};
