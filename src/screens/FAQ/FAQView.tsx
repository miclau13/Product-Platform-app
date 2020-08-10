import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { MoreInfo } from '@context/MoreInfoContext';
import styles from './styles';

export interface FAQViewProps {
  faq: MoreInfo['faq'];
};


const FAQView: React.ComponentType<FAQViewProps> = (props) => {
  const { 
    faq: {
      content,
    }
  } = props;
  return (
    <ScrollView style={styles.container}>
      <Text>{content}</Text>
    </ScrollView>
  );
}
export default React.memo(FAQView);