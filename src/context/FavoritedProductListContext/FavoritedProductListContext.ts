import React from 'react';

export type FavoritedProduct = {
  productId: string;
  saved: boolean;
  updatedAt: Date;
};

const initialValue: { favoritedProductList: Array<FavoritedProduct>, refetch(): void } = { favoritedProductList: [], refetch: () => {}};
const FavoritedProductListContext = React.createContext(initialValue);

export const FavoritedProductListContextConsumer = FavoritedProductListContext.Consumer;

export default FavoritedProductListContext;