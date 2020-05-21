import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import PrivacyView from './PrivacyView';
import LoadingComponent from '../../components/LoadingComponent';
import { useMoreInfoContext, MoreInfo } from '../../context/MoreInfoContext';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type PrivacyScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Privacy'
>;

type Props = {
  navigation: PrivacyScreenNavigationProp;
};

export interface PrivacyViewProps {
  privacy: MoreInfo['privacy'];
};


const Privacy: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const { moreInfo } = useMoreInfoContext();
  const { privacy } = moreInfo;
  const [loading] = React.useState(false);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <PrivacyView 
      privacy={privacy}
    />
  )
};

export default React.memo(Privacy);