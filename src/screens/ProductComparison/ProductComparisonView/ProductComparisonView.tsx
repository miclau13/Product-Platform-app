import { map, pick } from 'lodash';
import React from 'react';
import { Image as RNImage, TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';
import { Chip } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductComparisonViewProps, ProductComparisonGridViewProps } from '../ProductComparison';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
import ImageCarousel from '../../../components/ImageCarousel';

const renderCarousel = (photos, currentPage) => {
  return (
    <ImageCarousel
      album={photos}
      currentPage={currentPage}
    />
  )
};

const ProductComparisonGridView: React.ComponentType<ProductComparisonGridViewProps> = (props) => {
  const { 
    productInfo,
  } = props;

  const labels = (productInfo.labels || []).map(label => label.trim()).filter(Boolean);
  const imageUri = productInfo.photos.length > 0 ? productInfo.photos[0] : "https://cdn.ztore.com/images/ztore/production/product/750px/1032361_1.jpg";
  const currentPage = productInfo.photos.findIndex(_photo => _photo === imageUri);

  return (
    <View style={styles.gridContainer}>
      {/* <Image
        source={{ uri: imageUri }}
        style={{ width: 100, height: 100 }}
      /> */}
      <Lightbox 
        renderContent={() => renderCarousel(productInfo.photos, currentPage)}
        springConfig={{ tension: 10, friction: 10 }} 
        swipeToDismiss={false}
      >
        <RNImage
          // key={id}
          style={{
            width: 100,
            height: 100,
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
        <View style={styles.rightContainer}>
          <View style={styles.contentContainer}>
            {map(pick(productInfo, ["name", "origin", "price"]), (value: string, key) => {
                const isInNumberFormat = key === 'price';
                return (
                  <View key={key}>
                    {!isInNumberFormat 
                      ? <Text>{value}</Text> 
                      : <NumberFormat 
                        decimalScale={0}
                        displayType={'text'} 
                        prefix={'$'}
                        renderText={value => <Text>{`${value}`}</Text>}
                        thousandSeparator={true} 
                        value={value}
                      />
                    }
                    <View style={{ marginBottom: 8 }} />
                  </View>
                )
            })}
          </View>
          <ScrollView>
            <View style={styles.labelContainer}>
              {(labels || []).map(label => {
                return (
                  <Chip key={label} style={styles.chip}>{label}</Chip>
                )
              })}
            </View>
          </ScrollView>
      </View>
    </View>
  )
};

const ProductComparisonView: React.ComponentType<ProductComparisonViewProps> = (props) => {
  const { 
    handlePlusIconOnPress,
    navigation,
    productInfo,
    productComparisonInfoList,
  } = props;
  
  return (
    <View style={styles.container}>
      <ProductComparisonGridView productInfo={productInfo} />
      <View style={{ marginVertical: 8 }} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handlePlusIconOnPress}
      >
        <View style={styles.plusIconContainer}>
          <Icon name="add" color='#00aced' onPress={handlePlusIconOnPress} />
        </View>
      </TouchableOpacity>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {productComparisonInfoList.map(product => {
              return (
                <ProductComparisonGridView 
                  productInfo={product}
                  key={product.id}
                />
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
export default React.memo(ProductComparisonView);