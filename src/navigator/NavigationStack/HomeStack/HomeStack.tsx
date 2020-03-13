import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import HomeScreen, { options as HomeScreenOptions } from "../../../screens/Home";

export type HomeStackParamList = {
  Home: undefined;
  Intro1: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      headerMode="none"
      // screenOptions={screenOptions}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;