import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import styles from './styles';
import { ProductCategoriesViewProps } from '../ProductCategories';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';

const ProductCategoriesView: React.ComponentType<ProductCategoriesViewProps> = (props) => {
  const { categoryList, onPress, navigation } = props;
  
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <Text h3 style={styles.headerTitle}>You want to find?</Text>
      <ScrollView>
        {categoryList.map((category, index) => {
          const { buttonProps, title } = category;
          return (
            <Button
              key={index}
              onPress={onPress(title)}
              { ...buttonProps }
            />
          )
        })}
      </ScrollView>
      </SafeAreaView>
      <FloatingMenuComponent 
        currenScreen="ProductCategories"
        navigation={navigation}
      /> 
    </View>
  );
}
export default React.memo(ProductCategoriesView);