import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

// import LoadingComponent from '../../components/LoadingComponent';
import { useMoreInfoContext } from '@context/MoreInfoContext';
import { BarCodeScannerStackParamList } from '@navigator/NavigationStack/BarCodeScannerStack';
import FAQView from './FAQView';

type FAQScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'FAQ'
>;

type Props = {
  navigation: FAQScreenNavigationProp;
};

const FAQ: React.ComponentType<Props> = (props) => {
  // const { navigation } = props;
  const { moreInfo } = useMoreInfoContext();
  const { faq } = moreInfo;
  // const [loading] = React.useState(false);
  
  // if (loading) {
  //   return (
  //     <LoadingComponent />
  //   );
  // };

  return (
    <FAQView 
      faq={faq}
    />
  )
};

export default React.memo(FAQ);