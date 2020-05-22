import { difference, xor } from 'lodash';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { Platform, TouchableOpacityProps } from 'react-native';
import { ButtonProps, IconProps, SearchBarProps } from 'react-native-elements';
import { PickerProps } from 'react-native-picker-select';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { BarCodeScannerViewProps } from '../BarCodeScanner';
import ProductSearchMultiSelectView from './ProductSearchMultiSelectView';
import LoadingComponent from '../../components/LoadingComponent';
import { getDefaultProductList, Product } from '../ProductSearch';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import { useProductListContext } from '../../context/ProductListContext';
import { useProductComparisonListContext } from '../../context/ProductComparisonListContext';
import { useSelectCategoryContext } from '../../context/SelectCategoryContext';
import favoriteProduct from '../../api/favoriteProduct';

type ProductSearchMultiSelectScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'ProductSearchMultiSelect'
>;

type  ProductSearchMultiSelectRouteProp = RouteProp<BarCodeScannerStackParamList, "ProductSearchMultiSelect">;

type Props = {
  navigation: ProductSearchMultiSelectScreenNavigationProp;
  route: ProductSearchMultiSelectRouteProp;
};

export interface ProductSearchMultiSelectComponentViewProps {
  chipList:  BarCodeScannerViewProps['chipList'];
  handleAddButtonOnPress: ButtonProps['onPress'];
  handleChipOnPress: BarCodeScannerViewProps['handleChipOnPress'];
  handleClearSearch: BarCodeScannerViewProps['handleClearSearch'];
  handleFavoriteIconOnPress(id: Product['id']): IconProps['onPress'];
  handleImageAreaOnPress(id: Product['id']): TouchableOpacityProps['onPress'];
  handleSelectButtonOnPress(id: Product['id']): ButtonProps['onPress'];
  productList: Product[];
};

export interface ProductSearchMultiSelectViewProps extends ProductSearchMultiSelectComponentViewProps {
  navigation: Props['navigation'];
  // For Dropdown
  handleDropdownOnValueDown: PickerProps['onValueChange'];
  handleIOSDropdownOnDonePress: PickerProps['onDonePress'];
  selectedCategory: string;
  // For Search
  search: string;
  updateSearch: SearchBarProps['onChangeText'];
};

export interface ProductSearchMultiSelectItemCardProps extends Product {
  handleSelectButtonOnPress: ProductSearchMultiSelectViewProps['handleSelectButtonOnPress'];
  handleImageAreaOnPress: ProductSearchMultiSelectViewProps['handleImageAreaOnPress'];
  handleFavoriteIconOnPress: ProductSearchMultiSelectViewProps['handleFavoriteIconOnPress'];
};

