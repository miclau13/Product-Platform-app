import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Card, Icon, Rating, Text } from 'react-native-elements';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductSearchViewProps, ProductSearchItemCardProps } from '../ProductSearch';
import SearchBarComponent from '../../../components/SearchComponent';

const ProductSearchItemCard: React.ComponentType<ProductSearchItemCardProps> = (props) => {
  const { buttonProps, description, onPress, ...cardProps } = props;
  return (
    <Card
      {...cardProps}
      containerStyle={styles.cardContainerStyle}
    >
      <Text style={styles.title}>
        {description}
      </Text>
      <Rating
        imageSize={20}
        readonly
        startingValue={5}
      />
      <View style={{ margin: 4 }}></View>
      <View style={{ alignItems: 'center'}}>
        <NumberFormat 
          decimalScale={0}
          displayType={'text'} 
          prefix={'$'}
          renderText={value => <Text>{`${value}`}</Text>}
          thousandSeparator={true} 
          value={1000}
        />
      </View>
      <View style={{ margin: 4 }}></View>
      <Button
        onPress={onPress}
        { ...buttonProps }
      />
    </Card>
  )
};

const ProductSearchView: React.ComponentType<ProductSearchViewProps> = (props) => {
  const { 
    handleHistoryIconOnPress,
    productList, 
    onPress,

    search,
    updateSearch,
  } = props;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarContainer}>
        <SearchBarComponent 
          value={search}
          onChangeText={updateSearch}
        />
        <Icon
          containerStyle={styles.iconContainer}
          onPress={handleHistoryIconOnPress}
          name="history"
          size={36}
      />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.productListContainer}>
          {productList.map(category => {
            return (
              <ProductSearchItemCard key={category.description} {...category} onPress={onPress} />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductSearchView);