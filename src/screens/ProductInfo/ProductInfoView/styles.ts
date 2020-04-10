import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 0, 
    marginBottom: 0,
    marginLeft: 0, 
    marginRight: 0, 
  },
  buttonContainer: {
    backgroundColor: '#00aced', 
    width: '100%',
  },
  buttonTitle: {
    color: 'white', 
    fontSize: 16,
  },
  chip: {
    marginBottom: 8,
  },
  container: {
    
  },
  gridContainer: {
    flexDirection: 'row', 
    paddingLeft: 16,
    paddingTop: 32, 
  },
  iconBarContainer: {
    flexDirection: "row", 
  },
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 14,

    // backgroundColor: 'green'
  },
  leftContainer: {
    alignItems: 'center',
  },
  leftImageContainer: {
    height: 150,
    width: '90%', 
    backgroundColor: 'pink'
  },
  rightContainer: {
    flex: 1,
  },
});

export default styles;