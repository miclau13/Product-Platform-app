import { map, pick } from 'lodash';
import React from 'react';
import { Image as RNImage, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { AirbnbRating, Button, Card, Icon, Image, ListItem, Rating, Text } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';
import { Chip, Provider } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductInfoViewProps, ProductInfoGridViewProps } from '../ProductInfo';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
import OptionMenuComponent from '../../../components/OptionMenuComponent';
import ImageCarousel from '../../../components/ImageCarousel';
import mapping from '../../../languages/CN/mapping';

const renderCarousel = (photos, currentPage) => {
  return (
    <ImageCarousel
      album={photos}
      currentPage={currentPage}
    />
  )
};

const ProductInfoGridView: React.ComponentType<ProductInfoGridViewProps> = (props) => {
  const { 
    handleCompareMoreButtonOnPress,
    handleEditIconOnPress, 
    handleFavoriteIconOnPress, 
    handleOnFinishRating,
    handleShareIconOnPress, 
    expanded,
    productInfo,
    compare = false,
  } = props;

  const labels = (productInfo.labels || []).map(label => label.trim()).filter(Boolean);
  const rating = productInfo.rating || 0;
  const favorite = productInfo.saved || false;
  const imageUri = productInfo.photos.length > 0 ? productInfo.photos[0] : "https://cdn.ztore.com/images/ztore/production/product/750px/1032361_1.jpg";

  // const cardClickArea = 
  //   <TouchableOpacity
  //     activeOpacity={0.5}
  //     onPress={()=> alert("pressed")}
  //     // onPress={handleImageAreaOnPress(id)}
  //     style={styles.leftCardClickAreaStyle}
  //   >
  //   </TouchableOpacity>
  const favoriteIcon = 
      <Icon
        color='#00aced'
        name={favorite ? 'favorite' : 'favorite-border'}
        containerStyle={styles.leftCardFavoriteIconContainerStyle}
        size={32}
        onPress={compare ? null : handleFavoriteIconOnPress}
      />
  const chevronIcon = compare &&
          expanded 
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

  const currentPage = productInfo.photos.findIndex(_photo => _photo === imageUri);
  
  const ImageComponent = () => {
    return (
      <Lightbox 
        renderContent={() => renderCarousel(productInfo.photos, currentPage)}
        springConfig={{ tension: 10, friction: 10 }} 
        swipeToDismiss={false}
      >
        <RNImage
          // key={id}
          style={{
            width: 130,
            height: 150,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#e1e8ee',
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 1,
          }}
          source={{ uri: imageUri }}
          resizeMode='cover'
        />
      </Lightbox>
    )
  }

  return (
    <View style={[styles.gridContainer, !compare && { maxHeight: 212 }]}>
      <Card
        image={{ uri: imageUri }}
        imageProps={{
          ImageComponent,
        }}
        imageStyle={styles.leftCardImageContainer}
        containerStyle={[styles.leftCardContainer, (compare && !expanded && { height: 150 })]}
      >
        {/* {cardClickArea} */}
        {favoriteIcon}
        {compare 
          ? expanded 
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
      <ScrollView style={styles.rightContainer}>
        {compare 
          ? chevronIcon
          : <OptionMenuComponent 
              containerStyle={styles.rightContainerOptionIconContainerStyle}
              menuItemList={optionItemList}
            />
        }
        {map(pick(productInfo, ["name", "origin", "price"]), (value: string, key) => {
          const isInNumberFormat = key === 'price';
          return (
            <ListItem
              containerStyle={styles.listItemContentContainer}
              key={key}
              title={
                !isInNumberFormat 
                  ? value 
                  : <NumberFormat 
                      decimalScale={0}
                      displayType={'text'} 
                      prefix={'$'}
                      renderText={value => <Text style={{ fontSize: 17, marginLeft: 10 }}>{`${value}`}</Text>}
                      thousandSeparator={true} 
                      value={value}
                    />
              }
              titleStyle={{ marginLeft: 10 }}
            />
          )
        })}
        {compare && !expanded 
          ? null
          : <View style={styles.labelContainer}>
            {labels.map(label => {
              return (
                <Chip key={label} style={styles.chip}>{label}</Chip>
              )
            })}
          </View>
        }
      </ScrollView>
    </View>
  )
};

const ProductInfoView: React.ComponentType<ProductInfoViewProps> = (props) => {
  const { 
    handleExpand, 
    expandedProductList,
    navigation,
    productComparisonInfoList,
    handleInfoIconOnPress,
    ...productInfoGridViewProps
  } = props;
  // console.log("productComparisonInfoList",productComparisonInfoList)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4>{mapping[props.productInfo.category]}</Text>
        <View style={{ paddingHorizontal: 4 }}/>
        <Icon
          containerStyle={{ marginRight: 16 }}
          onPress={handleInfoIconOnPress}
          name='info-outline'
          size={45}
          underlayColor={"grey"}
        />
      </View>
      <Provider>
        <ProductInfoGridView {...productInfoGridViewProps} />
      </Provider>
      <ListItem bottomDivider />
      <SafeAreaView style={{ height: 475 }}>
        <ScrollView>
            {productComparisonInfoList.map((product, index) => {
              const expaneded = expandedProductList.includes(product.id);
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  onPress={handleExpand(product.id)}
                >
                  <ProductInfoGridView 
                    {...productInfoGridViewProps} 
                    productInfo={product}
                    compare={true} 
                    expanded={!expaneded}
                  />
                </TouchableOpacity>
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
export default React.memo(ProductInfoView);