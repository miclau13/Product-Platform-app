import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Avatar, DataTable } from 'react-native-paper';

import styles from './styles';
import { ProductComparisonViewProps } from '../ProductComparison';

const ProductComparisonView: React.ComponentType<ProductComparisonViewProps> = (props) => {
  const {  } = props;
  
  return (
    <SafeAreaView>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Product</DataTable.Title>
            <DataTable.Title style={styles.leftHeader}>Retail Price</DataTable.Title>
            <DataTable.Title style={styles.leftHeader}>Keywords on label</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <View style={styles.cellContainter}>
              <Avatar.Image source={require('../assets/mask1.jpeg')} />
              <Text style={styles.celltext}>Kowa PM2.5 High-Density Mask 6pcs S Size</Text>
            </View>
            <DataTable.Cell numeric>159</DataTable.Cell>
            <DataTable.Cell numeric>6.0</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>8.0</DataTable.Cell>
          </DataTable.Row>

          {/* <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => { console.log(page); }}
            label="1-2 of 6"
          /> */}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductComparisonView);