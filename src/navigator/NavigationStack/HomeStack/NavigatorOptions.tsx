import React from "react";
import { Icon } from "react-native-elements";
import { Route } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { HomeStackParamList } from './HomeStack';

export const screenOptions: StackNavigationOptions | ((props: {
  route: Pick<Route<keyof HomeStackParamList>, "key" | "name">;
  navigation: any;
}) => StackNavigationOptions) = (props) => {
  const { route } = props;
  return ({
    title: 'Crazyee'
  })
};
