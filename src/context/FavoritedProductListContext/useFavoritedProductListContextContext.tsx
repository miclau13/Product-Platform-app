import React from 'react';
import FavoritedProductListContext from './FavoritedProductListContext';

export default function useFavoritedProductListContext() {
  const ctx = React.useContext(FavoritedProductListContext);
  // console.log("useDisplayIntro ctx", ctx)
  if (ctx == null) {
    throw new Error(
      `useDisplayIntro hook can only be called inside the body of a function component ` +
        `that is descendant of DisplayIntrosProvider.`,
    );
  }
  return ctx;
}