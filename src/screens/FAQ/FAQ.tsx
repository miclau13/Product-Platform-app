import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import FAQView from './FAQView';
import LoadingComponent from '../../components/LoadingComponent';
import { useMoreInfoContext, MoreInfo } from '../../context/MoreInfoContext';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type FAQScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'FAQ'
>;

type Props = {
  navigation: FAQScreenNavigationProp;
};

export interface FAQViewProps {
  faq: MoreInfo['faq'];
};


const FAQ: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const { moreInfo } = useMoreInfoContext();
  const { faq } = moreInfo;
  const [loading] = React.useState(false);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <FAQView 
      faq={faq}
    />
  )
};

export default React.memo(FAQ);