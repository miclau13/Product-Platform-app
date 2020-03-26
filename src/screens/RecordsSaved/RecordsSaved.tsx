import React from 'react';
import { TileProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultList } from './utils';
import RecordsSavedView from './RecordsSavedView';
import LoadingComponent from '../../components/LoadingComponent';
import { RecordsStackParamList } from '../../navigator/NavigationStack/RecordsStack';

type RecordsSavedScreenNavigationProp = StackNavigationProp<
  RecordsStackParamList,
  'RecordsSaved'
>;

type Props = {
  navigation: RecordsSavedScreenNavigationProp;
};

export type RecordsSaved = TileProps;
export type RecordsSavedItems = ListItemProps;

export interface RecordsSavedViewProps {
  recordsItemsList: RecordsSavedItems[];
};

const RecordsSaved: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const recordsItemsList = getDefaultList();

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <RecordsSavedView 
      recordsItemsList={recordsItemsList}
    />
  )
};

export default React.memo(RecordsSaved);