import React from 'react';
import ProductListContext from './ProductListContext';

export default function useProductListContext() {
  const ctx = React.useContext(ProductListContext);
  // console.log("useDisplayIntro ctx", ctx)
  if (ctx == null) {
    throw new Error(
      `useDisplayIntro hook can only be called inside the body of a function component ` +
        `that is descendant of DisplayIntrosProvider.`,
    );
  }
  return ctx;
}