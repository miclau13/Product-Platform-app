import React from 'react';
import { Image as RNImage, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { AirbnbRating, AirbnbRatingProps, Button, Card, Icon, IconProps, Image, ListItem, Rating, Text } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';
import { Chip, Provider } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { Product, ProductInfoViewProps, ProductInfoGridViewProps } from '../ProductInfo';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
import OptionMenuComponent from '../../../components/OptionMenuComponent';
import ImageCarousel from '../../../components/ImageCarousel';
import mapping from '../../../languages/CN/mapping';

import { pageBackgroundColor, primaryIconColor, primaryBorderColor, screenHeight } from '../../../styles';

const renderCarousel = (photos, currentPage) => {
  return (
    <ImageCarousel
      album={photos}
      currentPage={currentPage}
    />
  )
};

export interface ProductInfoSubjectGridViewProps {
  favorite: boolean;
  handleCompareMoreButtonOnPress: IconProps['onPress'];
  handleEditIconOnPress: IconProps['onPress'];
  handleFavoriteIconOnPress: IconProps['onPress'];
  handleOnFinishRating: AirbnbRatingProps['onFinishRating'];
  handleShareIconOnPress: IconProps['onPress'];
  productInfo: Product;
  rating: number;
}

const ProductInfoSubjectGridView: React.ComponentType<ProductInfoSubjectGridViewProps> = (props) => {
  const { 
    handleCompareMoreButtonOnPress,
    handleEditIconOnPress, 
    handleFavoriteIconOnPress, 
    handleOnFinishRating,
    handleShareIconOnPress, 
    productInfo,
  } = props;

  const labels = (productInfo.labels || []).map(label => label.trim()).filter(Boolean);
  const rating = productInfo.rating || 0;
  const favorite = productInfo.saved || false;
  const imageUri = productInfo.photos.length > 0 ? productInfo.photos[0] : "https://cdn.ztore.com/images/ztore/production/product/750px/1032361_1.jpg";

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
    <View style={{ 
      backgroundColor: pageBackgroundColor,
      borderRadius: 16,
      flexDirection: 'row', 
      margin: 8,
      marginBottom: 0, 
      minHeight: 250,
      padding: 8,
    }}>
      <View>
        <Image
          source={{ uri: imageUri }}
          ImageComponent={ImageComponent}
        />
        <View style={{ marginVertical: 8 }}/>
        <AirbnbRating
          defaultRating={rating}
          onFinishRating={handleOnFinishRating}
          selectedColor={primaryIconColor}
          showRating={false}
          size={18}
        />
        <Icon
          color={primaryIconColor}
          name={favorite ? 'favorite' : 'favorite-border'}
          containerStyle={{
            position: 'absolute',
            right: 0,
            top: 120,
          }}
          size={32}
          onPress={handleFavoriteIconOnPress}
        />
      </View>
      <Provider>
        <View style={styles.rightContainer}>
          <OptionMenuComponent 
            containerStyle={styles.rightContainerOptionIconContainerStyle}
            menuItemList={optionItemList}
          />
          <ListItem
            containerStyle={styles.listItemContentContainer}
            title={`${productInfo.brandName} ${productInfo.name}`}
            titleStyle={{ marginLeft: 10 }}
          />
          <ListItem
            containerStyle={styles.listItemContentContainer}
            title={
              <NumberFormat 
                decimalScale={0}
                displayType={'text'} 
                prefix={'$'}
                renderText={value => <Text style={{ fontSize: 17, marginLeft: 10 }}>{`${productInfo.origin} ${value}`}</Text>}
                thousandSeparator={true} 
                value={productInfo.price}
              />
            }
            titleStyle={{ marginLeft: 10 }}
          />
          <ScrollView>
            <View style={{
              // alignItems: 'center',
              flexDirection: 'row', 
              flexWrap: 'wrap',
              marginLeft: 10,
            }}>
              {
                labels.map(label => {
                  return (
                    <Chip 
                      key={label} 
                      style={styles.chip}
                    >
                      {label}
                    </Chip>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
      </Provider>
    </View>
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
    index,
  } = props;

  const labels = (productInfo.labels || []).map(label => label.trim()).filter(Boolean);
  const rating = productInfo.rating || 0;
  const favorite = productInfo.saved || false;
  const imageUri = productInfo.photos.length > 0 ? productInfo.photos[0] : "https://cdn.ztore.com/images/ztore/production/product/750px/1032361_1.jpg";
  const currentPage = productInfo.photos.findIndex(_photo => _photo === imageUri);
  
  const ImageComponent = () => {
    return (
      <Lightbox 
        renderContent={() => renderCarousel(productInfo.photos, currentPage)}
        springConfig={{ tension: 10, friction: 10 }} 
        swipeToDismiss={false}
      >
        <RNImage
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
    <View style={{ 
      backgroundColor: index % 2 ? pageBackgroundColor : 'white',
      borderColor: index % 2 ? 'transparent' :  primaryBorderColor,
      borderRadius: 16,
      borderWidth: index % 2 ? 0 : 1,
      flexDirection: 'row', 
      margin: 8,
      marginBottom: 0, 
      padding: 8,
    }}>
      <View>
        <Image
          source={{ uri: imageUri }}
          ImageComponent={ImageComponent}
        />
        <View style={{ marginVertical: 8 }}/>
        {
          expanded 
            ? <AirbnbRating
              isDisabled
                defaultRating={rating}
                onFinishRating={() => {}}
                selectedColor={primaryIconColor}
                showRating={false}
                size={18}
              /> 
            : null
        }
        {
          favorite  && 
            <Icon
              color={primaryIconColor}
              name={'favorite'}
              containerStyle={{
                position: 'absolute',
                right: 0,
                top: 120,
              }}
              size={32}
              // onPress={handleFavoriteIconOnPress}
            />
        }
      </View>
      <View style={styles.rightContainer}>
        {          
          expanded 
            ? <Icon name="keyboard-arrow-up" color='#00aced' containerStyle={styles.rightContainerOptionIconContainerStyle} /> 
            : <Icon name="keyboard-arrow-down" color='#00aced' containerStyle={styles.rightContainerOptionIconContainerStyle} />
        }
        <ListItem
          containerStyle={styles.listItemContentContainer}
          title={`${productInfo.brandName} ${productInfo.name}`}
          titleStyle={{ marginLeft: 10 }}
        />
        <ListItem
          containerStyle={styles.listItemContentContainer}
          title={
            <NumberFormat 
              decimalScale={0}
              displayType={'text'} 
              prefix={'$'}
              renderText={value => <Text style={{ fontSize: 17, marginLeft: 10 }}>{`${productInfo.origin} ${value}`}</Text>}
              thousandSeparator={true} 
              value={productInfo.price}
            />
          }
          titleStyle={{ marginLeft: 10 }}
        />
        <View style={{
          alignItems: 'center',
          flexDirection: 'row', 
          flexWrap: 'wrap',
          marginLeft: 10,
        }}>
          {
            expanded && labels.map(label => {
              return (
                <Chip 
                  key={label} 
                  style={styles.chip}
                >
                  {label}
                </Chip>
              )
            })
          }
        </View>
      </View>
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
      <ProductInfoSubjectGridView {...productInfoGridViewProps} />
      <ScrollView style={{ marginVertical: 16 }}>
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
                  index={index} 
                  expanded={!expaneded}
                />
              </TouchableOpacity>
            )
          })}
      </ScrollView>
      <FloatingMenuComponent 
        currenScreen="BarCodeScanner"
        navigation={navigation}
      /> 
    </View>
  );
}
export default React.memo(ProductInfoView);