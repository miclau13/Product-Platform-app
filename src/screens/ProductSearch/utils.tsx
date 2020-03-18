
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

import { Product } from './ProductSearch';

const MaskCoverImage: Product['image'] = require('./assets/mask_cover.png');
const SanitizerCoverImage: Product['image'] = require('./assets/sanitizer_cover.jpeg');
const PaperRollCoverImage: Product['image'] = require('./assets/paper_roll_cover.jpeg');
const RiceCoverImage: Product['image'] = require('./assets/rice_cover.jpeg');

const productList: Product[] = [
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      raised: true,
      titleStyle: { marginRight: 8 },
      title: 'Add to list', 
    },
    description: '(Description 1)',
    image: MaskCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 100,
      width: 100, 
    },
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Add to list', 
    },
    description: '(Description 2)',
    image: SanitizerCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 100,
      width: 100, 
    },
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Add to list', 
    },
    description: '(Description 3)',
    image: PaperRollCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 100,
      width: 100, 
    },
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Add to list', 
    },
    description: '(Description 4)',
    image: RiceCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 100,
      width: 100, 
    },
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Add to list', 
    },
    description: '(Description 5)',
    image: RiceCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 100,
      width: 100, 
    },
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Add to list', 
    },
    description: '(Description 6)',
    image: RiceCoverImage,
    imageProps: {
      resizeMode: 'contain',
      PlaceholderContent: <ActivityIndicator />
    },
    imageStyle: {
      height: 100,
      width: 100, 
    },
    title: " ", 
  },
];

export const getDefaultProductList = () => {
  return productList;
}