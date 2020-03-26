import React from 'react';
import { ButtonProps, CardProps, IconProps, SearchBarProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultProductList } from './utils';
import ProductSearchView from './ProductSearchView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

// type ProductSearchScreenNavigationProp = StackNavigationProp<
//   SearchStackParamList,
//   'ProductSearch'
// >;

type ProductSearchScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'BarCodeScanner'
>;

type Props = {
  navigation: ProductSearchScreenNavigationProp;
};

export type Product = {
  buttonProps: ButtonProps;
  description: string;
  image: CardProps['image'];
  imageProps: CardProps['imageProps'];
  imageStyle: CardProps['imageStyle'];
  title: CardProps['title'];
};

export interface ProductSearchViewProps {
  handleHistoryIconOnPress: IconProps['onPress'];
  productList: Product[];
  onPress: ButtonProps['onPress'];

  // For Search
  search: string;
  updateSearch: SearchBarProps['onChangeText'];
};

export interface ProductSearchItemCardProps extends Product {
  onPress: ProductSearchViewProps['onPress'];
};

const ProductSearch: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);  
  const [search, setSearch] = React.useState('');

  const productList = getDefaultProductList();

  // For ProductSearchView
  const handleHistoryIconOnPress = React.useCallback<ProductSearchViewProps['handleHistoryIconOnPress']>(() => {
    navigation.navigate('Records');
  }, [navigation]);

  const onPress = React.useCallback<ProductSearchItemCardProps['onPress']>(() => {
    navigation.navigate('ProductComparison');
  }, [navigation]);

  // For Search
  const updateSearch = React.useCallback<ProductSearchViewProps['updateSearch']>(search => {
    setSearch(search);
  }, [search]);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductSearchView 
      handleHistoryIconOnPress={handleHistoryIconOnPress}
      productList={productList} 
      onPress={onPress}

      search={search}
      updateSearch={updateSearch}
    />
  )
};

export default React.memo(ProductSearch);