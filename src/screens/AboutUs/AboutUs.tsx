import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import AboutUsView from './AboutUsView';
import LoadingComponent from '../../components/LoadingComponent';
import { useMoreInfoContext, MoreInfo } from '../../context/MoreInfoContext';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type AboutUsScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'AboutUs'
>;

type Props = {
  navigation: AboutUsScreenNavigationProp;
};

export interface AboutUsViewProps {
  aboutUs: MoreInfo['aboutUs'];
};


const AboutUs: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const { moreInfo } = useMoreInfoContext();
  const { aboutUs } = moreInfo;
  const [loading] = React.useState(false);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <AboutUsView 
      aboutUs={aboutUs}
    />
  )
};

export default React.memo(AboutUs);