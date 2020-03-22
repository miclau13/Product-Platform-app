import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';

import strings from './strings';
import { RecordsStackParamList } from '../../navigator/NavigationStack/RecordsStack';
import { headerPrimaryColor } from '../../styles';

const options: RouteConfig<RecordsStackParamList, keyof RecordsStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation } = props;
  const handleHeaderRightOnPress: IconProps['onPress'] = () => {
    navigation.navigate("AddProduct");
  };
  return {
    headerRight: (props) => {
      return (
        <Icon
          onPress={handleHeaderRightOnPress}
          name='add'
          size={32}
          underlayColor={headerPrimaryColor}
        />
      )
    },
    title: strings.title,
  };
};

export default options;