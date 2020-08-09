import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Card, Icon, Text } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';
import { Chip } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductSearchViewProps, ProductSearchItemCardProps } from '../ProductSearch';
import { buttonPrimaryColor } from '../../../styles';
import mapping from '../../../languages/CN/mapping';
import ImageCarousel from '../../../components/ImageCarousel';
import ChipComponent from '../../../components/ChipComponent';

const renderCarousel = (photos, currentPage) => {
  return (
    <ImageCarousel
      album={photos}
      currentPage={currentPage}
    />
  )
};

const ProductSearchItemCard: React.ComponentType<ProductSearchItemCardProps> = (props) => {
  const { 
    name, 
    handleFavoriteIconOnPress,
    handleImageAreaOnPress,
    handleSelectButtonOnPress, 
    favorite,
    id, 
    origin,
    price,
    rating,
    selected,
    image,
    photos,
    ...cardProps 
  } = props;

  const buttonIcon = selected 
    ? <Icon color={buttonPrimaryColor} name='check' type='material-community' />
    : null
  const buttonTitle = selected ? 'Selected' : mapping['Select'];
  const buttonType = selected ? 'outline' : 'solid';
  const cardBadge = 
          <Icon
            color='#00aced'
            name={favorite ? 'favorite' : 'favorite-border'}
            containerStyle={styles.cardIconContainerStyle}
            size={32}
            onPress={handleFavoriteIconOnPress(id)}
          />
  // const cardClickArea = 
  //         <TouchableOpacity
  //           activeOpacity={1}
  //           onPress={handleImageAreaOnPress(id)}
  //           style={styles.cardClickAreaStyle}
  //         >
  //         </TouchableOpacity>

  const currentPage = photos.findIndex(_photo => _photo === image);
  
  const ImageComponent = () => {
    return (
      <Lightbox 
        renderContent={() => renderCarousel(photos, currentPage)}
        springConfig={{ tension: 10, friction: 10 }} 
        swipeToDismiss={false}
      >
        <Image
          // key={id}
          style={{
            width: 130,
            height: 130,
            // zIndex: 2,
            borderWidth: 1, 
            borderRadius: 4,
            borderColor: '#B5B5B5',
          }}
          source={{ uri: image }}
          resizeMode='contain'
        />
      </Lightbox>
    )
  }

  return (
    <Card
      {...cardProps}
      image={{ uri: image }}
      imageProps={{
        ImageComponent,
      }}
      imageStyle={styles.cardImageStyle}
      imageWrapperStyle={{ flex: 1 }}
      containerStyle={styles.cardContainerStyle}
      wrapperStyle={{ flex: 1 }}
    >
      {/* {cardBadge} */}
      {/* {cardClickArea} */}
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.title}>
          {name}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.title}>
            {origin}
          </Text> 
          <View style={{ marginHorizontal: 4 }}></View>
          <NumberFormat 
            decimalScale={0}
            displayType={'text'} 
            prefix={'$'}
            renderText={value => <Text style={{ color: '#7F7F7F' }}>{`${value}`}</Text>}
            thousandSeparator={true} 
            value={price}
          />
        </View>
        <View style={{ marginVertical: 4 }}></View>
        <View style={styles.cardBottomContainerStyle}>
          <Button
            iconRight
            buttonStyle={styles.cardSelectButtonStyle}
            containerStyle={styles.cardSelectButtonContainerStyle}
            icon={buttonIcon}
            onPress={handleSelectButtonOnPress(id)}
            titleStyle={styles.cardSelectButtonTitleStyle}
            title={buttonTitle}
            type={buttonType}
          />
          {cardBadge}
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
    handleClearSearch,
    handleFavoriteIconOnPress,
    handleImageAreaOnPress,
    handleSelectButtonOnPress,
    productList, 

    search,
    updateSearch,
  } = props;
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.labelContainer}>
        {chipList.map(chip => {
          return (
            <ChipComponent 
              key={chip.name}
              title={chip.name}
              onPress={handleChipOnPress(chip.name)}
            />
          )
        })}
      </ScrollView>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.productListContainer}>
            {productList.length <= 0
              ? <Card 
                  containerStyle={styles.notFoundCardContainerStyles}
                  dividerStyle={{ height: 0 }}
                  title={mapping['Results Not Found']} 
                  titleStyle={styles.notFoundCardTitleStyles}
                >
                  <Text style={styles.notFoundCardTextStyles}>
                    {mapping["Please share the information you have to us!"]}
                  </Text>
                  <View style={styles.cardBottomContainerStyle}>
                    <Button
                      buttonStyle={styles.notFoundCardButtonStyle}
                      onPress={handleClearSearch}
                      titleStyle={styles.notFoundCardButtonTitleStyle}
                      title={mapping['No, Thanks!']}
                    />
                    <Button
                      buttonStyle={styles.notFoundCardButtonStyle}
                      onPress={handleAddButtonOnPress}
                      titleStyle={styles.notFoundCardButtonTitleStyle}
                      title={mapping['Add Product']}
                    />
                  </View>
                </Card>
              : null
            }
            {productList.map(product => {
              return (
                <View key={product.id} style={styles.cardOuterContainerStyle}>
                  <ProductSearchItemCard 
                    {...product} 
                    handleFavoriteIconOnPress={handleFavoriteIconOnPress}
                    handleImageAreaOnPress={handleImageAreaOnPress}
                    handleSelectButtonOnPress={handleSelectButtonOnPress} 
                  />
                </View>
              )
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
export default React.memo(ProductSearchView);