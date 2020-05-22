
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
    name: 'Mask',
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
    name: 'Sanitizer',
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
    name: 'Paper Roll',
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
    name: 'Rice',
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
    name: '(Description 5)',
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
    name: '(Description 6)',
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
      const { id, saved, price, origin, name, category, rating, labels, photos } = product;
      // console.log("getDefaultProductList getDefaultProductList", photos)
      // const image = 
        // category === "mask" 
        //   ? MaskCoverImage
        //   : SanitizerCoverImage
        // console.log("(photos && photos.length > 0 && photos[0]) ", (photos && photos.length > 0 && photos[0]) )
      const image = (photos && photos.length > 0 && photos[0]) 
        || "https://cdn.ztore.com/images/ztore/production/product/750px/1032361_1.jpg";
      return ({
        category,
        id,
        image,
        labels,
        origin,
        photos: photos.filter(Boolean),
        price,
        rating,
        name: `${name}`,
        favorite: saved,
        imageProps: {
          // resizeMode: 'contain',
          // PlaceholderContent: <ActivityIndicator />
        },
        // imageStyle: {
        //   height: 150,
        //   width: 150, 
        // },
        selected: false,
        // title: " ",
      });
    });
    return list;
  } 
  return [];
}