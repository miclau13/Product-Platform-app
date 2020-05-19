import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridContainer: {
    // backgroundColor: 'blue',
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
  leftCardClickAreaStyle: {
    position: 'absolute',
    height: 150,
    width: 130,
    top: -150,
  },
  leftCardFavoriteIconContainerStyle: {
    position: 'absolute',
    right: 4,
    top: -34,
    zIndex: 2,
  },
  leftCardContainer: {
    borderWidth: 0,
    // height: '100%',
    margin: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    width: 130,
  },
  leftCardImageContainer: {
    // backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: '#e1e8ee',
    // marginBottom: 0,
    // position: 'relative',
    position: 'absolute',
    // shadowColor: 'rgba(0,0,0, .2)',
    // shadowOffset: { height: 0, width: 0 },
    // shadowOpacity: 1,
    // shadowRadius: 1,
  },

  chip: {
    marginBottom: 4,
  },
  rightContainer: {
    flex: 1,
  },
  rightContainerOptionIconContainerStyle: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // backgroundColor: 'pink',
    // width: 200,
    // height: 150,
    position: 'absolute',
    right: 4,
    top: 0,
    zIndex: 2,
  },
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    marginLeft: 10
  },
  listItemContentContainer: {
    // backgroundColor: 'pink',
    backgroundColor: 'transparent', 
    marginRight: 40,
    padding: 8,
  },
});

export default styles;