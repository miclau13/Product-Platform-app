import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';

import strings from './strings';
import { HomeStackParamList } from '../../navigator/NavigationStack/HomeStack';
import { headerPrimaryColor } from '../../styles';

const options: RouteConfig<HomeStackParamList, keyof HomeStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation } = props;
  const handleHeaderRightOnPress: IconProps['onPress'] = () => {
    console.log("Pressed")
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