import { StyleSheet } from 'react-native';

import { buttonTextWithWhiteBackgroudColor, pageBackgroundColor } from '../../../styles';

const styles = StyleSheet.create({
  chip: {
    margin: 4,
  },  
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  labelContainer: {
    backgroundColor: 'white',
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  productListContainer: {
    justifyContent: 'center',
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    padding: 8,
  },
  topBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  cardBadgeStyle: {
    height: 45,
    // width: 60,
  },
  cardBottomContainerStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  cardSelectButtonStyle: {
    backgroundColor: pageBackgroundColor, 
  },
  cardSelectButtonContainerStyle: {
    flex: 1,
  },
  cardSelectButtonTitleStyle: {
    color: buttonTextWithWhiteBackgroudColor,
  },
  cardIconContainerStyle: {
    // position: 'absolute',
    // right: 4,
    // top: -34,
    // zIndex: 2,
    alignSelf: 'center',
    marginLeft: 8,
  },
  cardClickAreaStyle: {
    position: 'absolute',
    // backgroundColor: "#DDDDDD",
    height: 150,
    width: 191,
    top: -150,
    // ...StyleSheet.absoluteFillObject,
  },
  cardContainerStyle: {
    borderRadius: 16,
    margin: 0, 
    padding: 8,
  },
  cardOuterContainerStyle: {
    // borderWidth: 0,
    borderRadius: 16,
    padding: 12,
    width: '50%',
  },
  cardImageStyle: {
    borderWidth: 1, 
    borderRadius: 4,
    borderColor: '#B5B5B5',
  },
  priceContainer: {
    // alignItems: 'center', 
    // justifyContent: 'flex-end',
  },
  title: {
    color: buttonTextWithWhiteBackgroudColor,
    // marginBottom: 10,
    // textAlign: 'center',
  },

  notFoundCardContainerStyles: {
    backgroundColor: '#E2F5FA', 
    borderColor: 'transparent',
    borderRadius: 24, 
    borderWidth: 0, 
    flex: 1,
  },
  notFoundCardTitleStyles: {
    color: buttonTextWithWhiteBackgroudColor, 
    fontSize: 28,
  },
  notFoundCardTextStyles: {
    alignSelf: 'center' ,
    color: buttonTextWithWhiteBackgroudColor,
    fontSize: 24, 
    marginBottom: 10, 
  },
  notFoundCardButtonStyle: {
    backgroundColor: 'white', 
  },
  notFoundCardButtonTitleStyle: {
    color: buttonTextWithWhiteBackgroudColor,
    fontSize: 22,
  },
});

export default styles;