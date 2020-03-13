import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';

import IntroScreen,  { options as IntroScreenOptions } from "../../../screens/Intro";

export type IntroStackParamList = {
  Intro: undefined;
};

const IntroStack = createStackNavigator<IntroStackParamList>();

const IntroStackScreen = () => {
  return (
    <IntroStack.Navigator
      initialRouteName="Intro"
      screenOptions={screenOptions}
    >
      <IntroStack.Screen name="Intro" component={IntroScreen} options={IntroScreenOptions}/>
    </IntroStack.Navigator>
  );
};

export default IntroStackScreen;