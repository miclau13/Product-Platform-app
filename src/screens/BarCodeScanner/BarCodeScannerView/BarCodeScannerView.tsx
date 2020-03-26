import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import styles, { absoluteFillObject } from './styles';
import { BarCodeScannerViewProps } from '../BarCodeScanner';
import SearchBarComponent from '../../../components/SearchComponent';

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
    handleHistoryIconOnPress,
    scanned,

    search,
    updateSearch,
  } = props; 
  
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <SearchBarComponent 
          value={search}
          onChangeText={updateSearch}
        />
        <Icon
          containerStyle={styles.iconContainer}
          onPress={handleHistoryIconOnPress}
          name="history"
          size={36}
        />
      </View>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={handleButtonScanAgainOnPress} />}
      </View>
    </View>
  );
}
export default React.memo(BarCodeScannerView);