import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import { MoreInfo } from '@context/MoreInfoContext';
import styles from './styles';

export interface AboutUsViewProps {
  aboutUs: MoreInfo['aboutUs'];
};

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