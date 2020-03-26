import { StyleSheet } from 'react-native';
import { headerPrimaryColor } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const buttonGroupStyles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'transparent', 
    borderWidth: 0,
  },
  selectedButtonStyle: {
    backgroundColor: 'transparent',  
    borderBottomWidth: 1,
    borderBottomColor: headerPrimaryColor,
  },
  selectedTextStyle: {
    color: '#5e6977',
  }
});

export default styles;