import React from 'react';
import { ButtonGroupProps, ListItemProps, TileProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultButtons, getDefaultHistoryList, getDefaultSavedList } from './utils';
import RecordsView from './RecordsView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type RecordsScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Records'
>;

type Props = {
  navigation: RecordsScreenNavigationProp;
};

export type Buttons = 'Saved' | 'History';
export type Records = TileProps;
export type RecordsItems = ListItemProps;

export interface RecordsViewProps {
  buttons: Buttons[];
  onButtonIndexPress: ButtonGroupProps['onPress'];
  recordsItemsList: RecordsItems[];
  selectedButtonIndex: number;
};

const Records: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(1);
  const buttons = getDefaultButtons();
  const recordsItemsList = !!selectedButtonIndex ? getDefaultHistoryList() : getDefaultSavedList();

  const onButtonIndexPress = React.useCallback<RecordsViewProps['onButtonIndexPress']>((index) => {
    setSelectedButtonIndex(index);
  }, [selectedButtonIndex])


  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <RecordsView 
      buttons={buttons}
      onButtonIndexPress={onButtonIndexPress}
      recordsItemsList={recordsItemsList}
      selectedButtonIndex={selectedButtonIndex}
    />
  )
};

export default React.memo(Records);