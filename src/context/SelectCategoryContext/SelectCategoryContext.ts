import React from 'react';

// const initialValue: [boolean, (V: boolean) => void] = [true, (selectedCategory: boolean) => null ];
// [boolean, React.Dispatch<React.SetStateAction<boolean>>]
// const SelectCategoryContextContext = React.createContext(initialValue);
const initialValue = { selectedCategory: "", updateCategoryList: (value: string) => null };
const SelectCategoryContextContext = React.createContext(initialValue);

export const SelectCategoryContextContextConsumer = SelectCategoryContextContext.Consumer;

export default SelectCategoryContextContext;