import * as SecureStore from 'expo-secure-store';
import { BarCodeScanner as ExpoBarCodeScanner, BarCodeScannerProps as ExpoBarCodeScannerProps } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
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
};

export interface BarCodeScannerViewProps {
  handleBarCodeScanned: ExpoBarCodeScannerProps['onBarCodeScanned'];
  handleScanAgainButtonOnPress: ButtonProps['onPress'];
  handleCancelButtonOnPress: ButtonProps['onPress'];
  handleHistoryIconOnPress: IconProps['onPress'];
  isSearchViewVisible: boolean;
  scanned: boolean;

  // For Search
  handleSearchIconOnPress: IconProps['onPress'];
  onFocus: SearchBarProps['onFocus'];
  search: string;
  updateSearch: SearchBarProps['onChangeText'];

  // For Dropdown
  handleDropdownOnValueDown: PickerProps['onValueChange'];
  handleIOSDropdownOnDonePress: PickerProps['onDonePress'];
  selectedCategory: string;

  // For ProductSearchView
  navigation: Props['navigation'];
  productList: Product[];
  // setProductList: React.Dispatch<React.SetStateAction<Product[]>>;

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
  const [scanned, setScanned] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(defaultSelectedCategory);
  // For ButtonGroup
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0);
  const [hasPhotoLibraryPermission, setHasPhotoLibraryPermission] = useState(false);

  // For ProductSearchView
  // const [productList, setProductList] = React.useState(getDefaultProductList(productDataList.filter(product => product.category === selectedCategory)));
  const productList = React.useMemo(() => {
    let result = getDefaultProductList(productDataList.filter(product => product.category === selectedCategory));
    if (!search) {
      return result;
    };
    result = result.filter(product => product.description.toLowerCase().includes(search.toLowerCase()));
    return result;
    
  }, [productDataList, search, selectedCategory])

  // For Search
  const handleSearchIconOnPress = React.useCallback<BarCodeScannerViewProps['handleSearchIconOnPress']>(() => {
    // const filteredResult = productList.filter(product => 
    //   (product.description.startsWith(search))
    // );
    // setProductList(filteredResult);
  }, [productList, search]);
  const updateSearch = React.useCallback(search => {
    // if (!search) {
    //   setSearch(search);
    //   // setProductList(getDefaultProductList(productDataList));
    // } else {
    //   setSearch(search);
    //   // const filteredResult = productList.filter(product => product.description.toLowerCase().includes(search.toLowerCase()));
    //   // setProductList(filteredResult);
    // }
    setSearch(search);
  }, [productList, search]);
  const onFocus = React.useCallback<BarCodeScannerViewProps['onFocus']>(() => {
    setIsSearchViewVisible(true);
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
    setScanned(true);
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
            // setScanned(false);
          }},
        ],
      ); 
    } else if (type && data) {
      navigation.navigate('ProductInfo');
      // setScanned(false);
    };
  }, [scanned]);
  const handleScanAgainButtonOnPress = useCallback<BarCodeScannerViewProps['handleScanAgainButtonOnPress']>(() => {
    setScanned(false);
  }, [scanned]);
  const handleCancelButtonOnPress = useCallback<BarCodeScannerViewProps['handleCancelButtonOnPress']>(() => {
    setIsSearchViewVisible(false);
    setSearch('');
    Keyboard.dismiss();
  }, [scanned]);
  const handleHistoryIconOnPress = useCallback<BarCodeScannerViewProps['handleHistoryIconOnPress']>(() => {
    navigation.navigate('Records');
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
      handleScanAgainButtonOnPress={handleScanAgainButtonOnPress}
      handleHistoryIconOnPress={handleHistoryIconOnPress}
      isSearchViewVisible={isSearchViewVisible}
      scanned={scanned}
      // For Search
      onFocus={onFocus}
      search={search}
      updateSearch={updateSearch}
      // For Dropdown
      handleDropdownOnValueDown={handleDropdownOnValueDown}
      handleIOSDropdownOnDonePress={handleIOSDropdownOnDonePress}
      selectedCategory={selectedCategory}
      // For ProductSearchView
      handleSearchIconOnPress={handleSearchIconOnPress}
      navigation={navigation}
      productList={productList}
      // setProductList={setProductList}
      // For ButtonGroup
      onButtonIndexPress={onButtonIndexPress}
      selectedButtonIndex={selectedButtonIndex}
    />
  )
};

export default React.memo(BarCodeScanner);