
import React from 'react';
import { ImageRequireSource } from 'react-native';

import { Buttons, RecordsItem } from './Records';

const Mask1Image: ImageRequireSource = require('./assets/mask1.jpeg');

const buttons: Buttons[] = ['All', 'Saved'];

const currentTime = new Date().toDateString().split(" ").slice(1).join(" ");

const allList: RecordsItem[] = [
  {
    id: '1',
    favorite: false,
    leftAvatar: { source: Mask1Image },
    rightTitle: `${currentTime}`,
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm',
    title: 'Kowa PM2.5 High-Density Mask',
  },
  {
    id: '2',
    favorite: false,
    leftAvatar: { source: Mask1Image },
    rightTitle: `${currentTime}`,
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm',
    title: 'Kowa PM2.5 High-Density Mask',
  },
  {
    id: '3',
    favorite: false,
    leftAvatar: { source: Mask1Image },
    rightTitle: `${currentTime}`,
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm',
    title: 'Kowa PM2.5 High-Density Mask',
  },
  {
    id: '4',
    favorite: false,
    leftAvatar: { source: Mask1Image },
    rightTitle: `${currentTime}`,
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm',
    title: 'Kowa PM2.5 High-Density Mask',
  },
];

const savedlist: RecordsItem[] = [
  {
    id: '1',
    favorite: true,
    title: 'Kowa PM2.5 High-Density Mask',
    leftAvatar: { source: Mask1Image },
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm'
  },
  {
    id: '2',
    favorite: true,
    title: 'Kowa PM2.5 High-Density Mask',
    leftAvatar: { source: Mask1Image },
    subtitle: 'Packing: 6pcs\nMask size: H90 x W145mm'
  },
];

export const getDefaultAllList = () => {
  return allList;
};

export const getDefaultSavedList = () => {
  return savedlist;
};

export const getDefaultButtons = () => {
  return buttons;
};