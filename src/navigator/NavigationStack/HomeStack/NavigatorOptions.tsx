import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { HomeStackParamList } from './HomeStack';
import { headerPrimaryColor } from '../../../styles';

export const screenOptions: StackNavigationOptions | ((props: {
  route: RouteProp<HomeStackParamList, keyof HomeStackParamList>;
  navigation: any;
}) => StackNavigationOptions) = (props) => {
  const { route } = props;
  return ({
    headerBackTitleVisible: false,
    headerStyle: { backgroundColor: headerPrimaryColor },
    headerTintColor: 'black',
    title: 'Crazyee',
  })
};
