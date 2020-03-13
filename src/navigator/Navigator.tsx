import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './NavigationStack/HomeStack';
import { IntroTabOptions, screenOptions, tabBarOptions } from './NavigatorOptions';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Info" component={HomeStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
    </Tab.Navigator>
  )
};

export default Navigator;