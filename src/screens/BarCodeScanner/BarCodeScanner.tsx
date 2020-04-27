import * as SecureStore from 'expo-secure-store';
import { BarCodeScanner as ExpoBarCodeScanner, BarCodeScannerProps as ExpoBarCodeScannerProps } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { difference } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';
import { ButtonProps, ButtonGroupProps, SearchBarProps, IconProps } from 'react-native-elements';
import { PickerProps } from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';

import BarCodeScannerView, { NoAccessView, RequestingAccessView } from './BarCodeScannerView';
import { useProductListContext } from '../../context/ProductListContext';
import { useSelectCategoryContext } from '../../context/SelectCategoryContext';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import { getDefaultProductList, Product } from '../ProductSearch';

type BarCodeScannerScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'BarCodeScanner'
>;

type Props = {
  navigation: BarCodeScannerScreenNavigationProp;
  headerTitle?: string;
};

export interface BarCodeScannerViewProps {
  handleBarCodeScanned: ExpoBarCodeScannerProps['onBarCodeScanned'];
  handleCancelButtonOnPress: ButtonProps['onPress'];
  handleInfoIconOnPress: IconProps['onPress'];
  isSearchViewVisible: boolean;

  // For Search
  onFocus: SearchBarProps['onFocus'];
  search: string;
  updateSearch: SearchBarProps['onChangeText'];

  // For Dropdown
  handleDropdownOnValueDown: PickerProps['onValueChange'];
  handleIOSDropdownOnDonePress: PickerProps['onDonePress'];
  selectedCategory: string;

  // For ProductSearchView
  chipList: { name: string, selected: boolean }[];
  handleChipOnPress(name: string): () => void;
  navigation: Props['navigation'];
  productList: Product[];
  setFavoritedProductIdList: React.Dispatch<React.SetStateAction<string[]>>

  // For ButtonGroup
  onButtonIndexPress: ButtonGroupProps['onPress'];
  selectedButtonIndex: number;
};

