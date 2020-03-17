import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../../NavigationStack/HomeStack';
import { screenOptions, tabBarOptions } from './NavigatorOptions';

export type RootTabsParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
    </Tab.Navigator>
  )
};

export default RootTab;