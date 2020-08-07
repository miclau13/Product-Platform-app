import React from 'react';
import { View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

import styles from './styles';
import { MoreViewProps } from '../More';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
import mapping from '../../../languages/CN/mapping';

const MoreView: React.ComponentType<MoreViewProps> = (props) => {
  const { 
    handleListItemOnPress,
    optionList,
    navigation,
    version,
  } = props;
  
  return (
    <View style={styles.container}>
      {/* <Text h2 style={{ alignSelf: 'center' }}>More</Text> */}
      <View style={{ marginVertical: 16 }}></View>
      <View>
        {optionList.map(option => (
            <ListItem
              chevron
              containerStyle={option.id === 0 ? styles.listItemTopContainer : styles.listItemContainer}
              key={option.id}
              onPress={handleListItemOnPress(option.id)}
              title={mapping[option['title']]}
              titleStyle={{ fontSize: 28 }}
            />
          ))
        }
      </View>
      <View style={{ marginVertical: 32 }}></View>
      <Text h4 style={{ alignSelf: 'center'}}>App Version</Text>
      <Text h4 style={{ alignSelf: 'center'}}>{`${version}`}</Text>
      <View style={{ marginVertical: 4 }}></View>
      <FloatingMenuComponent 
        currenScreen="BarCodeScanner"
        navigation={navigation}
      /> 
    </View>
  );
}
export default React.memo(MoreView);