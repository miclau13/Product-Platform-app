import { BarCodeScanner } from 'expo-barcode-scanner';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, ButtonGroup, ButtonGroupProps, Icon, Text } from 'react-native-elements';

import styles, { absoluteFillObject, buttonGroupStyles } from './styles';
import { BarCodeScannerViewProps } from '../BarCodeScanner';
import BarCodeScannerMarkerView from '../BarCodeScannerMarkerView';
import ProductSearch from '../../ProductSearch';
import DropdownComponent from '../../../components/DropdownComponent';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
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
    handleInfoIconOnPress,
    isSearchViewVisible,

    // For Search
    onFocus,
    search,
    updateSearch,
    // For Dropdown
    handleDropdownOnValueDown,
    handleIOSDropdownOnDonePress,
    selectedCategory,
    // For ProductSearchView
    chipList,
    handleChipOnPress,
    navigation,
    productList,
    setFavoritedProductIdList,
    // For ButtonGroup
    onButtonIndexPress,
    selectedButtonIndex,
  } = props; 
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <View style={styles.headerBarContainer}>
          <Text h3 style={styles.headerTitle}>Scanner</Text>
          <Icon
            containerStyle={styles.iconContainer}
            onPress={handleInfoIconOnPress}
            name="info-outline"
            size={36}
          /> 
        </View> */}
      <View style={styles.topBarContainer}>
        <View style={styles.dropDownContainer}>
          <DropdownComponent
            items={[
              { label: 'Mask', value: 'mask' },
              { label: 'Sanitizer', value: 'sanitizer' },
            ]}
            onDonePress={handleIOSDropdownOnDonePress}
            onValueChange={handleDropdownOnValueDown}
            value={selectedCategory}
          />
        </View>
        <SearchBarComponent 
          onChangeText={updateSearch}
          onFocus={onFocus}
          value={search}
        />
        {!isSearchViewVisible 
          ? null
          : <Button
              containerStyle={styles.buttonContainer}
              onPress={handleCancelButtonOnPress}
              title="Cancel"
              type="clear"
            />
        }
        </View>
      </SafeAreaView>
      {!isSearchViewVisible 
        ? selectedButtonIndex === 0 
          ? <>
            <View style={styles.container}>
              <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={absoluteFillObject}
              />
              <BarCodeScannerMarkerView />
            </View> 
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
            </>
          : null 
        : <ProductSearch 
            chipList={chipList}
            handleChipOnPress={handleChipOnPress}
            navigation={navigation} 
            productList={productList} 
            setFavoritedProductIdList={setFavoritedProductIdList}
          />
      }
      <FloatingMenuComponent 
        currenScreen="BarCodeScanner"
        navigation={navigation}
      /> 
    </View>
  );
}
export default React.memo(BarCodeScannerView);