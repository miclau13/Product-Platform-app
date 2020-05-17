import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';

import strings from './strings';
import { SearchStackParamList } from '../../navigator/NavigationStack/SearchStack';
import mapping from '../../languages/CN/mapping';

const options: RouteConfig<SearchStackParamList, keyof SearchStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation, route } = props;
  const headerTitle = mapping[strings["title"]];
  return {
    title: headerTitle,
  };
};

export default options;