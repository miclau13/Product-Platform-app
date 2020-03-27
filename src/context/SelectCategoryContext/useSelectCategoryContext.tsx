import React from 'react';
import SelectCategoryContext from './SelectCategoryContext';

export default function useSelectCategoryContext() {
  const ctx = React.useContext(SelectCategoryContext);
  // console.log("useDisplayIntro ctx", ctx)
  if (ctx == null) {
    throw new Error(
      `useDisplayIntro hook can only be called inside the body of a function component ` +
        `that is descendant of DisplayIntrosProvider.`,
    );
  }
  return ctx;
}