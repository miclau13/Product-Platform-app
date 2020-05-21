import React from 'react';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import strings  from './strings';

const options: RouteConfig<BarCodeScannerStackParamList, "Comments", NavigationState, object, EventMapBase>['options'] = (props) => {
  return {
    title: strings.title,
  }
};

export default options;