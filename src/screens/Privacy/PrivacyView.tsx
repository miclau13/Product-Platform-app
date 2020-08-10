import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';

import { MoreInfo } from '@context/MoreInfoContext';
import styles from './styles';

export interface PrivacyViewProps {
  privacy: MoreInfo['privacy'];
};

const PrivacyView: React.ComponentType<PrivacyViewProps> = (props) => {
  const { 
    privacy: {
      title1,
      content1,
      title2,
      content2,
      title3,
      content3,
      title4,
      content4,
      title5,
      content5,
      title6,
      content6,
      title7,
      content7,
      title8,
      content8,
      title9,
      content9,
      title10,
      content10,
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
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title4}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content4}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title5}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content5}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title6}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content6}</Text>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title7}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content7}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title8}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content8}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title9}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content9}</Text>
      <Text h4 h4Style={{ fontWeight: 'bold' }}>{title10}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <Text>{content10}</Text>
      <View style={{  marginVertical: 40 }}></View>
    </ScrollView>
  );
}
export default React.memo(PrivacyView);