import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import IntroScreen, { options as IntroScreenOptions } from "../../../screens/Intro";
import HomeScreen, { options as HomeScreenOptions } from "../../../screens/Home";
import ProductComparisonScreen, { options as ProductComparisonScreenOptions } from "../../../screens/ProductComparison";
import ProductInfoScreen, { options as ProductInfoScreenOptions } from "../../../screens/ProductInfo";

export type HomeStackParamList = {
  Intro: undefined;
  Home: undefined;
  ProductComparison: undefined;
  ProductInfo: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={HomeScreenOptions}/>
      <HomeStack.Screen name="ProductComparison" component={ProductComparisonScreen} options={ProductComparisonScreenOptions}/>
      <HomeStack.Screen name="ProductInfo" component={ProductInfoScreen} options={ProductInfoScreenOptions}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;