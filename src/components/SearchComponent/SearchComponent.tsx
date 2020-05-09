import React from 'react';
import { Icon, SearchBar, SearchBarProps } from 'react-native-elements';

import styles from './styles';

const SearchBarComponent: React.ComponentType<SearchBarProps> = (props) => {
  return (
    <SearchBar
      lightTheme
      round
      containerStyle={styles.container}
      placeholder="Search"
      inputStyle={styles.inputStyle}
      {...props}
    />
  )
}; 

export default SearchBarComponent;