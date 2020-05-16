import React from 'react';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

import strings from './strings';
import mapping from '../../languages/CN/mapping';

const options: RouteConfig<BarCodeScannerStackParamList, "ProductSearchMultiSelect", NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation, route } = props;
  const headerTitle = mapping[strings['title']];
  const handleHeaderLeftOnPress = () => {
    const selectedProductId = route?.params?.selectedProductId || [];
    route.params["handleProductSelected"](selectedProductId);
    navigation.goBack();
  };
  return {
    headerLeft: (props) => {
      return (
        <HeaderBackButton
          {...props}
          onPress={handleHeaderLeftOnPress}
        />
      )
    },
    headerShown: true,
    headerTitle: headerTitle,
  }
};

export default options;