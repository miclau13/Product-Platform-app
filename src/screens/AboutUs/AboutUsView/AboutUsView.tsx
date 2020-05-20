import React from 'react';
import { View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

import styles from './styles';
import { AboutUsViewProps } from '../AboutUs';

const AboutUsView: React.ComponentType<AboutUsViewProps> = (props) => {
  const { 
    aboutUs: {
      title,
      content,
      footer,
    }
  } = props;
  return (
    <View style={styles.container}>
      <Text h2 h2Style={{ fontWeight: 'bold' }}>{title}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4>{content}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4>{footer}</Text>
    </View>
  );
}
export default React.memo(AboutUsView);