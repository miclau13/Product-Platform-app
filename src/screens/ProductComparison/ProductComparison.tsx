import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { TileProps } from 'react-native-elements';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import ProductComparisonView from './ProductComparisonView';
import LoadingComponent from '../../components/LoadingComponent';
import { Product, useProductListContext } from '../../context/ProductListContext';
import { useProductComparisonListContext } from '../../context/ProductComparisonListContext';
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

export interface ProductComparisonGridViewProps {
  productInfo: Product;
}

export type ProductComparison = TileProps;

export interface ProductComparisonViewProps {
  handlePlusIconOnPress: TouchableWithoutFeedbackProps['onPress'];
  navigation: ProductComparisonScreenNavigationProp;
  productInfo: Product;
  productComparisonInfoList: Product[];
};

const ProductComparison: React.ComponentType<Props> = (props) => {
  const { navigation, route } = props;
  const { productId } = route.params;
  const { productList: productDataList } = useProductListContext();
  const { refetch, productComparisonList } = useProductComparisonListContext();
  const [loading] = React.useState(false);

  const productInfo = React.useMemo<Product>(() => {
    const product = { ...productDataList.filter(product => product.id === productId)[0] };
    return product;
  }, [productDataList]);

  const productComparisonInfoList = React.useMemo<Product[]>(() => {
    const filteredProductComparisonList = (productComparisonList || []).filter(productComparison => productComparison.productId === productId);
    const selectedProductComparisonList = filteredProductComparisonList.length > 0 ? filteredProductComparisonList[0].comparionsList : [];
    return selectedProductComparisonList || [];
  }, [productComparisonList, productId]);

  const handlePlusIconOnPress = React.useCallback(() => {
    const selectedProductIdList = productComparisonInfoList.map(productComparison => {
      return productComparison.id
    });
    navigation.navigate("ProductSearchMultiSelect", { 
      productId,
      originalSelectedProductIdList: selectedProductIdList,
    });
  }, [navigation, productComparisonInfoList]);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductComparisonView 
      handlePlusIconOnPress={handlePlusIconOnPress}
      navigation={navigation}
      productInfo={productInfo}
      productComparisonInfoList={productComparisonInfoList}
    />
  )
};

export default React.memo(ProductComparison);