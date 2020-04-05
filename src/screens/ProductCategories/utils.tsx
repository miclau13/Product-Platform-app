
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

import { Category } from './ProductCategories';

const MaskCoverImage: Category['image'] = require('./assets/mask_cover.png');
const SanitizerCoverImage: Category['image'] = require('./assets/sanitizer_cover.jpeg');
const PaperRollCoverImage: Category['image'] = require('./assets/paper_roll_cover.jpeg');
const RiceCoverImage: Category['image'] = require('./assets/rice_cover.jpeg');

const categoryList: Category[] = [
  { 
    buttonProps: { 
      icon: <Icon color='white' name='cursor-default-click' type='material-community' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Choose', 
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
    title: "Mask", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='cursor-default-click' type='material-community' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Choose', 
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
    title: "Sanitizer", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='cursor-default-click' type='material-community' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Choose', 
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
    title: "Category 3", 
  },
  { 
    buttonProps: { 
      icon: <Icon color='white' name='cursor-default-click' type='material-community' />,
      iconRight: true,
      titleStyle: { marginRight: 8 },
      title: 'Choose', 
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
    title: "Category 4", 
  },
];

export const getDefaultCategoryList = () => {
  return categoryList;
}