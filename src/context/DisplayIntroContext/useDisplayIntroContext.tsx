import React from 'react';
import DisplayIntroContext from './DisplayIntroContext';

export default function useDisplayIntroContext() {
  const ctx = React.useContext(DisplayIntroContext);
  // console.log("useDisplayIntro ctx", ctx)
  if (ctx == null) {
    throw new Error(
      `useDisplayIntro hook can only be called inside the body of a function component ` +
        `that is descendant of DisplayIntrosProvider.`,
    );
  }
  return ctx;
}