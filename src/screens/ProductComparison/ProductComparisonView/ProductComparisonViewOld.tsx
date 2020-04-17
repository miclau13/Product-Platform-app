import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Avatar, Chip, DataTable } from 'react-native-paper';
import NumberFormat from 'react-number-format';

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
            <DataTable.Title style={styles.left}>Retail Price</DataTable.Title>
            <DataTable.Title style={styles.left}>Keywords on label</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <View style={styles.cellContainter}>
              <Avatar.Image source={require('../assets/mask1.jpeg')} />
              <Text style={styles.celltext}>Kowa PM2.5 High-Density Mask 6pcs S Size</Text>
            </View>
            <DataTable.Cell style={styles.left}>
              <NumberFormat 
                decimalScale={0}
                displayType={'text'} 
                prefix={'$'}
                renderText={value => <Text>{`${value}`}</Text>}
                thousandSeparator={true} 
                value={1000}
              />
            </DataTable.Cell>
            <View style={[styles.cellContainter, styles.labelContainer]}>
              <Chip style={styles.chip}>Label 1</Chip>
              <Chip style={styles.chip}>Label 2</Chip>
              <Chip style={styles.chip}>Label 3</Chip>
            </View>
          </DataTable.Row>

          <DataTable.Row>
            <View style={styles.cellContainter}>
              <Avatar.Image source={require('../assets/mask1.jpeg')} />
              <Text style={styles.celltext}>Kowa PM2.5 High-Density Mask 6pcs S Size</Text>
            </View>
            <DataTable.Cell style={styles.left}>
              <NumberFormat 
                decimalScale={0}
                displayType={'text'} 
                prefix={'$'}
                renderText={value => <Text>{`${value}`}</Text>}
                thousandSeparator={true} 
                value={1000}
              />
            </DataTable.Cell>
            <View style={[styles.cellContainter, styles.labelContainer]}>
              <Chip style={styles.chip}>Label 1</Chip>
              <Chip style={styles.chip}>Label 2</Chip>
            </View>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductComparisonView);