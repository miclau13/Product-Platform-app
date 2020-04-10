import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, ButtonGroup, ButtonGroupProps, Icon } from 'react-native-elements';

import styles, { absoluteFillObject, buttonGroupStyles } from './styles';
import { BarCodeScannerViewProps } from '../BarCodeScanner';
import BarCodeScannerMarkerView from '../BarCodeScannerMarkerView';
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

const BarCodeScannerButtonGroupsView: React.ComponentType<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroup
      buttonStyle={buttonGroupStyles.buttonStyle}
      containerStyle={buttonGroupStyles.containerStyle}
      selectedButtonStyle={buttonGroupStyles.selectedButtonStyle}
      { ...props }
    />
  );
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
    // For ButtonGroup
    onButtonIndexPress,
    selectedButtonIndex,
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
        {!isSearchViewVisible ? 
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
        }
      </View>
      {!isSearchViewVisible ? 
        selectedButtonIndex === 0 ?
          <View style={styles.container}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={handleScanAgainButtonOnPress} />}
            <BarCodeScannerMarkerView />
          </View> :
          null :
        <ProductSearch navigation={navigation}/>
      }
      <View style={styles.buttonGroupContainer}>
        <BarCodeScannerButtonGroupsView
          buttons={
            [ 
              { element: () => <Icon name='barcode' size={40} type="material-community" />},
              { element: () => <Icon name='photo-library' size={40} />},
            ]
          }
          onPress={onButtonIndexPress}
          selectedIndex={selectedButtonIndex}
        />
      </View>
    </View>
  );
}
export default React.memo(BarCodeScannerView);