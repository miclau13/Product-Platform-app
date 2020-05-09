
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Category } from './ProductCategories';
import { buttonTextWithWhiteBackgroudColor } from '../../styles';

const MaskCoverImage: Category['image'] = require('./assets/mask_cover.png');
const SanitizerCoverImage: Category['image'] = require('./assets/sanitizer_cover.jpeg');

const categoryList: Category[] = [
  { 
    buttonProps: { 
      buttonStyle: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 32 },
      containerStyle: { paddingHorizontal: 32, paddingVertical: 16 },
      title: 'Mask', 
      titleStyle: { color: buttonTextWithWhiteBackgroudColor, fontSize: 24 },
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
      buttonStyle: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 32 },
      containerStyle: { padding: 32 },
      title: 'Sanitizer',  
      titleStyle: { color: buttonTextWithWhiteBackgroudColor, fontSize: 24 },
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
];

export const getDefaultCategoryList = () => {
  return categoryList;
}