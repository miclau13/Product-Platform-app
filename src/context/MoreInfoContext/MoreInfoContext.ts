import React from 'react';

export type MoreInfo = {
  aboutUs: {
    title: string;
    content: string;
    footer: string;
  },
  faq: {
    content: string;
  },
};

const initialValue: { moreInfo: MoreInfo, refetch(): void } = { moreInfo: {
  aboutUs: {
    title: "",
    content: "",
    footer: ""
  },
  faq: {
    content: "",
  }
}, refetch: () => {}};
const MoreInfoContext = React.createContext(initialValue);

export const MoreInfoContextConsumer = MoreInfoContext.Consumer;

export default MoreInfoContext;