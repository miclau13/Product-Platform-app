import React from 'react';
import { FlatListProps } from 'react-native';
import { ButtonGroupProps, IconProps, ListItemProps, TileProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultButtons, getDefaultAllList } from './utils';
import RecordsView, { RecordsListItemView } from './RecordsView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import { useProductListContext } from '../../context/ProductListContext';

type RecordsScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Records'
>;

type Props = {
  navigation: RecordsScreenNavigationProp;
};

export type Buttons = 'All' | 'Saved';
export type Records = TileProps;
export interface RecordsItem extends ListItemProps {
  favorite: boolean;
  id: string;
};

export interface RecordsViewProps {
  buttons: Buttons[];
  onButtonIndexPress: ButtonGroupProps['onPress'];
  recordsItemsList: RecordsItem[];
  selectedButtonIndex: number;

  // For RecordItems
  isRefreshing: boolean;
  onRefresh: FlatListProps<RecordsItem>['onRefresh'];
  renderItem: FlatListProps<RecordsItem>['renderItem'];
};

export interface RecordsListItemViewProps {
  favoriteIconOnPress(id: string): IconProps['onPress'];
  item: RecordsItem;
};

const Records: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const { productList } = useProductListContext();
  const [loading] = React.useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0);
  const [recordsItemsList, setRecordsItemsList] = React.useState(getDefaultAllList(productList));
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const recordsItemsSavedList = recordsItemsList.filter(recordItem => recordItem.favorite);
  const buttons = getDefaultButtons();

  const favoriteIconOnPress = React.useCallback<RecordsListItemViewProps['favoriteIconOnPress']>((id) => () => {
    const result = recordsItemsList.map(record => {
      if (id === record.id) {
        return {...record, favorite: !record.favorite};
      }
      return record;
    });
    setRecordsItemsList(result);
  }, [recordsItemsList]);

  const onButtonIndexPress = React.useCallback<RecordsViewProps['onButtonIndexPress']>((index) => {
    setSelectedButtonIndex(index);
  }, [selectedButtonIndex]);

  const onRefresh = React.useCallback<RecordsViewProps['onRefresh']>(async () => {
    setIsRefreshing(true); // true isRefreshing flag for enable pull to refresh indicator
    try {
      // await myRehabRequestsRefetch();
    } catch (error) {
      console.log("refetch error", error)
    };
    setIsRefreshing(false);
  }, [isRefreshing]);

  const renderItem = React.useCallback<RecordsViewProps['renderItem']>(({ item }) => {
    return (
      <RecordsListItemView
        favoriteIconOnPress={favoriteIconOnPress}
        item={item}
      />
    );
  },[favoriteIconOnPress, recordsItemsList, selectedButtonIndex]);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <RecordsView 
      buttons={buttons}
      onButtonIndexPress={onButtonIndexPress}
      selectedButtonIndex={selectedButtonIndex}

      // For RecordItems
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      renderItem={renderItem}
      recordsItemsList={!!selectedButtonIndex ? recordsItemsSavedList : recordsItemsList}
    />
  )
};

export default React.memo(Records);