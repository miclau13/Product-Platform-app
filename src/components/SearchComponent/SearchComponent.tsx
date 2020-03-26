import React from 'react';
import { SearchBar, SearchBarProps } from 'react-native-elements';

import styles from './styles';

const SearchBarComponent: React.ComponentType<SearchBarProps> = (props) => {
  return (
    <SearchBar
      lightTheme
      round
      searchIcon
      containerStyle={styles.container}
      placeholder="Search"
      {...props}
    />
  )
}; 

export default SearchBarComponent;