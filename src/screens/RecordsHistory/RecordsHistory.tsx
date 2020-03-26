import React from 'react';
import { TileProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultList } from './utils';
import RecordsHistoryView from './RecordsHistoryView';
import LoadingComponent from '../../components/LoadingComponent';
import { RecordsStackParamList } from '../../navigator/NavigationStack/RecordsStack';

type RecordsHistoryScreenNavigationProp = StackNavigationProp<
  RecordsStackParamList,
  'RecordsHistory'
>;

type Props = {
  navigation: RecordsHistoryScreenNavigationProp;
};

export type RecordsHistory = TileProps;
export type RecordsHistoryItems = ListItemProps;

export interface RecordsHistoryViewProps {
  recordsItemsList: RecordsHistoryItems[];
};

const RecordsHistory: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const recordsItemsList = getDefaultList();

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <RecordsHistoryView 
      recordsItemsList={recordsItemsList}
    />
  )
};

export default React.memo(RecordsHistory);