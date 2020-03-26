import React from 'react';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

const options: RouteConfig<BarCodeScannerStackParamList, keyof BarCodeScannerStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  return {
    title: 'Product Search'
  }
};

export default options;