import { map } from 'lodash';
import React from 'react';
import { Share } from 'react-native';
import { AirbnbRatingProps, ButtonProps, IconProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultProductInfo } from './utils';
import ProductInfoView from './ProductInfoView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type ProductInfoScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'ProductInfo'
>;

type Props = {
  navigation: ProductInfoScreenNavigationProp;
};

export interface ProductInfo {
  // category: string;
  // functions: string;
  origin: string;
  price: string;
  title: string;
};

type ProductInfoList = {
  key: string;
  title: string;
  value: string;
}[];

export interface ProductInfoGridViewProps {
  favorite: boolean;
  handleCompareMoreButtonOnPress: IconProps['onPress'];
  handleEditIconOnPress: IconProps['onPress'];
  handleFavoriteIconOnPress: IconProps['onPress'];
  handleOnFinishRating: AirbnbRatingProps['onFinishRating'];
  handleShareIconOnPress: IconProps['onPress'];
  productInfoList: ProductInfoList;
  rating: number;
  compare?: boolean;
  isExpanded?: boolean;
}
export interface ProductInfoViewProps extends ProductInfoGridViewProps {
  handleExpand: ListItemProps['onPress'];
  isExpanded: boolean;
  navigation: ProductInfoScreenNavigationProp;
};

const ProductInfo: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(true);

  const [rating, setRating] = React.useState(0);
  const handleOnFinishRating = React.useCallback<ProductInfoViewProps['handleOnFinishRating']>((rating) => {
    setRating(rating);
  }, [rating]);

  const productInfo = React.useMemo(() => getDefaultProductInfo(), [getDefaultProductInfo]);

  const productInfoList = React.useMemo<ProductInfoList>(() => map(productInfo, (value, key) => {
    let title = "";
    if (key === "title") {
      title = value.toString();
    } else if (key === "price") {
      title = `${key.toUpperCase()}:   `;
    } else {
      title = `${key.toUpperCase()}:   ${value}`;
    }
    return {
      key, 
      title,
      value
    }
  }), [productInfo]);

  const handleCompareMoreButtonOnPress = React.useCallback<ProductInfoViewProps['handleCompareMoreButtonOnPress']>(() => {
    navigation.navigate("ProductComparison");
  }, [navigation]);

  const handleEditIconOnPress = React.useCallback<ProductInfoViewProps['handleEditIconOnPress']>(() => {
    navigation.navigate("AddProduct");
  }, [navigation]);

  const handleFavoriteIconOnPress = React.useCallback<ProductInfoViewProps['handleFavoriteIconOnPress']>(() => {
    setFavorite((value)=> !value);
  }, []);

  const handleExpand = React.useCallback<ProductInfoViewProps['handleExpand']>(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  
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

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductInfoView 
      favorite={favorite}
      isExpanded={isExpanded}
      handleCompareMoreButtonOnPress={handleCompareMoreButtonOnPress}
      handleEditIconOnPress={handleEditIconOnPress}
      handleExpand={handleExpand}
      handleFavoriteIconOnPress={handleFavoriteIconOnPress}
      handleOnFinishRating={handleOnFinishRating}
      handleShareIconOnPress={handleShareIconOnPress}
      navigation={navigation}
      productInfoList={productInfoList}
      rating={rating}
    />
  )
};

export default React.memo(ProductInfo);