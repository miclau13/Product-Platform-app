import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ButtonGroup, ButtonGroupProps, Icon, ListItem } from 'react-native-elements';

import styles, { buttonGroupStyles } from './styles';
import { RecordsViewProps, RecordsListItemViewProps } from '../Records';

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

export const RecordsListItemView: React.ComponentType<RecordsListItemViewProps> = (props) => {
  const { favoriteIconOnPress, item } = props;
  return (
    <ListItem
      bottomDivider
      key={item.id}
      leftAvatar={item.leftAvatar}
      rightIcon={            
        <Icon
          color='#00aced'
          name={item.favorite ? 'favorite' : 'favorite-border'}
          onPress={favoriteIconOnPress(item.id)}
        />
      }
      rightTitle={item.rightTitle}
      subtitle={item.subtitle}
      title={item.title}
    />
  );
};

const RecordsView: React.ComponentType<RecordsViewProps> = (props) => {
  const { 
    buttons, 
    onButtonIndexPress,
    selectedButtonIndex,

    // For recordsItem
    isRefreshing,
    onRefresh,
    renderItem,
    recordsItemsList,
  } = props;
  
  return (
    <SafeAreaView style={styles.container}>
      <RecordsButtonsGroupView
        buttons={buttons}
        onPress={onButtonIndexPress}
        selectedIndex={selectedButtonIndex}
      />
      <FlatList
        data={recordsItemsList}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
export default React.memo(RecordsView);