
import React from 'react';
import { ImageRequireSource } from 'react-native';

import { ProductInfo } from './ProductInfo';

const Mask1Image: ImageRequireSource = require('./assets/mask1.jpeg');
const productInfo: ProductInfo = {
  category: "Mask",
  functions: " ",
  origin: "Japan",
  price: 180,
  title: "Kowa", 
};

export const getDefaultProductInfo = () => {
  return productInfo;
};

export const convertToSimilarProductFormat = (list) => {
  const result = list.map(item => {
    return {
      title: item.productName,
      leftAvatar: { source: Mask1Image },
      subtitle: item.description
    }
  });
  return result;
}