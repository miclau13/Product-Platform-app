import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import styles from './styles';
import { RecordsSavedViewProps } from '../RecordsSaved';

const RecordsSavedView: React.ComponentType<RecordsSavedViewProps> = (props) => {
  const { recordsItemsList } = props;
  
  return (
    <SafeAreaView>
      <ScrollView>
        {recordsItemsList.map((item, i) => (
            <ListItem
              key={i}
              leftAvatar={item.leftAvatar}
              title={item.title}
              subtitle={item.subtitle}
              bottomDivider
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(RecordsSavedView);