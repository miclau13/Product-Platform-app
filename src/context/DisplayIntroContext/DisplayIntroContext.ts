import React from 'react';

const DisplayIntroContext = React.createContext({ removeIntro: () => null });

export const DisplayIntroContextConsumer = DisplayIntroContext.Consumer;

export default DisplayIntroContext;