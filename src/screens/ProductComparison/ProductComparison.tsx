import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { TileProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import {  } from './utils';
import ProductComparisonView from './ProductComparisonView';
import LoadingComponent from '../../components/LoadingComponent';
import { HomeStackParamList } from '../../navigator/NavigationStack/HomeStack';

type ProductComparisonScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductComparison'
>;

type Props = {
  navigation: ProductComparisonScreenNavigationProp;
};

export type ProductComparison = TileProps;

export interface ProductComparisonViewProps {
  handlePlusIconOnPress: TouchableWithoutFeedbackProps['onPress'];
};

const ProductComparison: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);

  const handlePlusIconOnPress = React.useCallback(() => {
    navigation.navigate("ProductSearch");
  }, [navigation]);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductComparisonView handlePlusIconOnPress={handlePlusIconOnPress}/>
  )
};

export default React.memo(ProductComparison);