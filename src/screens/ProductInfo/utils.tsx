
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ProductInfo } from './ProductInfo';

const Mask1Image: ProductInfo['imageSrc'] = require('./assets/mask1.jpeg');
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
}