import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';

import strings from './strings';
import { SearchStackParamList } from '../../navigator/NavigationStack/SearchStack';
import { headerPrimaryColor } from '../../styles';

const options: RouteConfig<SearchStackParamList, keyof SearchStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation, route } = props;
  const handleHeaderRightOnPress: IconProps['onPress'] = () => {
    navigation.navigate("AddProduct");
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
    title: strings.title,
  };
};

export default options;