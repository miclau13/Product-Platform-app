import { find, map } from 'lodash';
import React from 'react';
import { ImageRequireSource, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { Chip } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductComparisonViewProps, ProductComparisonGridViewProps } from '../ProductComparison';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';

const Mask1Image: ImageRequireSource = require('../assets/mask1.jpeg');

const ProductComparisonGridView: React.ComponentType<ProductComparisonGridViewProps> = (props) => {
  const { 
    productInfoList,
  } = props;

  const labels = find(productInfoList, (product) => product.key === "labels").value.split(",").map(label => label.trim()).filter(Boolean);
  return (
    <View style={styles.gridContainer}>
      <Image
        source={Mask1Image}
        style={{ width: 100, height: 100 }}
      />
        <View style={styles.rightContainer}>
          <View style={styles.contentContainer}>
            {map(productInfoList, (item, key) => {
                if (item.key === "labels" || item.key === "id") return;
                const isInNumberFormat = item.key === 'price';
                return (
                  <View key={key}>
                    {!isInNumberFormat 
                      ? <Text>{item.value}</Text> 
                      : <NumberFormat 
                        decimalScale={0}
                        displayType={'text'} 
                        prefix={'$'}
                        renderText={value => <Text>{`${value}`}</Text>}
                        thousandSeparator={true} 
                        value={item.value}
                      />
                    }
                    <View style={{ marginBottom: 8 }} />
                  </View>
                )
            })}
          </View>
          <View style={styles.labelContainer}>
            {(labels || []).map(label => {
              return (
                <Chip key={label} style={styles.chip}>{label}</Chip>
              )
            })}
          </View>
      </View>
    </View>
  )
};

const ProductComparisonView: React.ComponentType<ProductComparisonViewProps> = (props) => {
  const { 
    handlePlusIconOnPress,
    navigation,
    productInfoList,
    productComparisonInfoList,
  } = props;
  
  return (
    <View style={styles.container}>
      <ProductComparisonGridView productInfoList={productInfoList} />
      <View style={{ marginVertical: 8 }} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handlePlusIconOnPress}
      >
        <View style={styles.plusIconContainer}>
          <Icon name="add" color='#00aced' onPress={handlePlusIconOnPress} />
        </View>
      </TouchableOpacity>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {productComparisonInfoList.map((comparison, index) => {
              return (
                <ProductComparisonGridView 
                  productInfoList={comparison}
                  key={index}
                />
              )
            })}
        </ScrollView>
      </SafeAreaView>
      <FloatingMenuComponent 
        currenScreen="BarCodeScanner"
        navigation={navigation}
      /> 
    </View>
  );
}
export default React.memo(ProductComparisonView);