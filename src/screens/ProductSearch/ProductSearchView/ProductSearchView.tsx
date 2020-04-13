import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Badge, Button, Card, Icon, Rating, Text } from 'react-native-elements';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductSearchViewProps, ProductSearchItemCardProps } from '../ProductSearch';
import { buttonPrimaryColor } from '../../../styles';
import SearchBarComponent from '../../../components/SearchComponent';

const ProductSearchItemCard: React.ComponentType<ProductSearchItemCardProps> = (props) => {
  const { 
    description, 
    handleSelectButtonOnPress, 
    id, 
    price,
    rating,
    selected,
    ...cardProps 
  } = props;

  const buttonIcon = selected 
    ? <Icon color={buttonPrimaryColor} name='check' type='material-community' />
    : null
  const buttonTitle = selected ? 'Selected' : 'Select';
  const buttonType = selected ? 'outline' : 'solid';
  const cardBadge = selected
    ? <Badge 
        value='Default' 
        badgeStyle={styles.cardBadgeStyle}
        containerStyle={styles.cardBadgeContainerStyle}
      /> 
    : null;

  return (
    <Card
      {...cardProps}
      imageStyle={styles.cardImageStyle}
      containerStyle={styles.cardContainerStyle}
      wrapperStyle={styles.container}
      imageWrapperStyle={styles.container}
    >
      {cardBadge && cardBadge}
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.title}>
          {description}
        </Text>
        <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
          <Rating
            imageSize={20}
            readonly
            startingValue={rating}
          />
          <View style={{ margin: 4 }}></View>
          <View style={styles.priceContainer}>
            <NumberFormat 
              decimalScale={0}
              displayType={'text'} 
              prefix={'$'}
              renderText={value => <Text>{`${value}`}</Text>}
              thousandSeparator={true} 
              value={price}
            />
          </View>
          <View style={{ margin: 4 }}></View>
          <Button
            iconRight
            containerStyle={{ justifyContent: 'flex-end' }}
            icon={buttonIcon}
            onPress={handleSelectButtonOnPress(id)}
            titleStyle={{ marginRight: 8 }}
            title={buttonTitle}
            type={buttonType}
          />
        </View>
      </View>
    </Card>
  )
};

const ProductSearchView: React.ComponentType<ProductSearchViewProps> = (props) => {
  const { 
    handleHistoryIconOnPress,
    productList, 
    handleSelectButtonOnPress,

    search,
    updateSearch,
  } = props;
  // console.log(productList)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.productListContainer}>
          {productList.map(product => {
            return (
              <ProductSearchItemCard 
                key={product.id}
                {...product} 
                handleSelectButtonOnPress={handleSelectButtonOnPress} 
              />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductSearchView);