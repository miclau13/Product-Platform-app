import { StyleSheet } from 'react-native';

import { headerPrimaryColor } from '../../../styles';

const styles = StyleSheet.create({
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
  }
});

export default styles;