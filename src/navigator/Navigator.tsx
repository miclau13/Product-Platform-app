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
  selectedCategory: string,
}

interface Action {
  type: 'REMOVE_INTRO' | 'UPDATE_SELECTED_CATEGORY' | 'DISABLE_LOADING';
  value?: string;
};

const initialState = {
  displayIntro: true,
  loading: true,
  selectedCategory: "",
};
const reducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case 'REMOVE_INTRO':
      return {
        ...prevState,
        displayIntro: false,
      };
    case 'UPDATE_SELECTED_CATEGORY':
      return {
        ...prevState,
        selectedCategory: action.value.toLowerCase(),
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
    updateCategoryList: (value: string) => dispatch({ type: 'UPDATE_SELECTED_CATEGORY', value }),
    selectedCategory: state.selectedCategory
  }), [state.selectedCategory]);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let displayIntro, selectedCategory;
      try {
        // await SecureStore.setItemAsync("selectedCategory", "");
        // await SecureStore.setItemAsync("displayIntro", true);
        displayIntro = await SecureStore.getItemAsync("displayIntro");
        selectedCategory = await SecureStore.getItemAsync("selectedCategory");
      } catch (e) {
        dispatch({ type: 'DISABLE_LOADING' });
      }
      if (displayIntro === "NO") {
        dispatch({ type: 'REMOVE_INTRO' });
      };
      if (selectedCategory) {
        dispatch({ type: 'UPDATE_SELECTED_CATEGORY', value: selectedCategory });
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