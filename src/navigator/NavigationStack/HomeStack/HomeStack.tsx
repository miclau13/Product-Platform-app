import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';

import HomeScreen, { options as HomeScreenOptions } from "../../../screens/Home";
import IntroScreen,  { options as IntroScreenOptions } from "../../../screens/Intro";

export type HomeStackParamList = {
  Home: undefined;
  Intro: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Intro"
      screenOptions={screenOptions}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions}/>
      <HomeStack.Screen name="Intro" component={IntroScreen} options={IntroScreenOptions} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;