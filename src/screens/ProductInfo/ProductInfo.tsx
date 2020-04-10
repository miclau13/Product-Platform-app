import { map } from 'lodash';
import React from 'react';
import { Share } from 'react-native';
import { IconProps, ImageProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { convertToSimilarProductFormat, getDefaultProductInfo } from './utils';
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

export interface ProductInfo {
  category: string;
  functions: string;
  origin: string;
  price: number;
  title: string;
};

type ProductInfoList = {
  key: string;
  title: string | number;
  value?: undefined;
} | {
  key: string;
  value: string | number;
  title: string;
}[]

export interface ProductInfoGridViewProps {
  favorite: boolean;
  handleFavoriteIconOnPress: IconProps['onPress'];
  imageProps: ImageProps;
  productInfoList: ProductInfoList;
  shareIconOnPress: IconProps['onPress'];
  showButtons: boolean;
}
export interface ProductInfoViewProps extends ProductInfoGridViewProps {
  handleExpand: ListItemProps['onPress'];
  isExpanded: boolean;
};

const ProductInfo: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(true);

  // const [similarProductList, setSimilarProductList] = React.useState(getDefaultList());
  const productInfo = React.useMemo(() => getDefaultProductInfo(), [getDefaultProductInfo]);

  const productInfoList = React.useMemo(() => map(productInfo, (value, key) => {
    if (key === "title") {
      return { key, title: value };
    }
    if (key === "price") {
      return {
        key, 
        value,
        title: `${key.toUpperCase()}:   `,
      }
    }
    return {
      key, 
      title: `${key.toUpperCase()}:   ${value}`
    }
  }), [productInfo]);


  const favouriteIconOnPress = React.useCallback<ProductInfoViewProps['handleFavoriteIconOnPress']>(() => {
    setFavorite((value)=> !value);
  }, []);
  const handleExpand = React.useCallback<ProductInfoViewProps['handleExpand']>(() => {
    // navigation.navigate('ProductComparison');
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  const shareIconOnPress = React.useCallback<ProductInfoViewProps['shareIconOnPress']>(async () => {
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

  // React.useEffect(() => {
  //   const getSimilarProducts = async (args: { category: string }) => {
  //     try {
  //       // const response = await fetch(`http://192.168.0.104:5000/products?category=${args.category}`, {
  //         const response = await fetch(`https://miclo1.azurewebsites.net/products`, {
  //         method: 'get',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       const result = await response.json() || [];
  //       setSimilarProductList(convertToSimilarProductFormat(result));
  //     } catch (error) {
  //       console.log(" getSimilarProducts error:", error);
  //     };
  //     setLoading(false);
  //   };
  //   getSimilarProducts({ category: 'mask' });
  // }, [])

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductInfoView 
      handleExpand={handleExpand}
      favorite={favorite}
      handleFavoriteIconOnPress={favouriteIconOnPress}
      isExpanded={isExpanded}
      productInfoList={productInfoList}
      shareIconOnPress={shareIconOnPress}
    />
  )
};

export default React.memo(ProductInfo);