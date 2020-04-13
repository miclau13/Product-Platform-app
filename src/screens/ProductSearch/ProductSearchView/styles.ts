import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    justifyContent: 'center', 
  },
  productListContainer: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  topBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  cardBadgeStyle: {
    height: 30,
    width: 60,
  },
  cardBadgeContainerStyle: {
    position: 'absolute',
    right: 4,
    top: -34,
  },
  cardContainerStyle: {
    borderWidth: 0,
    flexGrow: 1,
    // flex: 1,
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
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;