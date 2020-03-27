import * as SecureStore from 'expo-secure-store';
import React from 'react';

import RootTab from './TabNavigator/RootTab';
import RootStack from './NavigationStack/RootStack';
import LoadingComponent from '../components/LoadingComponent';
import { DisplayIntroContextProvider } from '../context/DisplayIntroContext';

export type StackParamList = {};

interface State {
  displayIntro: boolean,
  loading: boolean,
}

interface Action {
  type: 'REMOVE_INTRO' | 'DISABLE_LOADING';
};

const initialState = {
  displayIntro: true,
  loading: true,
};
const reducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case 'REMOVE_INTRO':
      return {
        ...prevState,
        displayIntro: false,
      };
    case 'DISABLE_LOADING':
      return {
        ...prevState,
        loading: false,
      };
  }
};

const Navigator = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  const displayIntroContext = React.useMemo(() => ({
    removeIntro: () => dispatch({ type: 'REMOVE_INTRO' })
  }), []);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let displayIntro;
      try {
        displayIntro = await SecureStore.getItemAsync("displayIntro");
      } catch (e) {
        dispatch({ type: 'DISABLE_LOADING' });
      }

      if (displayIntro) {
        dispatch({ type: 'REMOVE_INTRO' });
      };
      dispatch({ type: 'DISABLE_LOADING' });
    };
    bootstrapAsync();
    return () => {}
  }, []);

  if (state.loading) {
    return (
      <LoadingComponent />
    );
  };

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