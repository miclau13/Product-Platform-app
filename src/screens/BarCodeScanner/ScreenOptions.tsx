import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { headerPrimaryColor } from '../../styles';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import mapping from '../../languages/CN/mapping';

const options: RouteConfig<BarCodeScannerStackParamList, keyof BarCodeScannerStackParamList, NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation, route } = props;
  const headerTitle = (route.params && route.params.headerTitle) || "Scanner";
  const handleHeaderRightOnPress: IconProps['onPress'] = () => {
    navigation.navigate("Intro");
  };
  return {
    headerLeft: () => null,
    headerRight: (props) => {
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
    headerTitle: mapping["Scanner"],
  }
};

export default options;