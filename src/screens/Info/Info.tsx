import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import InfoView from './InfoView';
import LoadingComponent from '../../components/LoadingComponent';
import { useMoreInfoContext, MoreInfo } from '../../context/MoreInfoContext';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type InfoScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Info'
>;

type Props = {
  navigation: InfoScreenNavigationProp;
};

export interface InfoViewProps {
  info: MoreInfo['info'];
};


const Info: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const { moreInfo } = useMoreInfoContext();
  const { info } = moreInfo;
  const [loading] = React.useState(false);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <InfoView 
      info={info}
    />
  )
};

export default React.memo(Info);