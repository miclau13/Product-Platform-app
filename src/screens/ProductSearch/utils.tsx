
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

import { Product } from './ProductSearch';
import { Product as ProductData } from '../../context/ProductListContext';

const MaskCoverImage: Product['image'] = require('./assets/mask_cover.png');
const SanitizerCoverImage: Product['image'] = require('./assets/sanitizer_cover.jpeg');
const PaperRollCoverImage: Product['image'] = require('./assets/paper_roll_cover.jpeg');
const RiceCoverImage: Product['image'] = require('./assets/rice_cover.jpeg');

const productList: Product[] = [
  {
    category: 'mask',
    description: 'Mask',
    id: '100',
    image: MaskCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 150,
      width: 150, 
    },
    rating: 5,
    price: 1000,
    selected: true,
    title: " ", 
  },
  { 
    category: 'sanitizer',
    description: 'Sanitizer',
    id: '101',
    image: SanitizerCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 150,
      width: 150, 
    },
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: 'Paper Roll',
    id: '102',
    image: PaperRollCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 150,
      width: 150, 
    },
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: 'Rice',
    id: '103',
    image: RiceCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 150,
      width: 150, 
    },    
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: '(Description 5)',
    id: '104',
    image: RiceCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 150,
      width: 150, 
    },
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: '(Description 6)',
    id: '105',
    image: RiceCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 150,
      width: 150, 
    },
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
];

export const getDefaultProductList = (productDataList: ProductData[]) => {
  if (productDataList.length > 0) {
    const list: Product[] = productDataList.map(product => {
      const { id, saved, price, origin, productName, category, rating } = product;
      const image = 
        category === "mask" 
          ? MaskCoverImage
          : SanitizerCoverImage
      return ({
        category,
        id,
        image,
        price,
        rating,
        description: `${productName} (${origin})`,
        favorite: saved,
        imageProps: {
          resizeMode: 'contain',
          PlaceholderContent: <ActivityIndicator />
        },
        imageStyle: {
          height: 150,
          width: 150, 
        },
        selected: false,
        title: " ",
      });
    });
    return list;
  } 
  return productList;
}