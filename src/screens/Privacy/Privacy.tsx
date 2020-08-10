import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

// import LoadingComponent from '../../components/LoadingComponent';
import { useMoreInfoContext, MoreInfo } from '@context/MoreInfoContext';
import { BarCodeScannerStackParamList } from '@navigator/NavigationStack/BarCodeScannerStack';
import PrivacyView from './PrivacyView';

type PrivacyScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Privacy'
>;

type Props = {
  navigation: PrivacyScreenNavigationProp;
};


const Privacy: React.ComponentType<Props> = (props) => {
  // const { navigation } = props;
  const { moreInfo } = useMoreInfoContext();
  const { privacy } = moreInfo;
  // const [loading] = React.useState(false);
  
  // if (loading) {
  //   return (
  //     <LoadingComponent />
  //   );
  // };

  return (
    <PrivacyView 
      privacy={privacy}
    />
  )
};

export default React.memo(Privacy);