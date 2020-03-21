import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BarCodeScannerStack from '../../NavigationStack/BarCodeScannerStack';
import CameraStack from '../../NavigationStack/CameraStack';
import HomeStack from '../../NavigationStack/HomeStack';
import { screenOptions, tabBarOptions } from './NavigatorOptions';

export type RootTabsParamList = {
  BarCodeScannerStack: undefined;
  CameraStack: undefined;
  HomeStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const RootTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="BarCodeScannerStack" component={BarCodeScannerStack} />
      {/* <Tab.Screen name="CameraStack" component={CameraStack} /> */}
    </Tab.Navigator>
  )
};

export default RootTab;