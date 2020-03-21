import React from "react";
import { Icon } from "react-native-elements";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationOptions, BottomTabBarOptions } from "@react-navigation/bottom-tabs"; 

import { RootTabsParamList } from './RootTab';

export const screenOptions: BottomTabNavigationOptions | ((props: {
  route: RouteProp<RootTabsParamList, keyof RootTabsParamList>;
  navigation: any;
}) => BottomTabNavigationOptions) = (props) => {
  const { route } = props;
  return ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'HomeStack') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else if (route.name === 'CameraStack') {
        iconName = focused
          ? 'camera'
          : 'camera-outline';
      }  else if (route.name === 'BarCodeScannerStack') {
        iconName = 'barcode-scan';
      }
      return <Icon color={color} name={iconName} size={size * 1.5} type="material-community" />
    },
    // tabBarVisible: route.name !== "Intro",
    // tabBarLabel: false,
  })
};

export const tabBarOptions: BottomTabBarOptions = {
  showLabel: false,
};
