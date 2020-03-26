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

  cardContainerStyle: {
    borderWidth: 0,
    flexGrow: 1,
    margin: 0, 
    shadowOpacity: 0 
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;