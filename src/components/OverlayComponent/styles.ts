import { StyleSheet } from 'react-native';

import { buttonTextWithWhiteBackgroudColor, primaryIconColor } from '../../styles';

export const selectedColor = primaryIconColor;

const styles = StyleSheet.create({
  ratingContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: buttonTextWithWhiteBackgroudColor,
  },
});

export default styles;