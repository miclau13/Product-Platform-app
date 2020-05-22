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
    navigation.navigate("Info");
  };
  return {
    headerRight: (props) => {
      return (
        <Icon
          containerStyle={{ marginRight: 16 }}
          onPress={handleHeaderRightOnPress}
          name='info-outline'
          size={45}
          underlayColor={"grey"}
        />
      )
    },
    title: mapping[strings["title"]],
  };
};

export default options;