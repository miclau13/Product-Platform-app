import { StyleSheet } from 'react-native';

import { headerPrimaryColor } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: 24,
  },
  ratingContainer: {
    paddingVertical: 8,
    paddingRight: 8,
    borderBottomWidth: 0
  },
  label: {
    color: headerPrimaryColor
  },
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 8,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
});

export default styles;