
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
      title: 'Selected', 
    },
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
    selected: true,
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Select', 
    },
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
    selected: false,
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Select', 
    },
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
    selected: false,
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Select', 
    },
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
    selected: false,
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Select', 
    },
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
    selected: false,
    title: " ", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='playlist-add' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Select', 
    },
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
    selected: false,
    title: " ", 
  },
];

export const getDefaultProductList = () => {
  return productList;
}