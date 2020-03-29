import React from 'react';
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
};

const ProductComparison: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductComparisonView />
  )
};

export default React.memo(ProductComparison);