import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack"; 

import { CameraStackParamList } from './CameraStack';
import { headerPrimaryColor } from '../../../styles';

export const screenOptions: StackNavigationOptions | ((props: {
  route: RouteProp<CameraStackParamList, keyof CameraStackParamList>;
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
