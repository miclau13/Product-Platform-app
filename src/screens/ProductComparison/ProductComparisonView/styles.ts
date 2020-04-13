import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cellContainter: {
    alignItems: 'center',
    flex: 1, 
    paddingVertical: 8,
  },
  celltext: {
    // marginLeft: 16
  },
  center: {
    justifyContent: 'center',
  },
  chip: {
    margin: 2,
  },  
  fab: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 25,
    bottom: 4,
  },
  labelContainer: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 8,
  },
  plusIconContainer:{
    alignItems: 'center',
    flex: 1, 
  },
  right: {
    justifyContent: 'flex-end',
  },
});

export default styles;