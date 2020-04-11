import React from 'react';
import { TouchableHighlight } from 'react-native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Avatar, Chip, DataTable, Divider, FAB, IconButton } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductComparisonViewProps } from '../ProductComparison';

const ProductComparisonView: React.ComponentType<ProductComparisonViewProps> = (props) => {
  const { handlePlusIconOnPress } = props;
  
  return (
    <SafeAreaView>
      <ScrollView>
        <DataTable>
          <DataTable.Header style={{ paddingHorizontal: 0 }}>
            <DataTable.Title style={[styles.center, { flexGrow: 0.4 }]}>Product</DataTable.Title>
            <DataTable.Title style={[styles.center, { flexGrow: 0.4 }]}>Retail Price</DataTable.Title>
            <DataTable.Title style={styles.center}>Keywords on label</DataTable.Title>
            <FAB
              small
              color='#00aced'
              icon="information-outline"
              onPress={() => console.log('Pressed')}
              style={styles.fab}
            />
          </DataTable.Header>
          <DataTable.Row style={{ paddingHorizontal: 0 }}>
            <View style={[styles.cellContainter, { flexGrow: 0.4 }]}>
              <Avatar.Image source={require('../assets/mask1.jpeg')} />
              <View style={{ marginVertical: 4 }}></View>
              <Text style={styles.celltext}>Kowa</Text>
              <Text style={styles.celltext}>(Japan)</Text>
            </View>
            <DataTable.Cell style={[styles.center, { flexGrow: 0.4 }]}>
              <NumberFormat 
                decimalScale={0}
                displayType={'text'} 
                prefix={'$'}
                renderText={value => <Text>{`${value}`}</Text>}
                thousandSeparator={true} 
                value={1000}
              />
            </DataTable.Cell>
            <View style={styles.labelContainer}>
              <Chip style={styles.chip}>Label 1</Chip>
              <Chip style={styles.chip}>Label 2</Chip>
              <Chip style={styles.chip}>Label 3</Chip>
              <Chip style={styles.chip}>Label 4</Chip>
            </View>
          </DataTable.Row>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={handlePlusIconOnPress}
          >
            <View style={styles.plusIconContainer}>
              <IconButton
                icon="plus"
                color='#00aced'
              />
            </View>
          </TouchableHighlight>
          <Divider />
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductComparisonView);