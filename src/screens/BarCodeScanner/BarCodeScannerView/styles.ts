import { StyleSheet } from 'react-native';

import { headerPrimaryColor, screenWidth } from '../../../styles';

const qrSize = screenWidth * 0.7;
const opacity = 'rgba(0, 0, 0, .6)';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    justifyContent: 'center', 
  },
  buttonGroupContainer: {
    alignItems: 'center', 
    bottom: 48,
    position: 'absolute', 
    width: '100%', 
  },
  container: {
    flex: 1,
  },
  dropDownContainer: {
    padding: 8,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    justifyContent: 'center', 
  },
  qr: {
    marginTop: '20%',
    marginBottom: '20%',
    width: qrSize,
    height: qrSize,
  },
  topBarContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});

export const buttonGroupStyles = StyleSheet.create({
  buttonStyle: {
  },
  containerStyle: {
    backgroundColor: 'transparent', 
    height: '100%',
    width: '40%',
  },
  innerBorderStyle: {
    // color: 'red', 
  },
  selectedButtonStyle: {
    backgroundColor: '#5e6977',  
    borderBottomWidth: 0,
    // borderColor: headerPrimaryColor,
  },
  selectedTextStyle: {
    // color: '#5e6977',
    // backgroundColor: 'yellow'
  },
});

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export default styles;