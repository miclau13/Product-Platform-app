import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 25,
    color: '#007aff'
  },
  buttonWrapperStyle: {
    backgroundColor: 'transparent', 
    flexDirection: 'row', 
    position: 'absolute', 
    top: 0, 
    left: 0,
    flex: 1, 
    paddingHorizontal: 10, 
    paddingVertical: 10, 
    justifyContent: 'space-between', 
    alignItems: 'flex-end',
    textAlign: 'center'
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default styles;