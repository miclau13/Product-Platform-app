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
import mapping from '../../../languages/CN/mapping';

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
    handleClearSearch,
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
    // For ProductSearchMultiSelect
  } = props; 
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.topBarContainer}>
        <View style={styles.dropDownContainer}>
          <DropdownComponent
            items={[
              { label: mapping['Mask'], value: 'mask' },
              { label: mapping['Sanitizer'], value: 'sanitizer' },
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
              title={mapping["Cancel"]}
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
            handleClearSearch={handleClearSearch}
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