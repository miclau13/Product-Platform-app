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
    buttonProps, 
    description, 
    handleSelectButtonOnPress, 
    id, 
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
    >
      {cardBadge && cardBadge}
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
        iconRight
        icon={buttonIcon}
        onPress={handleSelectButtonOnPress(id)}
        titleStyle={{marginRight: 8 }}
        title={buttonTitle}
        type={buttonType}
      />
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