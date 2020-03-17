import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { AirbnbRating, Icon, Rating, Tile } from 'react-native-elements';

import styles from './styles';
import { ProductInfoViewProps } from '../ProductInfo';

const ProductInfoView: React.ComponentType<ProductInfoViewProps> = (props) => {
  const { addIconOnPress, favorite, favoriteIconOnPress, productInfo } = props;
  const {
    activeOpacity,
    caption,
    imageSrc,
    imageProps,
    title
  } = productInfo;
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Tile
          activeOpacity={activeOpacity}
          imageSrc={imageSrc}
          imageProps={imageProps}
          title={title}
        >
          <Text>
            {caption}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              reverse
              color='#00aced'
              name={ favorite ? 'favorite' : 'favorite-border'}
              onPress={favoriteIconOnPress}
            />
            <Icon
              reverse
              name='share'
              color='#00aced'
            />
            <Icon
              reverse
              color='#00aced'
              name='add'
              onPress={addIconOnPress}
            />
          </View>
        </Tile>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductInfoView);