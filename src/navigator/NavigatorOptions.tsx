import React from "react";
import { Icon } from "react-native-elements";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationOptions, BottomTabBarOptions } from "@react-navigation/bottom-tabs"; 

export const IntroTabOptions = {
  tabBarVisible: false
};

export const screenOptions: BottomTabNavigationOptions | ((props: {
  route: RouteProp<Record<string, object>, string>;
  navigation: any;
}) => BottomTabNavigationOptions) = (props) => {
  const { route } = props;
  return ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      };
      return <Icon color={color} name={iconName} size={size} type="material-community" />
    }
  })
};

export const tabBarOptions: BottomTabBarOptions = {
  // activeTintColor: 'tomato',
  // inactiveTintColor: 'gray',
};
