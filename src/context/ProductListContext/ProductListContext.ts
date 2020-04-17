import React from 'react';

export type Product = {
  id: string;
  productName: string;
  barCodeNumber: string;
  category: string;
  price: number;
  origin: string;
  productionDate: Date;
  labels: Array<string>;
  saved: boolean;
  rating: number;
  remarks: string;
};

const initialValue: { productList: Array<Product>} = { productList: []};
const ProductListContext = React.createContext(initialValue);

export const ProductListContextConsumer = ProductListContext.Consumer;

export default ProductListContext;