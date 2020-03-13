import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { homeTabsOptions, screenOptions } from './NavigatorOptions';
import HomeTabs from './TabNavigator/HomeTabs';
import IntroScreen from '../screens/Intro';

export type StackParamList = {
  HomeTabs: undefined;
  Intro: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={homeTabsOptions}/>
      <Stack.Screen name="Intro" component={IntroScreen} />
    </Stack.Navigator>
  )
};

export default Navigator;