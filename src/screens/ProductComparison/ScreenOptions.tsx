import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';

import strings from './strings';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import { headerPrimaryColor } from '../../styles';
import mapping from '../../languages/CN/mapping';

const options: RouteConfig<BarCodeScannerStackParamList, keyof BarCodeScannerStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation } = props;
  const handleHeaderRightOnPress: IconProps['onPress'] = () => {
    navigation.navigate("ProductSearch");
  };
  return {
    // headerRight: (props) => {
    //   return (
    //     <Icon
    //       onPress={handleHeaderRightOnPress}
    //       name='add'
    //       size={32}
    //       underlayColor={headerPrimaryColor}
    //     />
    //   )
    // },
    title: mapping[strings["title"]],
  };
};

export default options;