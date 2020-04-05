import { StyleSheet } from 'react-native';

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
  topBarContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export default styles;