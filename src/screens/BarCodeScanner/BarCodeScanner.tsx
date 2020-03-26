import { BarCodeScanner as ExpoBarCodeScanner, BarCodeScannerProps as ExpoBarCodeScannerProps } from 'expo-barcode-scanner';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ButtonProps } from 'react-native';
import { SearchBarProps, IconProps } from 'react-native-elements';
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
  handleButtonScanAgainOnPress: ButtonProps['onPress'];
  handleHistoryIconOnPress: IconProps['onPress'];
  scanned: boolean;

  // For Search
  search: string;
  updateSearch: SearchBarProps['onChangeText'];
};

const BarCodeScanner: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [search, setSearch] = useState('');

  // For Search
  const updateSearch = React.useCallback(search => {
    setSearch(search);
  }, [search]);

  // For BarCodeScannerView
  const handleBarCodeScanned = useCallback<BarCodeScannerViewProps['handleBarCodeScanned']>(({ type, data }) => {
    setScanned(true);
    console.log("type", type)
    console.log("data", data)
    if (type && !data.includes('0')) {
      navigation.navigate('ProductInfo');
      // setScanned(false);
    } else {
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
    }
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }, [scanned]);
  const handleButtonScanAgainOnPress = useCallback<BarCodeScannerViewProps['handleButtonScanAgainOnPress']>(() => {
    setScanned(false);
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
      handleButtonScanAgainOnPress={handleButtonScanAgainOnPress}
      handleHistoryIconOnPress={handleHistoryIconOnPress}
      scanned={scanned}

      search={search}
      updateSearch={updateSearch}
    />
  )
};

export default React.memo(BarCodeScanner);