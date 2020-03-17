import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cellContainter: {
    alignItems: 'center', 
    flex: 1, 
    flexDirection: 'row', 
    paddingVertical: 16
  },
  celltext: {
    marginLeft: 16
  },
  leftHeader: {
    justifyContent: 'flex-end',
  },
});

export default styles;