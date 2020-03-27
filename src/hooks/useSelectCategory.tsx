import React, { Dispatch, ReducerAction } from 'react';

interface State {
  selectCategory: boolean,
};

interface Action {
  type: 'REMOVE_SELECT_CATEGORY';
};

type Reducer = (prevState: State, action: Action) => State;

const initialState = {
  selectCategory: true,
};

const reducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case 'REMOVE_SELECT_CATEGORY':
      return {
        ...prevState,
        selectCategory: false,
      };
  }
};

const useForceUpdate = () => React.useReducer(state => !state, false)[1];
const createSharedState = (reducer: Reducer, initialState: State) => {
  const subscribers = [];
  let state = initialState;
  const dispatch = (action: Action) => {
    state = reducer(state, action);
    subscribers.forEach(callback => callback());
  };
  const useSharedState: () => [State, Dispatch<ReducerAction<Reducer>>] = () => {
    const forceUpdate = useForceUpdate();
    React.useEffect(() => {
      const callback = () => forceUpdate();
      subscribers.push(callback);
      callback(); // in case it's already updated
      const cleanup = () => {
        const index = subscribers.indexOf(callback);
        subscribers.splice(index, 1);
      };
      return cleanup;
    }, []);
    return [state, dispatch];
  };
  return useSharedState;
};

const useSelectCategoryState = createSharedState(reducer, initialState);

export default useSelectCategoryState;