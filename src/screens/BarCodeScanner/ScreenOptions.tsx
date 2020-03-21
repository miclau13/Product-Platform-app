import React from 'react';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { CameraStackParamList } from '../../navigator/NavigationStack/CameraStack';

const options: RouteConfig<CameraStackParamList, keyof CameraStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  return {
    headerLeft: () => null
  }
};

export default options;