import { StyleSheet } from 'react-native';
import { pageBackgroundColor, primaryBorderColor } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  gridContainer: {
    // backgroundColor: 'blue',
    backgroundColor: 'white',
    borderRadius: 16,
    // borderWidth: 1,
    borderColor: '#e1e8ee',
    flexDirection: 'row', 
    margin: 8,
    marginBottom: 0, 
    padding: 8,
    // shadowColor: 'rgba(0,0,0, .2)',
    // shadowOffset: { height: 0, width: 0 },
    // shadowOpacity: 1,
    // shadowRadius: 1,
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
    marginRight: 2,
    backgroundColor: pageBackgroundColor,
    borderColor: primaryBorderColor,
    borderWidth: 1,
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
    marginLeft: 10,
  },
  subjectLabelContainer: {
    // maxHeight: 140,
    // overflow: 'hidden',
    // backgroundColor: 'green'
  },
  listItemContentContainer: {
    // backgroundColor: 'pink',
    backgroundColor: 'transparent', 
    marginRight: 40,
    padding: 8,
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row', 
    paddingLeft: 24,
  },
});

export default styles;