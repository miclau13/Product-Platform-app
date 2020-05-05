import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chip: {
    margin: 4,
  },  
  container: {
    flex: 1,
  },
  labelContainer: {
    backgroundColor: 'white',
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 8,
  },
  productListContainer: {
    justifyContent: 'center',
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  topBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  cardBadgeStyle: {
    height: 45,
    // width: 60,
  },
  cardIconContainerStyle: {
    position: 'absolute',
    right: 4,
    top: -34,
    zIndex: 2,
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
    borderWidth: 0,
    flexGrow: 1,
    margin: 0, 
    padding: 8,
    shadowOpacity: 0,
    width: '50%',
  },
  cardImageStyle: {
    borderWidth: 1, 
    borderRadius: 4,
    borderColor: '#B5B5B5',
  },
  priceContainer: {
    alignItems: 'center', 
    justifyContent: 'flex-end',
  },
  title: {
    color: '#7F7F7F',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;