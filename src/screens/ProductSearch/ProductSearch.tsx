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
  id: string;
  image: CardProps['image'];
  imageProps: CardProps['imageProps'];
  imageStyle: CardProps['imageStyle'];
  selected: boolean;
  title: CardProps['title'];
};

export interface ProductSearchViewProps {
  handleHistoryIconOnPress: IconProps['onPress'];
  productList: Product[];
  handleSelectButtonOnPress(id: Product['id']): ButtonProps['onPress'];

  // For Search
  search: string;
  updateSearch: SearchBarProps['onChangeText'];
};

export interface ProductSearchItemCardProps extends Product {
  handleSelectButtonOnPress: ProductSearchViewProps['handleSelectButtonOnPress'];
};

const ProductSearch: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);  
  const [search, setSearch] = React.useState('');
  const [productList, setProductList] = React.useState(getDefaultProductList());

  // For ProductSearchView
  const handleHistoryIconOnPress = React.useCallback<ProductSearchViewProps['handleHistoryIconOnPress']>(() => {
    navigation.navigate('Records');
  }, [navigation]);

  const handleSelectButtonOnPress = React.useCallback<ProductSearchItemCardProps['handleSelectButtonOnPress']>(id => () => {
    // navigation.navigate('ProductComparison');
    const result = productList.map(product => {
      if (product.id === id) {
        return { ...product, selected: true }
      }
      return { ...product, selected: false }
    });
    setProductList(result);
  }, [navigation, productList]);

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
      handleSelectButtonOnPress={handleSelectButtonOnPress}

      search={search}
      updateSearch={updateSearch}
    />
  )
};

export default React.memo(ProductSearch);