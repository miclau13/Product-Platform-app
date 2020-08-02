import React from 'react';
import { View } from 'react-native';
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
  const handleCalculateIconOnPress: IconProps['onPress'] = () => {
    navigation.navigate("Calculator");
  };
  return {
    headerRight: (props) => {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Icon
            onPress={handleCalculateIconOnPress}
            name='calculator'
            size={45}
            type="material-community"
            underlayColor={"grey"}
          />
          <View style={{ marginVertical: 4 }} />
          <Icon
            onPress={handleHeaderRightOnPress}
            name='info-outline'
            size={45}
            underlayColor={"grey"}
          />
        </View>
      )
    },
    title: mapping[strings["title"]],
  };
};

export default options;