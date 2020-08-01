import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './src/navigator';
import { primaryIconColor } from './src/styles';

const theme = {
  Icon: {
    color: primaryIconColor
  }
};

const App = connectActionSheet(() => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
});

export default App;