import React from 'react';

export type ProductRating = {
  productId: string;
  rating: number;
  updatedAt: Date;
};

const initialValue: { productRatingList: Array<ProductRating>, refetch(): void } = { productRatingList: [], refetch: () => {}};
const ProductRatingListContext = React.createContext(initialValue);

export const ProductRatingListContextConsumer = ProductRatingListContext.Consumer;

export default ProductRatingListContext;