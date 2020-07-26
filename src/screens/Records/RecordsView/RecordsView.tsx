import React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { ButtonGroup, ButtonGroupProps, Icon, ListItem } from 'react-native-elements';

import styles, { buttonGroupStyles } from './styles';
import { RecordsViewProps, RecordsListItemViewProps } from '../Records';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';

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
  const { handleProductOnPress, item } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      key={item.id}
      onPress={handleProductOnPress(item.id)}
    >
      <ListItem
        bottomDivider
        leftAvatar={item.leftAvatar}
        rightIcon={      
          item.favorite      
            ? <Icon
              color='#00aced'
              name={item.favorite ? 'favorite' : 'favorite-border'}
              // onPress={favoriteIconOnPress(item.id)}
              />
            : undefined
        }
        rightTitle={item.rightTitle}
        subtitle={item.subtitle}
        title={item.title}
      />
    </TouchableOpacity>
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
    navigation,
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
      <FloatingMenuComponent 
        currenScreen="Records"
        navigation={navigation}
      /> 
    </SafeAreaView>
  );
}
export default React.memo(RecordsView);