import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ButtonGroup, ButtonGroupProps, ListItem } from 'react-native-elements';

import styles, { buttonGroupStyles } from './styles';
import { RecordsViewProps } from '../Records';

const RecordsButtonsGroupView: React.ComponentType<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroup
      containerStyle={buttonGroupStyles.containerStyle}
      innerBorderStyle={{ width: 0 }}
      selectedButtonStyle={buttonGroupStyles.selectedButtonStyle}
      selectedTextStyle={buttonGroupStyles.selectedTextStyle}
      underlayColor='transparent'
      { ...props }
    />
  );
};

const RecordsView: React.ComponentType<RecordsViewProps> = (props) => {
  const { 
    buttons, 
    onButtonIndexPress,
    recordsItemsList,
    selectedButtonIndex,
  } = props;
  
  return (
    <SafeAreaView style={styles.container}>
      <RecordsButtonsGroupView
        buttons={buttons}
        onPress={onButtonIndexPress}
        selectedIndex={selectedButtonIndex}
      />
      <ScrollView style={styles.container}>
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
export default React.memo(RecordsView);