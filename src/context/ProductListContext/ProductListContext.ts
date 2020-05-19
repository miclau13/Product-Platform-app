import React from 'react';

export type Product = {
  barCodeNumber?: string;
  brandName: string;
  category: string;
  id: string;
  labels: Array<string>;
  name: string;
  origin: string;
  photos?: string[];
  price: number;
  productionDate: Date;
  rating: number;
  saved: boolean;
  remarks: string;
  updatedAt: Date;
};

const initialValue: { productList: Array<Product>, refetch(): void } = { productList: [], refetch: () => {}};
const ProductListContext = React.createContext(initialValue);

export const ProductListContextConsumer = ProductListContext.Consumer;

export default ProductListContext;