import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { AirbnbRating, Icon, ListItem, Rating, Text, Tile } from 'react-native-elements';

import styles from './styles';
import { ProductInfoViewProps } from '../ProductInfo';

const ProductInfoView: React.ComponentType<ProductInfoViewProps> = (props) => {
  const { addIconOnPress, favorite, favoriteIconOnPress, productInfo, shareIconOnPress, similarProductList } = props;
  const {
    activeOpacity,
    caption,
    imageSrc,
    imageProps,
    title,
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
          <View style={{ flexDirection: "row", justifyContent: 'center' }}>
            <Icon
              reverse
              color='#00aced'
              name={favorite ? 'favorite' : 'favorite-border'}
              onPress={favoriteIconOnPress}
            />
            <Icon
              reverse
              name='share'
              color='#00aced'
              onPress={shareIconOnPress}
            />
            <Icon
              reverse
              color='#00aced'
              name='add'
              onPress={addIconOnPress}
            />
          </View>
        </Tile>
        <Text h4 style={styles.similarProductTitle}>Similar Products</Text>
        <View>
          {similarProductList.map((item, i) => (
              <ListItem
                key={i}
                leftAvatar={item.leftAvatar}
                title={item.title}
                subtitle={item.subtitle}
                bottomDivider
              />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(ProductInfoView);