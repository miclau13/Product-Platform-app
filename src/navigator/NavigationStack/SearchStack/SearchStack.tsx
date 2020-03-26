import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import AddProductScreen, { options as AddProductScreenOptions } from "../../../screens/AddProduct";
import ProductComparisonScreen, { options as ProductComparisonScreenOptions } from "../../../screens/ProductComparison";
import ProductSearchScreen, { options as ProductSearchScreenOptions } from "../../../screens/ProductSearch";
import RecordsScreen, { options as RecordsScreenOptions } from "../../../screens/Records";

export type SearchStackParamList = {
  AddProduct: undefined;
  ProductComparison: undefined;
  ProductSearch: undefined;
  Records: undefined;
};

const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="ProductSearch"
      screenOptions={screenOptions}
    >
      <SearchStack.Screen name="AddProduct" component={AddProductScreen} options={AddProductScreenOptions}/>
      <SearchStack.Screen name="ProductComparison" component={ProductComparisonScreen} options={ProductComparisonScreenOptions}/>
      <SearchStack.Screen name="ProductSearch" component={ProductSearchScreen} options={ProductSearchScreenOptions}/>
      <SearchStack.Screen name="Records" component={RecordsScreen} options={RecordsScreenOptions}/>
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;