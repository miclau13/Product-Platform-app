import { map, pick } from 'lodash';
import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { AirbnbRatingProps, ButtonProps, IconProps, ListItemProps,TileProps } from 'react-native-elements';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import {  } from './utils';
import ProductComparisonView from './ProductComparisonView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type ProductComparisonScreenNavigationProp = StackNavigationProp<
BarCodeScannerStackParamList,
  'ProductComparison'
>;

type ProductComparisonScreenRouteProp = RouteProp<BarCodeScannerStackParamList, "ProductInfo">;

type Props = {
  navigation: ProductComparisonScreenNavigationProp;
  route: ProductComparisonScreenRouteProp;
};

type ProductInfoList = {
  key: string;
  // title: string;
  value: string;
}[];

export interface ProductComparisonGridViewProps {
  productInfoList: ProductInfoList;
}

export type ProductComparison = TileProps;

export interface ProductComparisonViewProps {
  handlePlusIconOnPress: TouchableWithoutFeedbackProps['onPress'];
  navigation: ProductComparisonScreenNavigationProp;
  productInfoList: ProductInfoList;
};

const ProductComparison: React.ComponentType<Props> = (props) => {
  const { navigation, route } = props;
  const { product } = route.params;

  const [loading] = React.useState(false);

  const handlePlusIconOnPress = React.useCallback(() => {
    navigation.navigate("BarCodeScanner");
  }, [navigation]);

  const productInfoList = React.useMemo<ProductInfoList>(() => map(pick(product, ["description", "labels", "origin", "price"]), (value, key) => {
    return {
      key, 
      value: value.toString(),
    }
  }), [product]);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductComparisonView 
      handlePlusIconOnPress={handlePlusIconOnPress}
      navigation={navigation}
      productInfoList={productInfoList}
    />
  )
};

export default React.memo(ProductComparison);