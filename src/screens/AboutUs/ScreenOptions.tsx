import React from 'react';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import strings  from './strings';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

const options: RouteConfig<BarCodeScannerStackParamList, "AboutUs", NavigationState, object, EventMapBase>['options'] = (props) => {
  return {
    title: strings.title,
  }
};

export default options;