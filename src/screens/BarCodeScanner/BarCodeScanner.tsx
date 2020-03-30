import { BarCodeScanner as ExpoBarCodeScanner, BarCodeScannerProps as ExpoBarCodeScannerProps } from 'expo-barcode-scanner';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { ButtonProps, SearchBarProps, IconProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import BarCodeScannerView, { NoAccessView, RequestingAccessView } from './BarCodeScannerView';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

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
  onFocus: SearchBarProps['onFocus'];
  search: string;
  updateSearch: SearchBarProps['onChangeText'];

  // For ProductSearchView
  navigation: Props['navigation'];
};

const BarCodeScanner: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [hasPermission, setHasPermission] = useState(null);
  const [isSearchViewVisible, setIsSearchViewVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [search, setSearch] = useState('');

  // For Search
  const updateSearch = React.useCallback(search => {
    setSearch(search);
  }, [search]);
  const onFocus = React.useCallback<BarCodeScannerViewProps['onFocus']>(() => {
    setIsSearchViewVisible(true);
  }, [isSearchViewVisible]);

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

  useEffect(() => {
    (async () => {
      const { status } = await ExpoBarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <RequestingAccessView />;
  }
  if (hasPermission === false) {
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

      onFocus={onFocus}
      search={search}
      updateSearch={updateSearch}

      navigation={navigation}
    />
  )
};

export default React.memo(BarCodeScanner);