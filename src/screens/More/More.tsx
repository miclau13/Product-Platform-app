import React from 'react';
import { ListItemProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultOptionList } from './utils';
import MoreView from './MoreView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type MoreScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'More'
>;

type Props = {
  navigation: MoreScreenNavigationProp;
};

type Options = {
  id: number;
  screen: string;
  title: string;
}

export interface MoreViewProps {
  handleListItemOnPress(id: Options['id']): ListItemProps['onPress'];
  optionList: Options[];
};


const More: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const optionList = React.useMemo(() => getDefaultOptionList(),[]);

  const handleListItemOnPress = React.useCallback(id => () => {
    console.log(optionList[id].screen);
  }, [optionList])
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <MoreView 
      handleListItemOnPress={handleListItemOnPress}
      optionList={optionList}
    />
  )
};

export default React.memo(More);