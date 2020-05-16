import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chip: {
    marginBottom: 4,
    marginRight: 4,
    fontSize: 8
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "column", 
    marginHorizontal: 16,
    padding: 8,
  },
  gridContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e1e8ee',
    flexDirection: 'row', 
    margin: 8,
    marginBottom: 0,
    padding: 8,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  labelContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    // marginLeft: 10
  },
  leftCardContainer: {
    borderWidth: 0,
    // height: 80,
    margin: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    width: 100,
  },
  leftCardImageContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e1e8ee',
    marginBottom: 0,
    position: 'relative',
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  listItemContentContainer: {
    // backgroundColor: 'transparent', 
    padding: 8,
  },
  plusIconContainer:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#bcbbc1',
    padding: 14,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
  },
});

export default styles;