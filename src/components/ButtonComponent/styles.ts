import { StyleSheet } from 'react-native';

import { buttonTextWithWhiteBackgroudColor, pageBackgroundColor } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 8, 
    width: '50%', 
  },
  title: {
    color: buttonTextWithWhiteBackgroudColor,
  },
  button: {
    backgroundColor: pageBackgroundColor,
  },
});

export default styles;