import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    backgroundColor: 'white',
    justifyContent: 'center', 
  },
  topBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export const absoluteFillObject = StyleSheet.absoluteFillObject;

export default styles;