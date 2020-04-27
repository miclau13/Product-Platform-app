
import React from 'react';
import { ActivityIndicator } from 'react-native';

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
    favorite: false,
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
    labels: [],
    origin: 'USA',
    rating: 5,
    price: 1000,
    selected: true,
    title: " ", 
  },
  { 
    category: 'sanitizer',
    description: 'Sanitizer',
    favorite: false,
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
    labels: [],
    origin: 'USA',
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: 'Paper Roll',
    favorite: false,
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
    labels: [],
    origin: 'USA',
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: 'Rice',
    favorite: false,
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
    labels: [],
    origin: 'USA',
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: '(Description 5)',
    favorite: false,
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
    labels: [],
    origin: 'USA',
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
  { 
    category: 'mask',
    description: '(Description 6)',
    favorite: false,
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
    labels: [],
    origin: 'USA',
    rating: 5,
    price: 1000,
    selected: false,
    title: " ", 
  },
];

export const getDefaultProductList = (productDataList: ProductData[]) => {
  if (productDataList.length > 0) {
    const list: Product[] = productDataList.map(product => {
      const { id, saved, price, origin, productName, category, rating, labels } = product;
      const image = 
        category === "mask" 
          ? MaskCoverImage
          : SanitizerCoverImage
      return ({
        category,
        id,
        image,
        labels,
        origin,
        price,
        rating,
        description: `${productName}`,
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