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
  },
  tileContainerStyle: {
    flex: 0.25,
    flexGrow: 1,
    margin: 0, 
    padding: 8,
    shadowOpacity: 0,
  },
  tileContentContainerStyle: {
    height: 0,
  }
});

export default styles;