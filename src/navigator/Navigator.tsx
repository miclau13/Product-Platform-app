import * as SecureStore from 'expo-secure-store';
import React from 'react';

import RootTab from './TabNavigator/RootTab';
import RootStack from './NavigationStack/RootStack';
import { DisplayIntroContextProvider } from '../context/DisplayIntroContext';

const Navigator = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'REMOVE_INTRO':
          return {
            ...prevState,
            displayIntro: false,
          };
      }
    },
    {
      displayIntro: true,
    }
  );
  const displayIntroContext = React.useMemo(
    () => ({
      removeIntro: () => dispatch({ type: 'REMOVE_INTRO' })
    }), []
  );
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let displayIntro;
      try {
        displayIntro = await SecureStore.getItemAsync("displayIntro");
      } catch (e) {
      }
      if (displayIntro) {
        dispatch({ type: 'REMOVE_INTRO' });
      }
    };
    bootstrapAsync();
    return () => {}
  }, []);
  return (
    <DisplayIntroContextProvider value={displayIntroContext}>
      {!state.displayIntro ?
        <RootTab /> : 
        <RootStack />
      }
      
    </DisplayIntroContextProvider>
  )
};

export default Navigator;