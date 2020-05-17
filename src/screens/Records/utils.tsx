import { ImageRequireSource } from 'react-native';

import { Buttons, RecordsItem } from './Records';
import { Product } from '../../context/ProductListContext';

const Mask1Image: ImageRequireSource = require('./assets/mask1.jpeg');

const buttons: Buttons[] = ['All', 'Saved'];

const currentTime = new Date().toDateString().split(" ").slice(1).join(" ");
const getTime = (date) => new Date(date).toDateString().split(" ").slice(1).join(" ");

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

export const getDefaultAllList = (productList: Product[]) => {
  if (productList.length > 0) {
    const list: RecordsItem[] = productList.map(product => {
      const { id, saved, updatedAt, origin, name } = product;
      return ({
        id,
        favorite: saved,
        leftAvatar: { source: Mask1Image },
        rightTitle: `${getTime(updatedAt)}`,
        subtitle: origin,
        title: name,
      });
    });
    return list;
  } 
  return allList;
};

export const getDefaultSavedList = () => {
  return savedlist;
};

export const getDefaultButtons = () => {
  return buttons;
};