import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles, { absoluteFillObject } from './styles';
import { BarCodeScannerViewProps } from '../BarCodeScanner';
import ProductSearch from '../../ProductSearch';
import DropdownComponent from '../../../components/DropdownComponent';
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
    handleCancelButtonOnPress,
    handleScanAgainButtonOnPress,
    handleHistoryIconOnPress,
    isSearchViewVisible,
    scanned,

    // For Search
    onFocus,
    search,
    updateSearch,
    // For Dropdown
    handleDropdownOnValueDown,
    handleIOSDropdownOnDonePress,
    selectedCategory,
    // For ProductSearchView
    navigation,
  } = props; 
  
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <DropdownComponent
          items={[
            { label: 'Mask', value: 'mask' },
            { label: 'Sanitizer', value: 'sanitizer' },
          ]}
          onDonePress={handleIOSDropdownOnDonePress}
          onValueChange={handleDropdownOnValueDown}
          value={selectedCategory}
        />
        <SearchBarComponent 
          onChangeText={updateSearch}
          onFocus={onFocus}
          value={search}
        />
        {/* {!isSearchViewVisible ? 
          <Icon
            containerStyle={styles.iconContainer}
            onPress={handleHistoryIconOnPress}
            name="history"
            size={36}
          /> : 
          <Button
            containerStyle={styles.buttonContainer}
            onPress={handleCancelButtonOnPress}
            title="Cancel"
            type="clear"
          />
        } */}
      </View>
      {/* {!isSearchViewVisible ? 
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={handleScanAgainButtonOnPress} />}
        </View> :
        <ProductSearch navigation={navigation}/>
      } */}
    </View>
  );
}
export default React.memo(BarCodeScannerView);