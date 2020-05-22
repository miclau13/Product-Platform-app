import { StyleSheet } from 'react-native';

import { headerPrimaryColor } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 24,
  },
  listItemContainer: {
    borderBottomWidth: 1,
    // borderTopWidth: 1,
  },
  listItemTopContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
  }
});

export default styles;