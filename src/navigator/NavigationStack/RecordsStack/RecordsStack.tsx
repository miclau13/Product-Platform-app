import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import AddProductScreen, { options as AddProductScreenOptions } from "../../../screens/AddProduct";
import ProductComparisonScreen, { options as ProductComparisonScreenOptions } from "../../../screens/ProductComparison";
import ProductInfoScreen, { options as ProductInfoScreenOptions } from "../../../screens/ProductInfo";
import ProductSearchScreen, { options as ProductSearchScreenOptions } from "../../../screens/ProductSearch";
import RecordsScreen, { options as RecordsScreenOptions } from "../../../screens/Records";

export type RecordsStackParamList = {
  AddProduct: undefined;
  ProductComparison: undefined;
  ProductInfo: undefined;
  ProductSearch: undefined;
  Records: undefined;
};

const RecordsStack = createStackNavigator<RecordsStackParamList>();

const RecordsStackScreen = () => {
  return (
    <RecordsStack.Navigator
      initialRouteName="Records"
      screenOptions={screenOptions}
    >
      <RecordsStack.Screen name="AddProduct" component={AddProductScreen} options={AddProductScreenOptions}/>
      <RecordsStack.Screen name="ProductComparison" component={ProductComparisonScreen} options={ProductComparisonScreenOptions}/>
      <RecordsStack.Screen name="ProductInfo" component={ProductInfoScreen} options={ProductInfoScreenOptions}/>
      <RecordsStack.Screen name="ProductSearch" component={ProductSearchScreen} options={ProductSearchScreenOptions}/>
      <RecordsStack.Screen name="Records" component={RecordsScreen} options={RecordsScreenOptions}/>
    </RecordsStack.Navigator>
  );
};

export default RecordsStackScreen;