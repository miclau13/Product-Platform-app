import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { RootStackParamList } from './RootStack';
import { headerPrimaryColor } from '../../../styles';

export const screenOptions: StackNavigationOptions | ((props: {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
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