const BarCodeScanner: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const { productList: productDataList } = useProductListContext();
  const { selectedCategory: defaultSelectedCategory, updateCategoryList } = useSelectCategoryContext();
  const [hasBarCodeScannerPermission, setHasBarCodeScannerPermission] = useState(null);
  const [isSearchViewVisible, setIsSearchViewVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(defaultSelectedCategory);
  // For ButtonGroup
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0);
  const [hasPhotoLibraryPermission, setHasPhotoLibraryPermission] = useState(false);
  // For ProductSearchView
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
  const [favoritedProductIdList, setFavoritedProductIdList] = React.useState<string[]>([]);
  // Get the result filtered by category
  const [_productList] = React.useState(getDefaultProductList(productDataList.filter(product => product.category === selectedCategory)));
  const productList = React.useMemo(() => {
    // Get the result filtered by category
    let result = _productList.filter(product => product.category === selectedCategory)
    // Update the result with description
    result = result.filter(product => product.description.toLowerCase().includes(search.toLowerCase()));
    // Filter the result with selected labels
    const selectedLabels = chipList.filter(chip => chip.selected);
    if (selectedLabels.length > 0) {
      result = result.filter(product => { 
        const diff = difference(selectedLabels.map(label => label.name), product.labels.map(label => label.trim()));
        if (diff.length > 0) return false;
        return true
        // let _selected = true;
        // selectedLabels.forEach(label => {
        //   console.log("label",label)
        //   console.log("product.labels",product.labels)
        //   console.log("product.labels.includes(label.name)",product.labels.includes(label.name))
        //   if (!product.labels.includes(label.name)) {
        //     _selected = false;
        //   }
        // })
        // return _selected;
      });
    }
    // Update the result with favorited product
    result = result.map(product => {
      if (favoritedProductIdList.includes(product.id)) {
        return { ...product, favorite: true }
      }
      return { ...product, favorite: false }
    });
    if (!search) {
      return result;
    };

    return result;
    
  }, [chipList, favoritedProductIdList, search, selectedCategory, _productList])

  // For Search
  const updateSearch = React.useCallback(search => {
    setSearch(search);
  }, [productList, search]);
  const onFocus = React.useCallback<BarCodeScannerViewProps['onFocus']>(() => {
    setIsSearchViewVisible(true);
    navigation.setParams({ headerTitle: "Search" });
  }, [isSearchViewVisible]);

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

  // For BarCodeScannerView
  const handleBarCodeScanned = useCallback<BarCodeScannerViewProps['handleBarCodeScanned']>(({ type, data }) => {
    console.log("type", type)
    console.log("data", data)
    if (data.match(/0{13}/g)) {
      Alert.alert(
        'Help Us Out?',
  `The product was not found. Please help us out by sending us 4 photos: 
  
        1. Barcode
        2. Product Front of Package
        3. Nutrition Panel
        4. Ingredients
  `,
        [
          {text: 'Cancel', onPress: () => null},
          {text: 'OK', onPress: () =>{ 
            navigation.navigate('AddProduct');
          }},
        ],
      ); 
    } else if (type && data) {
      navigation.navigate('ProductCategories');
      // navigation.navigate('ProductInfo');
    };
  }, [navigation]);

  const handleCancelButtonOnPress = useCallback<BarCodeScannerViewProps['handleCancelButtonOnPress']>(() => {
    setIsSearchViewVisible(false);
    setSearch('');
    Keyboard.dismiss();
    navigation.setParams({ headerTitle: "Scanner" });
  }, [isSearchViewVisible, search]);

  const handleInfoIconOnPress = useCallback<BarCodeScannerViewProps['handleInfoIconOnPress']>(() => {
    navigation.navigate('Intro');
  }, [navigation]);

  // For ButtonGroup
  const onButtonIndexPress = React.useCallback<BarCodeScannerViewProps['onButtonIndexPress']>((index) => {
    setSelectedButtonIndex(index);
  }, [selectedButtonIndex]);

  // For Photo Library
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);
    if (result.cancelled) {
      setSelectedButtonIndex(0);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await ExpoBarCodeScanner.requestPermissionsAsync();
      setHasBarCodeScannerPermission(status === 'granted');
    })();
  }, [hasBarCodeScannerPermission]);

  useEffect(() => {
    (async () => {
      if (selectedButtonIndex === 1 && !hasPhotoLibraryPermission) {
        if (!hasPhotoLibraryPermission) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status === 'granted') {
            setHasPhotoLibraryPermission(true);
          } else {
            setSelectedButtonIndex(0);
            return;
          }
        }
        pickImage();
      }
    })();
  }, [selectedButtonIndex, hasPhotoLibraryPermission]);

  if (hasBarCodeScannerPermission === null) {
    return <RequestingAccessView />;
  }
  if (hasBarCodeScannerPermission === false) {
    return <NoAccessView />
  }

  return (
    <BarCodeScannerView 
      handleBarCodeScanned={handleBarCodeScanned}
      handleCancelButtonOnPress={handleCancelButtonOnPress}
      handleInfoIconOnPress={handleInfoIconOnPress}
      isSearchViewVisible={isSearchViewVisible}
      // For Search
      onFocus={onFocus}
      search={search}
      updateSearch={updateSearch}
      // For Dropdown
      handleDropdownOnValueDown={handleDropdownOnValueDown}
      handleIOSDropdownOnDonePress={handleIOSDropdownOnDonePress}
      selectedCategory={selectedCategory}
      // For ProductSearchView
      chipList={chipList}
      handleChipOnPress={handleChipOnPress}
      navigation={navigation}
      productList={productList}
      setFavoritedProductIdList={setFavoritedProductIdList}
      // For ButtonGroup
      onButtonIndexPress={onButtonIndexPress}
      selectedButtonIndex={selectedButtonIndex}
    />
  )
};

export default React.memo(BarCodeScanner);