import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

import styles from './styles';
import { ProductCategoriesViewProps } from '../ProductCategories';

const ProductCategoriesView: React.ComponentType<ProductCategoriesViewProps> = (props) => {
  const { categoryList, onPress } = props;
  
  return (
    <SafeAreaView>
      <ScrollView>
        {categoryList.map((category, index) => {
          const { buttonProps, description, image, imageProps, title } = category;
          return (
            <Card
              key={index}
              image={image}
              imageProps={imageProps}
              title={title}
            >
              <Text style={styles.title}>
                {description}
              </Text>
              <Button
                onPress={onPress}
                { ...buttonProps }
              />
            </Card>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductCategoriesView);