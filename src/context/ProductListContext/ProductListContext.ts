import React from 'react';

export type Product = {
  barCodeNumber: string;
  brandName: string;
  category: string;
  id: string;
  labels: Array<string>;
  name: string;
  origin: string;
  price: number;
  productionDate: Date;
  saved: boolean;
  rating: number;
  remarks: string;
};

const initialValue: { productList: Array<Product>} = { productList: []};
const ProductListContext = React.createContext(initialValue);

export const ProductListContextConsumer = ProductListContext.Consumer;

export default ProductListContext;