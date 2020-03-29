import React from 'react';
import { Share } from 'react-native';
import { TileProps, IconProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { convertToSimilarProductFormat, getDefaultList, getDefaultProductInfo } from './utils';
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
  shareIconOnPress: IconProps['onPress'];
  similarProductList: SimilarProduct[];
};

const ProductInfo: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = React.useState(true);
  const [favorite, setFavorite] = React.useState(false);

  const [similarProductList, setSimilarProductList] = React.useState(getDefaultList());
  const productInfo = getDefaultProductInfo();
  const favouriteIconOnPress = React.useCallback<ProductInfoViewProps['favoriteIconOnPress']>(() => {
    setFavorite((value)=> !value);
  }, []);
  const addIconOnPress = React.useCallback<ProductInfoViewProps['addIconOnPress']>(() => {
    navigation.navigate('ProductComparison');
  }, []);
  const shareIconOnPress = React.useCallback<ProductInfoViewProps['addIconOnPress']>(async () => {
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
    const getSimilarProducts = async (args: { category: string }) => {
      try {
        const response = await fetch(`http://192.168.0.104:5000/products?category=${args.category}`, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        console.log("try")
        const result = await response.json() || [];
        setSimilarProductList(convertToSimilarProductFormat(result));
      } catch (error) {
        console.log(" getSimilarProducts error:", error);
      };
      setLoading(false);
    };
    getSimilarProducts({ category: 'mask' });
  }, [])

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
      shareIconOnPress={shareIconOnPress}
      similarProductList={similarProductList}
      productInfo={productInfo}
    />
  )
};

export default React.memo(ProductInfo);