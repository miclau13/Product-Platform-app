import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import BarCodeScannerScreen, { options as BarCodeScannerScreenOptions } from '../../../screens/BarCodeScanner';
import ProductCategoriesScreen, { options as ProductCategoriesScreenOptions } from '../../../screens/ProductCategories';
import AddProductScreen, { options as AddProductScreenOptions } from "../../../screens/AddProduct";
import ProductComparisonScreen, { options as ProductComparisonScreenOptions } from "../../../screens/ProductComparison";
import ProductInfoScreen, { options as ProductInfoScreenOptions } from "../../../screens/ProductInfo";
import ProductSearchScreen, { options as ProductSearchScreenOptions } from "../../../screens/ProductSearch";
import RecordsScreen, { options as RecordsScreenOptions } from "../../../screens/Records";

export type BarCodeScannerStackParamList = {
  AddProduct: undefined;
  BarCodeScanner: undefined;
  ProductCategories: undefined;
  ProductComparison: undefined;
  ProductInfo: undefined;
  ProductSearch: undefined;
  Records: undefined;
};

const BarCodeScannerStack = createStackNavigator<BarCodeScannerStackParamList>();

const BarCodeScannerStackScreen = () => {
  return (
    <BarCodeScannerStack.Navigator
      initialRouteName="ProductCategories"
      screenOptions={screenOptions}
    >
      <BarCodeScannerStack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} options={BarCodeScannerScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductCategories" component={ProductCategoriesScreen} options={ProductCategoriesScreenOptions}/>
      <BarCodeScannerStack.Screen name="AddProduct" component={AddProductScreen} options={AddProductScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductComparison" component={ProductComparisonScreen} options={ProductComparisonScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductInfo" component={ProductInfoScreen} options={ProductInfoScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductSearch" component={ProductSearchScreen} options={ProductSearchScreenOptions}/>
      <BarCodeScannerStack.Screen name="Records" component={RecordsScreen} options={RecordsScreenOptions}/>
    </BarCodeScannerStack.Navigator>
  );
};

export default BarCodeScannerStackScreen;