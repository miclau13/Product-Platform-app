import React from 'react';
import ProductRatingListContext from './ProductRatingListContext';

export default function useProductRatingListContext() {
  const ctx = React.useContext(ProductRatingListContext);
  // console.log("useDisplayIntro ctx", ctx)
  if (ctx == null) {
    throw new Error(
      `useDisplayIntro hook can only be called inside the body of a function component ` +
        `that is descendant of DisplayIntrosProvider.`,
    );
  }
  return ctx;
}