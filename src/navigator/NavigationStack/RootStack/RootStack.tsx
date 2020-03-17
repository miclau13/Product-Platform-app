import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import IntroScreen, { options as IntroScreenOptions } from "../../../screens/Intro";

export type RootStackParamList = {
  Intro: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Intro"
      // headerMode="none"
      screenOptions={screenOptions}
    >
      <RootStack.Screen name="Intro" component={IntroScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;