import React from 'react';
import { TileProps, IconProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultList, getDefaultProductInfo } from './utils';
import ProductInfoView from './ProductInfoView';
import LoadingComponent from '../../components/LoadingComponent';
import { HomeStackParamList } from '../../navigator/NavigationStack/HomeStack';

type ProductInfoScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ProductInfo'
>;

type Props = {
  navigation: ProductInfoScreenNavigationProp;
};

export type ProductInfo = TileProps;
export type SimilarProduct = ListItemProps;

export interface ProductInfoViewProps {
  addIconOnPress: IconProps['onPress'];
  favorite: boolean;
  favoriteIconOnPress: IconProps['onPress'];
  productInfo: ProductInfo;
  similarProductList: SimilarProduct[];
};

const ProductInfo: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const similarProductList = getDefaultList();
  const productInfo = getDefaultProductInfo();
  const favouriteIconOnPress = React.useCallback<ProductInfoViewProps['favoriteIconOnPress']>(() => {
    setFavorite((value)=> !value);
  }, []);
  const addIconOnPress = React.useCallback<ProductInfoViewProps['addIconOnPress']>(() => {
    navigation.navigate('ProductComparison');
  }, []);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductInfoView 
      addIconOnPress={addIconOnPress}
      favorite={favorite}
      favoriteIconOnPress={favouriteIconOnPress}
      similarProductList={similarProductList}
      productInfo={productInfo}
    />
  )
};

export default React.memo(ProductInfo);