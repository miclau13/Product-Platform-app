import { StyleSheet } from 'react-native';

import { headerColor, pageBackgroundColor } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: pageBackgroundColor,
    flex: 1,
  },
  headerTitle: {
    alignSelf: 'center', 
    color: headerColor,
    marginVertical: 40,
  },
});

export default styles;