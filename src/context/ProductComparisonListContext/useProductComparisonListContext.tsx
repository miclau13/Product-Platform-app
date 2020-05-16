import React from 'react';
import ProductComparisonListContext from './ProductComparisonListContext';

export default function useProductComparisonListContext() {
  const ctx = React.useContext(ProductComparisonListContext);
  // console.log("useDisplayIntro ctx", ctx)
  if (ctx == null) {
    throw new Error(
      `useDisplayIntro hook can only be called inside the body of a function component ` +
        `that is descendant of DisplayIntrosProvider.`,
    );
  }
  return ctx;
}