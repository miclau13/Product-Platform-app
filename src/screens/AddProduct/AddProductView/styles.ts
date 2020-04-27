import { StyleSheet } from 'react-native';

import { headerPrimaryColor } from '../../../styles';

const styles = StyleSheet.create({
  chip: {
    margin: 4,
  },
  dropDownContainer: {
    paddingVertical: 8,
    paddingRight: 8,
  },
  label: {
    color: headerPrimaryColor
  },
  labelContainer: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 8,
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
    flex: 0.2,
    flexGrow: 1,
    margin: 0, 
    padding: 4,
    shadowOpacity: 0,
  },
  tileContentContainerStyle: {
    // height: 70,
    // paddingTop: 0,
  }
});

export default styles;