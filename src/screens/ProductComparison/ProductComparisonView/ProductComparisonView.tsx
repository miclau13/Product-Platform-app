import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import styles from './styles';
import { ProductComparisonViewProps } from '../ProductComparison';

const ProductComparisonView: React.ComponentType<ProductComparisonViewProps> = (props) => {
  const {  } = props;
  
  return (
    <SafeAreaView>
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductComparisonView);