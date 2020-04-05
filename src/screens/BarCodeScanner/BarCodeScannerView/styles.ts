import { StyleSheet } from 'react-native';

import { screenWidth } from '../../../styles';

const qrSize = screenWidth * 0.7;
const opacity = 'rgba(0, 0, 0, .6)';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
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

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export default styles;