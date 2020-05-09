import { StyleSheet } from 'react-native';

import { buttonTextWithWhiteBackgroudColor, pageBackgroundColor } from '../../../styles';

const styles = StyleSheet.create({
  chip: {
    margin: 4,
  },
  dropDownContainer: {
    paddingVertical: 8,
    paddingRight: 8,
  },
  label: {
    color: buttonTextWithWhiteBackgroudColor,
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
  },

  cameraInputContainerStyle: {
    paddingHorizontal: 10,
    width: '100%', 
  },
  cameraInputLabelStyle: {
    color: buttonTextWithWhiteBackgroudColor,
    fontSize: 16, 
    fontWeight: 'bold',
  },
  imageTileListContainerStyle: {
    alignItems: 'center',
    flex: 1, 
    flexDirection: 'row',
  },
  submitButtonContainerStyle: {
    alignSelf: 'center',
    margin: 8, 
    width: '50%', 
  },
  submitButtonTitleStyle: {
    color: buttonTextWithWhiteBackgroudColor,
  },
  submitButtonStyle: {
    backgroundColor: pageBackgroundColor,
  },
});

export default styles;