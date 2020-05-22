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
  terms: {
    title1: string;
    content1: string;
    title2: string;
    content2: string;
    title3: string;
    content3: string;
  },
  privacy: {
    title1: string;
    content1: string;
    title2: string;
    content2: string;
    title3: string;
    content3: string;
    title4: string;
    content4: string;
    title5: string;
    content5: string;
    title6: string;
    content6: string;
    title7: string;
    content7: string;
    title8: string;
    content8: string;
    title9: string;
    content9: string;
    title10: string;
    content10: string;
  },
  info: {
    title1: string;
    content1: string;
    title2: string;
    content2: string;
    title3: string;
    content3: string;
  },
  version: {
    content: string;
  },
};

const initialValue: { moreInfo: MoreInfo, refetch(): void } = { moreInfo: {
  aboutUs: {
    title: "",
    content: "",
    footer: "",
  },
  faq: {
    content: "",
  },
  terms: {
    title1: "",
    content1: "",
    title2: "",
    content2: "",
    title3: "",
    content3: "",
  },
  privacy: {
    title1: "",
    content1: "",
    title2: "",
    content2: "",
    title3: "",
    content3: "",
    title4: "",
    content4: "",
    title5: "",
    content5: "",
    title6: "",
    content6: "",
    title7: "",
    content7: "",
    title8: "",
    content8: "",
    title9: "",
    content9: "",
    title10: "",
    content10: "",
  },
  info: {
    title1: "",
    content1: "",
    title2: "",
    content2: "",
    title3: "",
    content3: "",
  },
  version: {
    content: "",
  },
}, refetch: () => {}};
const MoreInfoContext = React.createContext(initialValue);

export const MoreInfoContextConsumer = MoreInfoContext.Consumer;

export default MoreInfoContext;