const ProductSearchMultiSelect: React.ComponentType<Props> = (props) => {
  const { navigation, route } = props;
  const { productId, originalSelectedProductIdList } = route.params;

  const [chipList, setChipList] = React.useState(
    [
      { name: "PM2.5", selected: false }, 
      { name: "BFE-95%", selected: false },
      { name: "PFE-95%", selected: false },
      { name: "VFE-95%", selected: false }
    ]
  );

  const handleChipOnPress = React.useCallback(name => () => {
    const result = chipList.map(chip => {
      if (name === chip.name) {
        return { ...chip, selected: !chip.selected };
      }
      return chip
    });
    setChipList(result);
  }, [chipList]);

  const handleClearSearch = React.useCallback<BarCodeScannerViewProps['handleClearSearch']>(() => {
    setSearch("");
  }, []);

  const { productList: productDataList, refetch: productListRefetch } = useProductListContext();
  const { refetch: productComparisonListRefetch } = useProductComparisonListContext();
  const { selectedCategory: defaultSelectedCategory, updateCategoryList } = useSelectCategoryContext();
  const [selectedCategory, setSelectedCategory] = React.useState(defaultSelectedCategory);

  const [favoritedProductIdList, setFavoritedProductIdList] = React.useState<string[]>([]);
  React.useEffect(() => {
    setFavoritedProductIdList(productDataList.filter(product => product.saved).map(product => product.id))
  }, [productDataList])

  const [loading] = React.useState(false);  
  const [search, setSearch] = React.useState('');
  const [selectedProductIdList, setSelectedProductIdList] = React.useState(originalSelectedProductIdList || []);

  const productList = React.useMemo(() => {
    // Get the result if caegory changed
    let result = getDefaultProductList(productDataList.filter(product => product.category === selectedCategory));
    // Get the result filtered by category
    result.filter(product => product.category === selectedCategory)
    // Update the result with name
    result = result.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    // Filter the result with selected labels
    const selectedLabels = chipList.filter(chip => chip.selected);
    if (selectedLabels.length > 0) {
      result = result.filter(product => { 
        const diff = difference(selectedLabels.map(label => label.name), product.labels.map(label => label.trim()));
        if (diff.length > 0) return false;
        return true
      });
    }
    // Update the result with favorited product
    result = result.map(product => {
      if (favoritedProductIdList.includes(product.id)) {
        return { ...product, favorite: true }
      }
      return { ...product, favorite: false }
    });

    // Exclude the origin product
    result = result.filter(product => product.id !== productId)

    if (selectedProductIdList.length > 0) {
      result = result.map(product => {
        if (selectedProductIdList.includes(product.id)) {
          return { ...product, selected: true }
        }
        return { ...product, selected: false }
      });
      // return result;
    }

    return result;
    
  }, [chipList, favoritedProductIdList, productDataList, productId, search, selectedCategory, selectedProductIdList]);

   // For Dropdown
  const handleDropdownOnValueDown = React.useCallback<BarCodeScannerViewProps['handleDropdownOnValueDown']>(async (value) => {
    if (Platform.OS === "ios") {
      setSelectedCategory(value);
      return;
    };
    await SecureStore.setItemAsync("selectedCategory", value);
    updateCategoryList(value);
  }, []);
  // IOS
  const handleIOSDropdownOnDonePress = React.useCallback<BarCodeScannerViewProps['handleIOSDropdownOnDonePress']>(async () => {
    await SecureStore.setItemAsync("selectedCategory", selectedCategory);
    updateCategoryList(selectedCategory);
  }, [selectedCategory]);

  // For ProductSearchMultiSelectView
  const handleAddButtonOnPress = React.useCallback<ProductSearchMultiSelectViewProps['handleAddButtonOnPress']>(() => {
    navigation.navigate('AddProduct');
  }, [navigation]);

  const handleFavoriteIconOnPress = React.useCallback<ProductSearchMultiSelectItemCardProps['handleSelectButtonOnPress']>(id => async () => {
    setFavoritedProductIdList((list => {
      if (list.includes(id)) {
        return list.filter(_id => _id !== id)
      } 
      return [...list, id];
    }))
    const deviceId = await SecureStore.getItemAsync("deviceId");
    await favoriteProduct(id, deviceId);
  }, []);

  const handleImageAreaOnPress = React.useCallback<ProductSearchMultiSelectItemCardProps['handleImageAreaOnPress']>(id => () => {
    // const product = productDataList.filter(product => product.id === id)[0];
    // navigation.navigate("ProductInfo", { product });
  }, [navigation, productDataList]);

  const handleSelectButtonOnPress = React.useCallback<ProductSearchMultiSelectItemCardProps['handleSelectButtonOnPress']>(id => () => {
    setSelectedProductIdList(selectedProductIdList => {
      if (selectedProductIdList.includes(id)) {
        return selectedProductIdList.filter(selectedProductId => selectedProductId !== id);
      }
      return [...selectedProductIdList, id];
    })
  }, []);

  // For Search
  const updateSearch = React.useCallback<ProductSearchMultiSelectViewProps['updateSearch']>(search => {
    setSearch(search);
  }, [search]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async() => {
      const deviceId = await SecureStore.getItemAsync("deviceId");
      const updateProductIdList = xor(originalSelectedProductIdList, selectedProductIdList);
      // await fetch(`http://192.168.0.106:5000/product-comparisons/${productId}`, {
      await fetch(`https://miclo1.azurewebsites.net/product-comparisons/${productId}`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comparisonIdList: updateProductIdList,
          deviceId,
        }),
      });
      await productComparisonListRefetch();
    });

    return unsubscribe;
  }, [productId, navigation, selectedProductIdList, originalSelectedProductIdList]);

  // React.useEffect(() => {
  //   (async() => { 
  //     await productListRefetch();
  //   })();
  // }, []);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <ProductSearchMultiSelectView 
      chipList={chipList}
      handleAddButtonOnPress={handleAddButtonOnPress}
      handleChipOnPress={handleChipOnPress}
      handleClearSearch={handleClearSearch}
      handleFavoriteIconOnPress={handleFavoriteIconOnPress}
      handleImageAreaOnPress={handleImageAreaOnPress}
      handleSelectButtonOnPress={handleSelectButtonOnPress}
      productList={productList} 
      navigation={navigation}

      // For Dropdown
      handleDropdownOnValueDown={handleDropdownOnValueDown}
      handleIOSDropdownOnDonePress={handleIOSDropdownOnDonePress}
      selectedCategory={selectedCategory}
      search={search}
      updateSearch={updateSearch}
    />
  )
};

export default React.memo(ProductSearchMultiSelect);