
import React from 'react';
import { ImageRequireSource } from 'react-native';

import { RecordsItems } from './Records';

const Mask1Image: ImageRequireSource = require('./assets/mask1.jpeg');

const list: RecordsItems[] = [
  {
    title: 'Kowa PM2.5 High-Density Mask',
    leftAvatar: { source: Mask1Image },
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm'
  },
  {
    title: 'Kowa PM2.5 High-Density Mask',
    leftAvatar: { source: Mask1Image },
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm'
  },
];

export const getDefaultList = () => {
  return list;
};