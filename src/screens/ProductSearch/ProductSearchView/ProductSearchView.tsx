import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Card, Icon, Rating, Text } from 'react-native-elements';
import { Chip } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductSearchViewProps, ProductSearchItemCardProps } from '../ProductSearch';
import { buttonPrimaryColor } from '../../../styles';

const ProductSearchItemCard: React.ComponentType<ProductSearchItemCardProps> = (props) => {
  const { 
    description, 
    handleFavoriteIconOnPress,
    handleImageAreaOnPress,
    handleSelectButtonOnPress, 
    favorite,
    id, 
    origin,
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
  const cardBadge = 
          <Icon
            color='#00aced'
            name={favorite ? 'favorite' : 'favorite-border'}
            containerStyle={styles.cardIconContainerStyle}
            size={32}
            onPress={handleFavoriteIconOnPress(id)}
          />
  const cardClickArea = 
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleImageAreaOnPress(id)}
            style={styles.cardClickAreaStyle}
          >
          </TouchableOpacity>

  return (
    <Card
      {...cardProps}
      imageStyle={styles.cardImageStyle}
      containerStyle={styles.cardContainerStyle}
      wrapperStyle={styles.container}
      imageWrapperStyle={styles.container}
    >
      {cardBadge}
      {cardClickArea}
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.title}>
          {description}
        </Text>
        <Text style={styles.title}>
          {origin}
        </Text>
        <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
          {/* <Rating
            imageSize={20}
            readonly
            startingValue={rating}
          /> */}
          <View style={{ margin: 4 }}></View>
          <View style={styles.priceContainer}>
            <NumberFormat 
              decimalScale={0}
              displayType={'text'} 
              prefix={'$'}
              renderText={value => <Text style={{ color: '#7F7F7F' }}>{`${value}`}</Text>}
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
    chipList,
    handleAddButtonOnPress,
    handleChipOnPress,
    handleFavoriteIconOnPress,
    handleImageAreaOnPress,
    handleSelectButtonOnPress,
    productList, 

    search,
    updateSearch,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.labelContainer}>
          {chipList.map(chip => {
            return (
              <Chip 
                key={chip.name}
                onPress={handleChipOnPress(chip.name)}
                selected={chip.selected}
                style={styles.chip}
              >
                {chip.name}
              </Chip>
            )
          })}
        </View>
        <View style={styles.productListContainer}>
          {productList.length <= 0
            ? <Card 
                containerStyle={{ backgroundColor: '#E2F5FA', borderRadius: 24, borderColor: 'transparent', borderWidth: 0 }}
                title='Results Not Found' 
                titleStyle={{ color: '#7F7F7F', fontSize: 28 }}
              >
                <Text style={{ color: '#7F7F7F', marginBottom: 10, fontSize: 24 }}>
                  Please share the information you have to us!
                </Text>
                <View style={{ marginVertical: 16 }}/>
                <Button
                  onPress={handleAddButtonOnPress}
                  titleStyle={{ fontSize: 24 }}
                  title='Add Product'
                />
              </Card>
            : null
          }
          {productList.map(product => {
            return (
              <ProductSearchItemCard 
                key={product.id}
                {...product} 
                handleFavoriteIconOnPress={handleFavoriteIconOnPress}
                handleImageAreaOnPress={handleImageAreaOnPress}
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