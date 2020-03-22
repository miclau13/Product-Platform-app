import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';
import { AddProductViewProps } from '../AddProduct';

const AddProductView: React.ComponentType<AddProductViewProps> = (props) => {
  
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ margin: 8 }}></View>
      <Input
        keyboardType='number-pad'
        label="Barcode Number"
        labelStyle={styles.label}
        placeholder='99520008302578'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        label="Brand Name"
        labelStyle={styles.label}
        placeholder='Lotte'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        label="Product Name"
        labelStyle={styles.label}
        placeholder='Koala'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        keyboardType='numeric'
        label="Weight(g)/Volume(ml)"
        labelStyle={styles.label}
        placeholder='100.00'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        multiline
        inputContainerStyle={styles.textAreaContainer}
        inputStyle={styles.textArea}
        label="Ingredients"
        labelStyle={styles.label}
        numberOfLines={3}
        placeholder='Add Ingredients Here...'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        multiline
        inputContainerStyle={styles.textAreaContainer}
        inputStyle={styles.textArea}
        label="Remarks"
        labelStyle={styles.label}
        numberOfLines={3}
        placeholder='Add Remarks (Optional)'
      />
      <View style={{ margin: 8 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(AddProductView);