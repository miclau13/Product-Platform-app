import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cellContainter: {
    alignItems: 'center',
    flex: 1, 
    flexDirection: 'row', 
    paddingVertical: 16,
  },
  celltext: {
    marginLeft: 16
  },
  chip: {
    marginBottom: 8,
  },
  labelContainer: {
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  left: {
    justifyContent: 'flex-end',
  },
});

export default styles;