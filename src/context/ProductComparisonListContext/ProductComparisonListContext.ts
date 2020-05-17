import React from 'react';
import { Product } from '../ProductListContext';

export type ProductComparison = {
  productId: string;
  comparionsList: Product[];
  updatedAt: Date;
};

const initialValue: { productComparisonList: Array<ProductComparison>, refetch(): void } = { productComparisonList: [], refetch: () => {}};
const ProductComparisonListContext = React.createContext(initialValue);

export const ProductComparisonListContextConsumer = ProductComparisonListContext.Consumer;

export default ProductComparisonListContext;