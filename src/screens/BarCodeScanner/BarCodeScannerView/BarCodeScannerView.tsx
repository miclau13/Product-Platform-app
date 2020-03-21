import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Button, Text, View } from 'react-native';

import styles, { absoluteFillObject } from './styles';
import { BarCodeScannerViewProps } from '../BarCodeScanner';

export const NoAccessView: React.ComponentType = () => {
  return (
    <Text>No access to camera</Text>
  )
};

export const RequestingAccessView: React.ComponentType = () => {
  return (
    <Text>Requesting for camera permission</Text>
  )
};


const BarCodeScannerView: React.ComponentType<BarCodeScannerViewProps> = (props) => {
  const { 
    handleBarCodeScanned,
    handleButtonScanAgainOnPress,
    scanned,
  } = props; 
  
  return (
    <View
      style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={handleButtonScanAgainOnPress} />}
    </View>
  );
}
export default React.memo(BarCodeScannerView);