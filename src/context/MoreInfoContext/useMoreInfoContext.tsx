import React from 'react';
import MoreInfoContext from './MoreInfoContext';

export default function useMoreInfoContext() {
  const ctx = React.useContext(MoreInfoContext);
  // console.log("useDisplayIntro ctx", ctx)
  if (ctx == null) {
    throw new Error(
      `useDisplayIntro hook can only be called inside the body of a function component ` +
        `that is descendant of DisplayIntrosProvider.`,
    );
  }
  return ctx;
}