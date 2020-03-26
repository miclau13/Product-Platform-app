import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import AddProductScreen, { options as AddProductScreenOptions } from "../../../screens/AddProduct";
import ProductComparisonScreen, { options as ProductComparisonScreenOptions } from "../../../screens/ProductComparison";
import ProductInfoScreen, { options as ProductInfoScreenOptions } from "../../../screens/ProductInfo";
import ProductSearchScreen, { options as ProductSearchScreenOptions } from "../../../screens/ProductSearch";
import RecordsHistoryScreen, { options as RecordsHistoryScreenOptions } from "../../../screens/RecordsHistory";
import RecordsSavedScreen, { options as RecordsSavedScreenOptions } from "../../../screens/RecordsSaved";

export type RecordsStackParamList = {
  AddProduct: undefined;
  ProductComparison: undefined;
  ProductInfo: undefined;
  ProductSearch: undefined;
  RecordsHistory: undefined;
  RecordsSaved: undefined;
};

const RecordsStack = createStackNavigator<RecordsStackParamList>();

const RecordsStackScreen = () => {
  return (
    <RecordsStack.Navigator
      initialRouteName="RecordsHistory"
      screenOptions={screenOptions}
    >
      <RecordsStack.Screen name="AddProduct" component={AddProductScreen} options={AddProductScreenOptions}/>
      <RecordsStack.Screen name="ProductInfo" component={ProductInfoScreen} options={ProductInfoScreenOptions}/>
      <RecordsStack.Screen name="ProductSearch" component={ProductSearchScreen} options={ProductSearchScreenOptions}/>
      <RecordsStack.Screen name="RecordsHistory" component={RecordsHistoryScreen} options={RecordsHistoryScreenOptions}/>
      <RecordsStack.Screen name="RecordsSaved" component={RecordsSavedScreen} options={RecordsSavedScreenOptions}/>
    </RecordsStack.Navigator>
  );
};

export default RecordsStackScreen;