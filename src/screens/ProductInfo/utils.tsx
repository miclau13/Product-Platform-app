
import React from 'react';
import { ActivityIndicator, ImageRequireSource } from 'react-native';

import { ProductInfo, SimilarProduct } from './ProductInfo';

const Mask1Image: ImageRequireSource = require('./assets/mask1.jpeg');
const productInfo: ProductInfo = {
  activeOpacity: 1,
  caption: 
`Kowa PM2.5 High-Density Mask 6pcs S Size

Packing: 6pcs
Mask size: H90 x W145mm`,
  imageSrc: Mask1Image,
  imageProps: {
    resizeMode: 'cover',
    PlaceholderContent: <ActivityIndicator />,
  },
  // imageStyle: {
  //   height: 100,
  //   width: 100, 
  // },
  title: "Kowa, Japan", 
};

export const getDefaultProductInfo = () => {
  return productInfo;
};

const list: SimilarProduct[] = [
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

export const convertToSimilarProductFormat = (list) => {
  const result = list.map(item => {
    return {
      title: item.name,
      leftAvatar: { source: Mask1Image },
      subtitle: item.description
    }
  });
  return result;
}