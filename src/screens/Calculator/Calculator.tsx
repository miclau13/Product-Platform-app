import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import CalculatorView from './CalculatorView';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type CalculatorScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Calculator'
>;

type Props = {
  navigation: CalculatorScreenNavigationProp;
};

const Calculator: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  return (
    <CalculatorView />
  )
};

export default React.memo(Calculator);