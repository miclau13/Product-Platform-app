import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

// import LoadingComponent from '@components/LoadingComponent';
import { useMoreInfoContext } from '@context/MoreInfoContext';
import { BarCodeScannerStackParamList } from '@navigator/NavigationStack/BarCodeScannerStack';
import TermsView from './TermsView';

type TermsScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Terms'
>;

type Props = {
  navigation: TermsScreenNavigationProp;
};

const Terms: React.ComponentType<Props> = (props) => {
  // const { navigation } = props;
  const { moreInfo } = useMoreInfoContext();
  const { terms } = moreInfo;
  // const [loading] = React.useState(false);
  
  // if (loading) {
  //   return (
  //     <LoadingComponent />
  //   );
  // };

  return (
    <TermsView 
      terms={terms}
    />
  )
};

export default React.memo(Terms);