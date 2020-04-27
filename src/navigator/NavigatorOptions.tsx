import React from "react";
import { Route } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { getHeaderTitle } from './utils';
import { StackParamList } from './Navigator';

export const screenOptions: StackNavigationOptions | ((props: {
  route: Pick<Route<keyof StackParamList>, "key" | "name">;
  navigation: any;
}) => StackNavigationOptions) = (props) => {
  const { route } = props;
  return ({
    // title: 'Crazyee'
  })
};

export const homeTabsOptions = (props) => {
  const { route } = props;
  return ({
    headerLeft: null,
    headerTitle: getHeaderTitle(route),
  })
};