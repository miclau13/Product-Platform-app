import { StyleSheet } from 'react-native';

import { buttonTextWithWhiteBackgroudColor, pageBackgroundColor, primaryBorderColor } from '../../../styles';

const styles = StyleSheet.create({

  dropDownContainer: {
    paddingVertical: 8,
    paddingRight: 8,
  },


  textAreaContainer: {
    backgroundColor: pageBackgroundColor,
    borderColor: primaryBorderColor,
    borderWidth: 1,
    marginVertical: 8,
    padding: 5
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


  // Update 2/8
  chip: {
    margin: 4,
  },
  contanier: {
    backgroundColor: 'white',
  },
  errorBorder: {
    borderColor: 'red',
  },
  inputContainer: {
    backgroundColor: pageBackgroundColor,
    borderColor: primaryBorderColor,
    borderWidth: 1,
    marginVertical: 4,
    padding: 4
  },
  label: {
    color: buttonTextWithWhiteBackgroudColor,
  },
  labelContainer: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 4,
    marginLeft: 4,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  verticalViewBox1: {
    marginVertical: 8,
  },
});

export default styles;