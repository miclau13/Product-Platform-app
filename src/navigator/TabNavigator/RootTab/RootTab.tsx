import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BarCodeScannerStack from '../../NavigationStack/BarCodeScannerStack';
import HomeStack from '../../NavigationStack/HomeStack';
import RecordsStack from '../../NavigationStack/RecordsStack';
import SearchStack from '../../NavigationStack/SearchStack';
import { screenOptions, tabBarOptions } from './NavigatorOptions';

export type RootTabsParamList = {
  BarCodeScannerStack: undefined;
  CameraStack: undefined;
  HomeStack: undefined;
  RecordsStack: undefined;
  SearchStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const RootTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="SearchStack"
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
    >
      {/* <Tab.Screen name="HomeStack" component={HomeStack} /> */}
      {/* <Tab.Screen name="BarCodeScannerStack" component={BarCodeScannerStack} /> */}
      {/* <Tab.Screen name="RecordsStack" component={RecordsStack} /> */}
      <Tab.Screen name="SearchStack" component={SearchStack} />
    </Tab.Navigator>
  )
};

export default RootTab;