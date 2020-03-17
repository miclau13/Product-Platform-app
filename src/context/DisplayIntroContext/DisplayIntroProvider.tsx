import * as SecureStore from 'expo-secure-store';
import React from 'react';

import DisplayIntroContext from './DisplayIntroContext';

export type DisplayIntroProviderProps<T extends string> = {
  children: React.ReactNode;
};

const Provider = DisplayIntroContext.Provider;

const DisplayIntroProvider = <T extends string>({
  children
}: DisplayIntroProviderProps<T>) => {
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

  return (
    <Provider value={displayIntroContext}>
      {children}
    </Provider>
  );
}

export default Provider;
