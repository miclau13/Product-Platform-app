import { map } from 'lodash';
import React from 'react';
import { ImageRequireSource, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AirbnbRating, Button, Card, Icon, Image, ListItem, Rating } from 'react-native-elements';
import { Chip, Provider } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductInfoViewProps, ProductInfoGridViewProps } from '../ProductInfo';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
import OptionMenuComponent from '../../../components/OptionMenuComponent';

const Mask1Image: ImageRequireSource = require('../assets/mask1.jpeg');

const ProductInfoGridView: React.ComponentType<ProductInfoGridViewProps> = (props) => {
  const { 
    favorite, 
    handleCompareMoreButtonOnPress,
    handleEditIconOnPress, 
    handleFavoriteIconOnPress, 
    handleOnFinishRating,
    handleShareIconOnPress, 
    isExpanded,
    productInfoList,
    compare = false,
    rating
  } = props;

  const cardClickArea = 
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={()=> alert("pressed")}
      // onPress={handleImageAreaOnPress(id)}
      style={styles.leftCardClickAreaStyle}
    >
    </TouchableOpacity>
  const favoriteIcon = 
      <Icon
        color='#00aced'
        name={favorite ? 'favorite' : 'favorite-border'}
        containerStyle={styles.leftCardFavoriteIconContainerStyle}
        size={32}
        onPress={compare ? null : handleFavoriteIconOnPress}
      />
  const chevronIcon = compare &&
      isExpanded 
        ? <Icon name="keyboard-arrow-up" color='#00aced' containerStyle={styles.rightContainerOptionIconContainerStyle} /> 
        : <Icon name="keyboard-arrow-down" color='#00aced' containerStyle={styles.rightContainerOptionIconContainerStyle} />

  const optionItemList = [
    {
      iconProps: { color: '#00aced', name: 'compare-arrows', size: 40 },
      onPress: handleCompareMoreButtonOnPress
    },
    {
      iconProps: { color: '#00aced', name: 'edit', size: 40 },
      onPress: handleEditIconOnPress
    },
    {
      iconProps: { color: '#00aced', name: 'share', size: 40 },
      onPress: handleShareIconOnPress
    },
  ];

  return (
    <View style={styles.gridContainer}>
      <Card
        image={Mask1Image}
        imageProps={{ resizeMode: 'cover' }}
        imageStyle={styles.leftCardImageContainer}
        containerStyle={[styles.leftCardContainer, (compare && !isExpanded && { height: 150 })]}
      >
        {cardClickArea}
        {favoriteIcon}
        {compare 
          ? isExpanded 
              ? <Rating
                  imageSize={18}
                  readonly
                  startingValue={rating}
                /> 
              : null
          :<AirbnbRating
            defaultRating={rating}
            onFinishRating={handleOnFinishRating}
            showRating={false}
            size={18}
          />
        }
      </Card>
      <Provider>
        <View style={styles.rightContainer}>
          {compare 
            ? chevronIcon
            : <OptionMenuComponent 
                containerStyle={styles.rightContainerOptionIconContainerStyle}
                menuItemList={optionItemList}
              />
          }
          {map(productInfoList, (item, key) => {
              const isInNumberFormat = item.key === 'price';
              return (
                <ListItem
                  containerStyle={styles.listItemContentContainer}
                  key={key}
                  title={
                    !isInNumberFormat ? item.value :         
                    <NumberFormat 
                      decimalScale={0}
                      displayType={'text'} 
                      prefix={'$'}
                      renderText={value => <Text style={{ fontSize: 17, marginLeft: 10 }}>{`${value}`}</Text>}
                      thousandSeparator={true} 
                      value={item.value}
                    />
                  }
                  titleStyle={{ marginLeft: 10 }}
                />
              )
            })}
          {compare && !isExpanded 
            ? null
            : <View style={styles.labelContainer}>
              <Chip style={styles.chip}>Label 1</Chip>
              <Chip style={styles.chip}>Label 2</Chip>
              <Chip style={styles.chip}>Label 3</Chip>
              <Chip style={styles.chip}>Label 1</Chip>
              <Chip style={styles.chip}>Label 2</Chip>
              <Chip style={styles.chip}>Label 3</Chip>
            </View>
          }
        </View>
      </Provider>
    </View>
  )
};

const ProductInfoView: React.ComponentType<ProductInfoViewProps> = (props) => {
  const { 
    handleExpand, 
    isExpanded,
    navigation,
    ...productInfoGridViewProps
  } = props;
  
  return (
    <View style={styles.container}>
      <ProductInfoGridView {...productInfoGridViewProps} />
      <View style={{ marginVertical: 8 }} />
      <ListItem
        bottomDivider
        // chevron={isExpanded ? <Icon name="keyboard-arrow-up" /> : <Icon name="keyboard-arrow-down" />}
        // onPress={handleExpand}
        // title="Default"
      />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleExpand}
          >
            <ProductInfoGridView {...productInfoGridViewProps} compare={true} isExpanded={isExpanded} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <FloatingMenuComponent 
        currenScreen="BarCodeScanner"
        navigation={navigation}
      /> 
    </View>
  );
}
export default React.memo(ProductInfoView);