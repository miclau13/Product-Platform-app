import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import { useSelectCategoryContext } from '../../../context/SelectCategoryContext';
import { useDisplayIntroContext } from '../../../context/DisplayIntroContext';
import AboutUsScreen, { options as AboutUsScreenOptions } from "../../../screens/AboutUs";
import AddProductScreen, { options as AddProductScreenOptions } from "../../../screens/AddProduct";
import BarCodeScannerScreen, { options as BarCodeScannerScreenOptions } from '../../../screens/BarCodeScanner';
import CommentsScreen, { options as CommentsScreenOptions } from "../../../screens/Comments";
import FAQScreen, { options as FAQScreenOptions } from "../../../screens/FAQ";
import IntroScreen, { options as IntroScreenOptions } from "../../../screens/Intro";
import MoreScreen, { options as MoreScreenOptions } from "../../../screens/More";
import ProductCategoriesScreen, { options as ProductCategoriesScreenOptions } from '../../../screens/ProductCategories';
import ProductComparisonScreen, { options as ProductComparisonScreenOptions } from "../../../screens/ProductComparison";
import ProductInfoScreen, { options as ProductInfoScreenOptions } from "../../../screens/ProductInfo";
import ProductSearchScreen, { Product, options as ProductSearchScreenOptions } from "../../../screens/ProductSearch";
import ProductSearchMultiSelectScreen, { options as ProductSearchMultiSelectScreenOptions } from "../../../screens/ProductSearchMultiSelect";
import RecordsScreen, { options as RecordsScreenOptions } from "../../../screens/Records";
import RecordsHistoryScreen, { options as RecordsHistoryScreenOptions } from "../../../screens/RecordsHistory";
import RecordsSavedScreen, { options as RecordsSavedScreenOptions } from "../../../screens/RecordsSaved";

export type BarCodeScannerStackParamList = {
  AddProduct: {
    productId?: string;
  };
  AboutUs: undefined;
  BarCodeScanner: {
    headerTitle?: string;
  };
  Comments: undefined;
  FAQ: undefined,
  ProductCategories: undefined;
  ProductComparison: {
    productId: string;
  };
  ProductInfo: {
    productId: string;
  };
  ProductSearch: undefined;
  ProductSearchMultiSelect: {
    productId: string;
    originalSelectedProductIdList: string[];
  };
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
    displayIntro === "YES" ? "Intro" :
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
      <BarCodeScannerStack.Screen name="FAQ" component={FAQScreen} options={FAQScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductComparison" component={ProductComparisonScreen} options={ProductComparisonScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductInfo" component={ProductInfoScreen} options={ProductInfoScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductSearch" component={ProductSearchScreen} options={ProductSearchScreenOptions}/>
      <BarCodeScannerStack.Screen name="ProductSearchMultiSelect" component={ProductSearchMultiSelectScreen} options={ProductSearchMultiSelectScreenOptions}/>
      <BarCodeScannerStack.Screen name="Records" component={RecordsScreen} options={RecordsScreenOptions}/>
      <BarCodeScannerStack.Screen name="RecordsHistory" component={RecordsHistoryScreen} options={RecordsHistoryScreenOptions}/>
      <BarCodeScannerStack.Screen name="RecordsSaved" component={RecordsSavedScreen} options={RecordsSavedScreenOptions}/>
      <BarCodeScannerStack.Screen name="More" component={MoreScreen} options={MoreScreenOptions}/>
      <BarCodeScannerStack.Screen name="Intro" component={IntroScreen} options={IntroScreenOptions}/>
      <BarCodeScannerStack.Screen name="AboutUs" component={AboutUsScreen} options={AboutUsScreenOptions}/>
    </BarCodeScannerStack.Navigator>
  );
};

export default BarCodeScannerStackScreen;