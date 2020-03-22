import 'react-native-gesture-handler';
import React from 'react';

import { connectActionSheet } from '@expo/react-native-action-sheet'
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './src/navigator';

const App = connectActionSheet(() => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
});

export default App;