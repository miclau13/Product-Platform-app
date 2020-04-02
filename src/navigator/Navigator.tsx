import * as SecureStore from 'expo-secure-store';
import React from 'react';

import RootTab from './TabNavigator/RootTab';
import RootStack from './NavigationStack/RootStack';
import LoadingComponent from '../components/LoadingComponent';
import { DisplayIntroContextProvider } from '../context/DisplayIntroContext';
import { SelectCategoryContextProvider } from '../context/SelectCategoryContext';

export type StackParamList = {};

interface State {
  displayIntro: boolean,
  loading: boolean,
  selectCategory: boolean,
}

interface Action {
  type: 'REMOVE_INTRO' | 'REMOVE_SELECT_CATEGORY' | 'DISABLE_LOADING';
};

const initialState = {
  displayIntro: true,
  loading: true,
  selectCategory: true,
};
const reducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case 'REMOVE_INTRO':
      return {
        ...prevState,
        displayIntro: false,
      };
    case 'REMOVE_SELECT_CATEGORY':
      return {
        ...prevState,
        selectCategory: false,
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

  const selectCategoryContext = React.useMemo(() => ({
    removeCategoryList: () => dispatch({ type: 'REMOVE_SELECT_CATEGORY' }),
    selectCategory: state.selectCategory
  }), [state.selectCategory]);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let displayIntro, selectCategory;
      try {
        await SecureStore.setItemAsync("selectCategory", "YES");
        await SecureStore.setItemAsync("displayIntro", "YES");
        displayIntro = await SecureStore.getItemAsync("displayIntro");
        selectCategory = await SecureStore.getItemAsync("selectCategory");
      } catch (e) {
        dispatch({ type: 'DISABLE_LOADING' });
      }
      if (displayIntro === "NO") {
        dispatch({ type: 'REMOVE_INTRO' });
      };
      if (selectCategory === "NO") {
        dispatch({ type: 'REMOVE_SELECT_CATEGORY' });
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
      {state.displayIntro ?
        <RootStack />: 
        <SelectCategoryContextProvider value={selectCategoryContext}>
          <RootTab />
        </SelectCategoryContextProvider>
      }
      
    </DisplayIntroContextProvider>
  )
};

export default Navigator;