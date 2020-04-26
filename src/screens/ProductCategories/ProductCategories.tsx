import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { Alert } from 'react-native';
import { ButtonProps, CardProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultCategoryList } from './utils';
import ProductCategoriesView from './ProductCategoriesView';
import LoadingComponent from '../../components/LoadingComponent';
import { useSelectCategoryContext } from '../../context/SelectCategoryContext';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type ProductCategoriesScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'ProductCategories'
>;

type Props = {
  navigation: ProductCategoriesScreenNavigationProp;
};

export type Category = {
  buttonProps: ButtonProps;
  description: string;
  image: CardProps['image'];
  imageProps: CardProps['imageProps'];
  imageStyle: CardProps['imageStyle'];
  title: string;
}

export interface ProductCategoriesViewProps {
  categoryList: Category[];
  onPress(category: string): ButtonProps['onPress'];
  navigation: Props['navigation'];
};

const ProductCategories: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const { updateCategoryList } = useSelectCategoryContext();
  const [loading] = React.useState(false);
  const categoryList = getDefaultCategoryList();

  const onPress: ProductCategoriesViewProps['onPress'] = (category) => async () => {
    await SecureStore.setItemAsync("selectedCategory", category);
    updateCategoryList(category);
    navigation.navigate("BarCodeScanner");
  };
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductCategoriesView 
      categoryList={categoryList} 
      onPress={onPress}
      navigation={navigation}
    />
  )
};

export default React.memo(ProductCategories);