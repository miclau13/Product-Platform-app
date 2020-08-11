import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonProps, CardProps, IconProps, SearchBarProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { BarCodeScannerViewProps } from '../BarCodeScanner';
import ProductSearchView from './ProductSearchView';
import { useProductListContext } from '../../context/ProductListContext';
import { useProductComparisonListContext } from '../../context/ProductComparisonListContext';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import favoriteProduct from '../../api/favoriteProduct';

type ProductSearchScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'BarCodeScanner'
>;

type Props = {
  chipList:  BarCodeScannerViewProps['chipList'];
  handleChipOnPress: BarCodeScannerViewProps['handleChipOnPress'];
  handleClearSearch: BarCodeScannerViewProps['handleClearSearch'];
  navigation: ProductSearchScreenNavigationProp;
  productList: BarCodeScannerViewProps['productList'];
  setFavoritedProductIdList: BarCodeScannerViewProps['setFavoritedProductIdList']; 
};

export type Product = {
  category: string;
  name: string;
  favorite: boolean;
  id: string;
  image: string;
  imageProps: CardProps['imageProps'];
  imageStyle?: CardProps['imageStyle'];
  labels: string[];
  origin: string;
  photos?: string[];
  price: number;
  rating: number;
  selected: boolean;
  title?: CardProps['title'];
};

export interface ProductSearchViewProps {
  chipList:  BarCodeScannerViewProps['chipList'];
  handleAddButtonOnPress: ButtonProps['onPress'];
  handleChipOnPress: BarCodeScannerViewProps['handleChipOnPress'];
  handleClearSearch: BarCodeScannerViewProps['handleClearSearch'];
  handleFavoriteIconOnPress(id: Product['id']): IconProps['onPress'];
  handleHistoryIconOnPress: IconProps['onPress'];
  handleImageAreaOnPress(id: Product['id']): TouchableOpacityProps['onPress'];
  handleSelectButtonOnPress(id: Product['id']): ButtonProps['onPress'];
  productList: Product[];

  // For Search
  search: string;
  updateSearch: SearchBarProps['onChangeText'];
};

export interface ProductSearchItemCardProps extends Product {
  handleSelectButtonOnPress: ProductSearchViewProps['handleSelectButtonOnPress'];
  handleImageAreaOnPress: ProductSearchViewProps['handleImageAreaOnPress'];
  handleFavoriteIconOnPress: ProductSearchViewProps['handleFavoriteIconOnPress'];
};

const ProductSearch: React.ComponentType<Props> = (props) => {
  const { 
    chipList,
    handleChipOnPress,
    handleClearSearch,
    navigation,
    productList: productDataList, 
    setFavoritedProductIdList,
  } = props;
  const { refetch: productListRefetch } = useProductListContext();
  const { refetch: productComparisonListRefetch } = useProductComparisonListContext();

  const [loading, setLoading] = React.useState(false);  
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

  // console.log("ProductSearch productList", productList)

  // For ProductSearchView
  const handleAddButtonOnPress = React.useCallback<ProductSearchViewProps['handleAddButtonOnPress']>(() => {
    navigation.navigate('AddProduct');
  }, [navigation]);

  const handleHistoryIconOnPress = React.useCallback<ProductSearchViewProps['handleHistoryIconOnPress']>(() => {
    navigation.navigate('Records');
  }, [navigation]);

  const handleFavoriteIconOnPress = React.useCallback<ProductSearchItemCardProps['handleFavoriteIconOnPress']>(id => async () => {
    setFavoritedProductIdList((list => {
      if (list.includes(id)) {
        return list.filter(_id => _id !== id)
      } 
      return [...list, id];
    }))
    const deviceId = await SecureStore.getItemAsync("deviceId");
    await favoriteProduct(id, deviceId);
  }, []);

  const handleImageAreaOnPress = React.useCallback<ProductSearchItemCardProps['handleImageAreaOnPress']>(id => async () => {
    // await productListRefetch();
    // // await fetch(`http://192.168.0.106:5000/product-comparisons/${id}`, {
    // await fetch(`https://miclo1.azurewebsites.net/product-comparisons/${id}`, {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     comparisonIdList: []
    //   }),
    // });
    // await productComparisonListRefetch();
    // navigation.navigate("ProductInfo", { 
    //   productId: id,
    // });
  }, [navigation, productDataList]);

  const handleSelectButtonOnPress = React.useCallback<ProductSearchItemCardProps['handleSelectButtonOnPress']>(id => async () => {
    const deviceId = await SecureStore.getItemAsync("deviceId");
    setLoading(true);
    await productListRefetch();
    // await fetch(`http://192.168.0.106:5000/product-comparisons/${id}`, {
    await fetch(`https://miclo1.azurewebsites.net/product-comparisons/${id}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comparisonIdList: [],
        deviceId,
      }),
    });
    await productComparisonListRefetch();
    navigation.navigate("ProductInfo", { 
      productId: id,
    });
    setLoading(false);
  }, [navigation, productDataList]);

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
      handleClearSearch={handleClearSearch}
      handleFavoriteIconOnPress={handleFavoriteIconOnPress}
      handleHistoryIconOnPress={handleHistoryIconOnPress}
      handleImageAreaOnPress={handleImageAreaOnPress}
      handleSelectButtonOnPress={handleSelectButtonOnPress}
      productList={productList} 

      search={search}
      updateSearch={updateSearch}
    />
  )
};

export default React.memo(ProductSearch);