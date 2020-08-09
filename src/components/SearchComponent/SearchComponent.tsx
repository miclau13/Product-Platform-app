import React from 'react';
import { Icon, SearchBar, SearchBarProps } from 'react-native-elements';

import styles from './styles';

const SearchBarComponent: React.ComponentType<SearchBarProps> = (props) => {
  return (
    <SearchBar
      lightTheme
      round
      containerStyle={styles.container}
      placeholder="搜尋"
      inputStyle={styles.inputStyle}
      allowFontScaling={false}
      {...props}
    />
  )
}; 

export default SearchBarComponent;