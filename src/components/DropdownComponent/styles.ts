import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  iconContainer: {
    top: 8,
    right: 2,
  },
  viewContainer: {
    backgroundColor: '#bdc6cf',
    borderColor: '#86939e',
    borderRadius: 15,
    borderWidth: 0.5,
  }
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingRight: 30, // to ensure the text is never behind the icon

    textAlign: 'center',
    minHeight: 40,
    marginLeft: 10,
  },
  inputAndroid: {
    fontSize: 18,
    paddingRight: 30, // to ensure the text is never behind the icon

    textAlign: 'center',
    minHeight: 40,
    marginLeft: 10,
  },
});

export default styles;