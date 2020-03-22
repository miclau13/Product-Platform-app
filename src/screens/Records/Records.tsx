import React from 'react';
import { TileProps, ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultList } from './utils';
import RecordsView from './RecordsView';
import LoadingComponent from '../../components/LoadingComponent';
import { RecordsStackParamList } from '../../navigator/NavigationStack/RecordsStack';

type RecordsScreenNavigationProp = StackNavigationProp<
  RecordsStackParamList,
  'Records'
>;

type Props = {
  navigation: RecordsScreenNavigationProp;
};

export type Records = TileProps;
export type RecordsItems = ListItemProps;

export interface RecordsViewProps {
  recordsItemsList: RecordsItems[];
};

const Records: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const recordsItemsList = getDefaultList();

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <RecordsView 
      recordsItemsList={recordsItemsList}
    />
  )
};

export default React.memo(Records);