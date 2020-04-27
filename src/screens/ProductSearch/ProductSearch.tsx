import React from 'react';
import { ButtonProps, CardProps, IconProps, SearchBarProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { BarCodeScannerViewProps } from '../BarCodeScanner';
import ProductSearchView from './ProductSearchView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type ProductSearchScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'BarCodeScanner'
>;

type Props = {
  chipList:  BarCodeScannerViewProps['chipList'];
  handleChipOnPress: BarCodeScannerViewProps['handleChipOnPress'];
  navigation: ProductSearchScreenNavigationProp;
  productList: BarCodeScannerViewProps['productList'];
  setFavoritedProductIdList: BarCodeScannerViewProps['setFavoritedProductIdList']; 
};

export type Product = {
  category: string;
  description: string;
  favorite: boolean;
  id: string;
  image: CardProps['image'];
  imageProps: CardProps['imageProps'];
  imageStyle: CardProps['imageStyle'];
  labels: string[];
  origin: string;
  price: number;
  rating: number;
  selected: boolean;
  title: CardProps['title'];
};

export interface ProductSearchViewProps {
  chipList:  BarCodeScannerViewProps['chipList'];
  handleAddButtonOnPress: ButtonProps['onPress'];
  handleChipOnPress: BarCodeScannerViewProps['handleChipOnPress'];
  handleHistoryIconOnPress: IconProps['onPress'];
  handleSelectButtonOnPress(id: Product['id']): ButtonProps['onPress'];
  handleFavoriteIconOnPress(id: Product['id']): IconProps['onPress'];
  productList: Product[];

  // For Search
  search: string;
  updateSearch: SearchBarProps['onChangeText'];
};

export interface ProductSearchItemCardProps extends Product {
  handleSelectButtonOnPress: ProductSearchViewProps['handleSelectButtonOnPress'];
  handleFavoriteIconOnPress: ProductSearchViewProps['handleFavoriteIconOnPress'];
};

const ProductSearch: React.ComponentType<Props> = (props) => {
  const { 
    chipList,
    handleChipOnPress,
    navigation,
    productList: productDataList, 
    setFavoritedProductIdList,
  } = props;

  const [loading] = React.useState(false);  
  const [search, setSearch] = React.useState('');
  const [selectedProductId, setSelectedProductId] = React.useState("");

  const productList = React.useMemo(() => {
    if (selectedProductId) {
      const result = productDataList.map(product => {
        if (product.id === selectedProductId) {
          return { ...product, selected: true }
        }
        return { ...product, selected: false }
      });
      return result;
    }
    return productDataList
  }, [productDataList, selectedProductId]);

  // For ProductSearchView
  const handleAddButtonOnPress = React.useCallback<ProductSearchViewProps['handleAddButtonOnPress']>(() => {
    navigation.navigate('AddProduct');
  }, [navigation]);

  const handleHistoryIconOnPress = React.useCallback<ProductSearchViewProps['handleHistoryIconOnPress']>(() => {
    navigation.navigate('Records');
  }, [navigation]);

  const handleSelectButtonOnPress = React.useCallback<ProductSearchItemCardProps['handleSelectButtonOnPress']>(id => () => {
    setSelectedProductId(id);
  }, [setSelectedProductId]);

  const handleFavoriteIconOnPress = React.useCallback<ProductSearchItemCardProps['handleSelectButtonOnPress']>(id => () => {
    setFavoritedProductIdList((list => {
      if (list.includes(id)) {
        return list.filter(_id => _id !== id)
      } 
      return [...list, id];
    }))
  }, [setFavoritedProductIdList]);

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
      chipList={chipList}
      handleAddButtonOnPress={handleAddButtonOnPress}
      handleChipOnPress={handleChipOnPress}
      handleFavoriteIconOnPress={handleFavoriteIconOnPress}
      handleHistoryIconOnPress={handleHistoryIconOnPress}
      handleSelectButtonOnPress={handleSelectButtonOnPress}
      productList={productList} 

      search={search}
      updateSearch={updateSearch}
    />
  )
};

export default React.memo(ProductSearch);