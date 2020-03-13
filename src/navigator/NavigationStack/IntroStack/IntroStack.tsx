import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';

import IntroScreen,  { options as IntroScreenOptions } from "../../../screens/Intro";
import Intro1Screen,  { options as Intro1ScreenOptions } from "../../../screens/Intro1";

export type IntroStackParamList = {
  Intro: undefined;
  Intro1: undefined;
};

const IntroStack = createStackNavigator<IntroStackParamList>();

const IntroStackScreen = () => {
  return (
    <IntroStack.Navigator
      initialRouteName="Intro1"
      screenOptions={screenOptions}
    >
      <IntroStack.Screen name="Intro" component={IntroScreen} options={IntroScreenOptions}/>
      <IntroStack.Screen name="Intro1" component={Intro1Screen} options={Intro1ScreenOptions}/>
    </IntroStack.Navigator>
  );
};

export default IntroStackScreen;