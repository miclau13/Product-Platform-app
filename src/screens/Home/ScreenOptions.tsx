import React from 'react';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigator/NavigationStack/HomeStack';

const options: RouteConfig<HomeStackParamList, keyof HomeStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  return {
    headerLeft: () => null
  }
};

export default options;