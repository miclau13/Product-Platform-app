import { StyleSheet } from 'react-native';

import { pageBackgroundColor, primaryBorderColor } from '../../../styles';

const styles = StyleSheet.create({
  chip: {
    backgroundColor: pageBackgroundColor,
    borderColor: primaryBorderColor,
    marginBottom: 4,
    marginRight: 4,
    fontSize: 8,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    flexDirection: "column", 
    marginHorizontal: 16,
    maxWidth: '50%',
    padding: 8,
  },
  gridContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: primaryBorderColor,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row', 
    margin: 8,
    marginBottom: 0,
    padding: 8,
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    maxHeight: 212,
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