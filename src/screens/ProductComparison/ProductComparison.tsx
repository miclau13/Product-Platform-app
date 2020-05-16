import { map, pick } from 'lodash';
import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { TileProps } from 'react-native-elements';
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

type ProductComparisonScreenRouteProp = RouteProp<BarCodeScannerStackParamList, "ProductComparison">;

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
  productComparisonInfoList: ProductInfoList[];
};

const ProductComparison: React.ComponentType<Props> = (props) => {
  const { navigation, route } = props;
  const { product, productComparisonInfoList } = route.params;

  const [loading] = React.useState(false);

  const handlePlusIconOnPress = React.useCallback(() => {
    navigation.navigate("ProductSearchMultiSelect", { handleProductSelected });
  }, [navigation]);

  const handleProductSelected = React.useCallback(async (selectedProductId: string[]) => {
    console.log("handleProductSelected called product", product)
    console.log("handleProductSelected called selectedProductId", selectedProductId)
    console.log(`http://localhost:5000/product-comparisons/update/${product.id}`)
    // const response = await fetch(`https://miclo1.azurewebsites.net/products`, {
    const response = await fetch(`http://192.168.0.106:5000/product-comparisons/${product.id}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comparisonIdList: selectedProductId
      }),
    });
    const result = await response.json() || [];
    console.log("result",result)
  }, [product]);

  const productInfoList = React.useMemo<ProductInfoList>(() => map(pick(product, ["name", "labels", "origin", "price"]), (value, key) => {
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
      productComparisonInfoList={productComparisonInfoList}
    />
  )
};

export default React.memo(ProductComparison);