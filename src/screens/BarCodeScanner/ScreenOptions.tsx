import React from 'react';
import { ButtonProps, Icon, IconProps } from 'react-native-elements';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack'
import { headerPrimaryColor } from '../../styles';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

import mapping from '../../languages/CN/mapping';

const options: RouteConfig<BarCodeScannerStackParamList, keyof BarCodeScannerStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation, route } = props;
  const headerTitle = (route.params && mapping[route.params["headerTitle"]]) || mapping["Scanner"];
  const handleHeaderRightOnPress: IconProps['onPress'] = () => {
    navigation.navigate("Intro");
  };

  return {
    headerLeft: () => {},
    headerRight: (props) => {
      if (headerTitle !== mapping["Scanner"]) return;
      return (
        <Icon
          containerStyle={{ marginRight: 16 }}
          onPress={handleHeaderRightOnPress}
          name="info-outline"
          size={36}
          underlayColor={headerPrimaryColor}
        />
      )
    },
    // title: "Scanner",
    headerShown: true,
    headerTitle: headerTitle,
  }
};

export default options;