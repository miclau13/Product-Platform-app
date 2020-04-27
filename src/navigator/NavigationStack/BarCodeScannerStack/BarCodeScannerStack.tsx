import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import { useSelectCategoryContext } from '../../../context/SelectCategoryContext';
import { useDisplayIntroContext } from '../../../context/DisplayIntroContext';
import BarCodeScannerScreen, { options as BarCodeScannerScreenOptions } from '../../../screens/BarCodeScanner';
import ProductCategoriesScreen, { options as ProductCategoriesScreenOptions } from '../../../screens/ProductCategories';
import AddProductScreen, { options as AddProductScreenOptions } from "../../../screens/AddProduct";
import ProductComparisonScreen, { options as ProductComparisonScreenOptions } from "../../../screens/ProductComparison";
import ProductInfoScreen, { options as ProductInfoScreenOptions } from "../../../screens/ProductInfo";
import ProductSearchScreen, { options as ProductSearchScreenOptions } from "../../../screens/ProductSearch";
import RecordsScreen, { options as RecordsScreenOptions } from "../../../screens/Records";
import RecordsHistoryScreen, { options as RecordsHistoryScreenOptions } from "../../../screens/RecordsHistory";
import RecordsSavedScreen, { options as RecordsSavedScreenOptions } from "../../../screens/RecordsSaved";
import MoreScreen, { options as MoreScreenOptions } from "../../../screens/More";
import CommentsScreen, { options as CommentsScreenOptions } from "../../../screens/Comments";
import IntroScreen, { options as IntroScreenOptions } from "../../../screens/Intro";

export type BarCodeScannerStackParamList = {
  AddProduct: undefined;
  BarCodeScanner: {
    headerTitle?: string
  };
  Comments: undefined;
  ProductCategories: undefined;
  ProductComparison: undefined;
  ProductInfo: undefined;
  ProductSearch: undefined;
  Records: undefined;
  RecordsHistory: undefined;
  RecordsSaved: undefined;
  More: undefined;
  Intro: undefined;
};

const BarCodeScannerStack = createStackNavigator();

const BarCodeScannerStackScreen = (props) => {
  const { selectedCategory } = useSelectCategoryContext();
  const { displayIntro } = useDisplayIntroContext();
  const initialRouteName = 
    !! displayIntro ? "Intro" :
    !! selectedCategory ? "BarCodeScanner" : "ProductCategories"
  return (
    <BarCodeScannerStack.Navigator
      // headerMode="none"
      initialRouteName={initialRouteName}
      // initialRouteName="More"
      screenOptions={screenOptions}
    >
      <BarCodeScannerStack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} options={BarCodeScannerScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductCategories" component={ProductCategoriesScreen} options={ProductCategoriesScreenOptions}/>
      <BarCodeScannerStack.Screen name="AddProduct" component={AddProductScreen} options={AddProductScreenOptions}/>
      <BarCodeScannerStack.Screen name="Comments" component={CommentsScreen} options={CommentsScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductComparison" component={ProductComparisonScreen} options={ProductComparisonScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductInfo" component={ProductInfoScreen} options={ProductInfoScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductSearch" component={ProductSearchScreen} options={ProductSearchScreenOptions}/>
      <BarCodeScannerStack.Screen name="Records" component={RecordsScreen} options={RecordsScreenOptions}/>
      <BarCodeScannerStack.Screen name="RecordsHistory" component={RecordsHistoryScreen} options={RecordsHistoryScreenOptions}/>
      <BarCodeScannerStack.Screen name="RecordsSaved" component={RecordsSavedScreen} options={RecordsSavedScreenOptions}/>
      <BarCodeScannerStack.Screen name="More" component={MoreScreen} options={MoreScreenOptions}/>
      <BarCodeScannerStack.Screen name="Intro" component={IntroScreen} options={IntroScreenOptions}/>
    </BarCodeScannerStack.Navigator>
  );
};

export default BarCodeScannerStackScreen;