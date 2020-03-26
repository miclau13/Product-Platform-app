import { BarCodeScanner as ExpoBarCodeScanner, BarCodeScannerProps as ExpoBarCodeScannerProps } from 'expo-barcode-scanner';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ButtonProps } from 'react-native';
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
  scanned: boolean;
};

const BarCodeScanner: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // For BarCodeScannerView
  const handleBarCodeScanned = useCallback<BarCodeScannerViewProps['handleBarCodeScanned']>(({ type, data }) => {
    setScanned(true);
    if (type && data) {
      navigation.navigate('ProductInfo');
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
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
          {text: 'OK', onPress: () => navigation.navigate('AddProduct')},
        ],
      ); 
    }
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }, [scanned]);
  const handleButtonScanAgainOnPress = useCallback<BarCodeScannerViewProps['handleButtonScanAgainOnPress']>(() => {
    setScanned(false);
  }, [scanned]);

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
      scanned={scanned}
  />
  )
};

export default React.memo(BarCodeScanner);