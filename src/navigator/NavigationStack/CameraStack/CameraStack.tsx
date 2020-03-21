import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenOptions } from './NavigatorOptions';
import CameraScreen, { options as CameraScreenOptions } from "../../../screens/Camera";

export type CameraStackParamList = {
  Camera: undefined;
};

const CameraStack = createStackNavigator<CameraStackParamList>();

const CameraStackScreen = () => {
  return (
    <CameraStack.Navigator
      initialRouteName="Camera"
      screenOptions={screenOptions}
    >
      <CameraStack.Screen name="Camera" component={CameraScreen} options={CameraScreenOptions}/>
    </CameraStack.Navigator>
  );
};

export default CameraStackScreen;