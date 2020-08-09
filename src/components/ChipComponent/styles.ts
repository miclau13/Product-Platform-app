import { StyleSheet } from 'react-native';

import { buttonTextWithWhiteBackgroudColor, pageBackgroundColor } from '../../styles';

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    // margin: 8, 
    // width: '50%', 
    borderRadius: 16,
    marginVertical: 4,
    marginRight: 4,
  },
  title: {
    color: 'rgba(0,0,0, 0.87)',
    fontWeight: '400',
    fontSize: 16
  },
  button: {
    // backgroundColor: pageBackgroundColor,
    backgroundColor: '#ebebeb',
  },
  selected: {
    backgroundColor: '#D3D3D3'
  },
});

export default styles;