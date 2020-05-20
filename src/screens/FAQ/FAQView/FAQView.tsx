import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';
import { FAQViewProps } from '../FAQ';

const FAQView: React.ComponentType<FAQViewProps> = (props) => {
  const { 
    faq: {
      content,
    }
  } = props;
  return (
    <ScrollView style={styles.container}>
      <Text h5>{content}</Text>
    </ScrollView>
  );
}
export default React.memo(FAQView);