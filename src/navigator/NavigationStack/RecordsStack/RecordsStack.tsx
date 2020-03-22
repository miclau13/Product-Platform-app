import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import AddProductScreen, { options as AddProductScreenOptions } from "../../../screens/AddProduct";
import RecordsScreen, { options as RecordsScreenOptions } from "../../../screens/Records";

export type RecordsStackParamList = {
  AddProduct: undefined;
  Records: undefined;
};

const RecordsStack = createStackNavigator<RecordsStackParamList>();

const RecordsStackScreen = () => {
  return (
    <RecordsStack.Navigator
      initialRouteName="Records"
      screenOptions={screenOptions}
    >
      <RecordsStack.Screen name="Records" component={RecordsScreen} options={RecordsScreenOptions}/>
      <RecordsStack.Screen name="AddProduct" component={AddProductScreen} options={AddProductScreenOptions}/>
    </RecordsStack.Navigator>
  );
};

export default RecordsStackScreen;