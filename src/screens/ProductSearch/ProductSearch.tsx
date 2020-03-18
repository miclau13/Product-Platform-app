import React from 'react';
import { ButtonProps, CardProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultProductList } from './utils';
import ProductSearchView from './ProductSearchView';
import LoadingComponent from '../../components/LoadingComponent';
import { HomeStackParamList } from '../../navigator/NavigationStack/HomeStack';

type ProductSearchScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductSearch'
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
  productList: Product[];
  onPress: ButtonProps['onPress'];
};

export interface ProductSearchItemCardProps extends Product {
  onPress: ProductSearchViewProps['onPress'];
};

const ProductSearch: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const productList = getDefaultProductList();
  const onPress: ButtonProps['onPress'] = () => {
    navigation.goBack();
  };
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductSearchView productList={productList} onPress={onPress}/>
  )
};

export default React.memo(ProductSearch);