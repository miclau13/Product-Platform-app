import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { Share } from 'react-native';
import { AirbnbRatingProps, IconProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import ProductInfoView from './ProductInfoView';
import LoadingComponent from '../../components/LoadingComponent';
import { Product, useProductListContext } from '../../context/ProductListContext';
import { useProductComparisonListContext } from '../../context/ProductComparisonListContext';
import { useProductRatingListContext } from '../../context/ProductRatingListContext';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import favoriteProduct from '../../api/favoriteProduct';
import ratingProduct from '../../api/ratingProduct';

type ProductInfoScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'ProductInfo'
>;

type ProductInfoScreenRouteProp = RouteProp<BarCodeScannerStackParamList, "ProductInfo">;

type Props = {
  navigation: ProductInfoScreenNavigationProp;
  route: ProductInfoScreenRouteProp;
};

export interface ProductInfoGridViewProps {
  favorite: boolean;
  handleCompareMoreButtonOnPress: IconProps['onPress'];
  handleEditIconOnPress: IconProps['onPress'];
  handleFavoriteIconOnPress: IconProps['onPress'];
  handleOnFinishRating: AirbnbRatingProps['onFinishRating'];
  handleShareIconOnPress: IconProps['onPress'];
  productInfo: Product;
  rating: number;
  compare?: boolean;
  expanded?: boolean;
}
export interface ProductInfoViewProps extends ProductInfoGridViewProps {
  handleExpand(id: string): ListItemProps['onPress'];
  handleCalculateIconOnPress: IconProps['onPress'];
  handleInfoIconOnPress: IconProps['onPress'];
  expandedProductList: string[];  
  navigation: ProductInfoScreenNavigationProp;
  productComparisonInfoList: Product[];
};

const ProductInfo: React.ComponentType<Props> = (props) => {
  const { navigation, route } = props;
  const { productId } = route.params;
  const { productList: productDataList, refetch: productListRefetch } = useProductListContext();
  const { productComparisonList, refetch: productComparisonListRefetch } = useProductComparisonListContext();
  const { productRatingList, refetch: productRatingListRefetch } = useProductRatingListContext();
  const [loading] = React.useState(false);
  const [favorite, setFavorite] = React.useState(productDataList.filter(product => product.id === productId)[0].saved);
  const [expandedProductList, setExpandedProductList] = React.useState([]);

  const [rating, setRating] = React.useState(productDataList.filter(product => product.id === productId)[0].rating);

  const handleOnFinishRating = React.useCallback<ProductInfoViewProps['handleOnFinishRating']>(async (rating) => {
    setRating(rating);
    const deviceId = await SecureStore.getItemAsync("deviceId");
    await ratingProduct(productId, deviceId, rating);
  }, [rating]);

  const productInfo = React.useMemo<Product>(() => {
    const product = { ...productDataList.filter(product => product.id === productId)[0], rating, saved: favorite };
    return product;
  }, [favorite, productDataList, rating]);

  const productComparisonInfoList = React.useMemo<Product[]>(() => {
    // console.log("productRatingList",productRatingList)
    const filteredProductComparisonList = (productComparisonList || []).filter(productComparison => productComparison.productId === productId);
    const selectedProductComparisonList = filteredProductComparisonList.length > 0 ? filteredProductComparisonList[0].comparionsList : [];
    const resultWithRating = selectedProductComparisonList.map(selectedProduct => {
      const rating = (productRatingList.find(productRating => productRating.productId === selectedProduct.id) || {}).rating;
      return { ...selectedProduct, rating };
    })
    return resultWithRating || [];
  }, [productComparisonList, productRatingList, productId]);

  const handleCompareMoreButtonOnPress = React.useCallback<ProductInfoViewProps['handleCompareMoreButtonOnPress']>(() => {
    navigation.navigate("ProductComparison", { 
      productId,
    });
  }, [navigation, productId]);

  const handleCalculateIconOnPress = React.useCallback<ProductInfoViewProps['handleCalculateIconOnPress']>(() => {
    navigation.navigate("Calculator");
  }, [navigation]);

  const handleEditIconOnPress = React.useCallback<ProductInfoViewProps['handleEditIconOnPress']>(() => {
    navigation.navigate("AddProduct", { productId });
  }, [navigation, productId]);

  const handleFavoriteIconOnPress = React.useCallback<ProductInfoViewProps['handleFavoriteIconOnPress']>(async () => {
    setFavorite((value)=> !value);
    const deviceId = await SecureStore.getItemAsync("deviceId");
    await favoriteProduct(productId, deviceId);
  }, [productId]);

  const handleInfoIconOnPress = React.useCallback<ProductInfoViewProps['handleInfoIconOnPress']>(async () => {
    navigation.navigate("Info");
  }, [navigation]);

  const handleExpand = React.useCallback<ProductInfoViewProps['handleExpand']>(id => () => {
    setExpandedProductList(list => {
      if (list.includes(id)) {
        return list.filter(productId => productId !==id)
      }
      return [ ...list, id ]
    });
  }, []);
  
  const handleShareIconOnPress = React.useCallback<ProductInfoViewProps['handleShareIconOnPress']>(async () => {
    try {
      const result = await Share.share({
        message:
          'Share Message content\n',
        title:
          'Shar Message Title',
        url:
          'https://miclotest01.azurewebsites.net/search'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  },[]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async() => {
      await productListRefetch();
      await productComparisonListRefetch();
    });

    return unsubscribe;
  }, [navigation]);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductInfoView 
      favorite={favorite}
      expandedProductList={expandedProductList}
      handleCompareMoreButtonOnPress={handleCompareMoreButtonOnPress}
      handleCalculateIconOnPress={handleCalculateIconOnPress}
      handleEditIconOnPress={handleEditIconOnPress}
      handleExpand={handleExpand}
      handleFavoriteIconOnPress={handleFavoriteIconOnPress}
      handleInfoIconOnPress={handleInfoIconOnPress}
      handleOnFinishRating={handleOnFinishRating}
      handleShareIconOnPress={handleShareIconOnPress}
      navigation={navigation}
      productInfo={productInfo}
      productComparisonInfoList={productComparisonInfoList}
      rating={rating}
    />
  )
};

export default React.memo(ProductInfo);