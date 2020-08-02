import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';
import { InfoViewProps } from '../Info';

const InfoView: React.ComponentType<InfoViewProps> = (props) => {
  const { 
    info: {
      title1,
      content1,
      title2,
      content2,
      title3,
      content3,
    }
  } = props;
  return (
    <ScrollView style={styles.container}>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title1}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content1}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title2}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content2}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title3}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content3}</Text>
      <View style={{  marginVertical: 40 }}></View>
    </ScrollView>
  );
}
export default React.memo(InfoView);