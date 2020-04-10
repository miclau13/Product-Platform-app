import { map } from 'lodash';
import React from 'react';
import { ActivityIndicator, ImageRequireSource, Text, View } from 'react-native';
import { Button, Icon, Image, ListItem } from 'react-native-elements';
import { Chip } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductInfoViewProps, ProductInfoGridViewProps } from '../ProductInfo';

const Mask1Image: ImageRequireSource = require('../assets/mask1.jpeg');

const ProductInfoGridView: React.ComponentType<ProductInfoGridViewProps> = (props) => {
  const { 
    favorite, 
    handleFavoriteIconOnPress, 
    productInfoList,
    shareIconOnPress, 
    showButtons = true,
  } = props;

  return (
    <View style={styles.gridContainer}>
      <View style={styles.leftContainer}>
        <Image
          containerStyle={styles.leftImageContainer}
          resizeMode='cover'
          source={Mask1Image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{ marginVertical: 8 }} />
        <View style={styles.iconBarContainer}>
          <Icon
            color='#00aced'
            name='share'
            onPress={shareIconOnPress}
            size={40}
          />
          <Icon
            color='#00aced'
            name={favorite ? 'favorite' : 'favorite-border'}
            onPress={handleFavoriteIconOnPress}
            size={40}
            underlayColor="transparent"
          />
          <Icon
            color='#00aced'
            name={'info-outline'}
            size={40}
          />
        </View>
        <View style={{ marginVertical: 8 }} />
        {
          !showButtons ? null : 
          <>
            <Button
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
              title="Change Default"
              type="outline"
            />
            <View style={{ marginVertical: 4 }} />
            <Button
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
              title="Compare More"
              type="outline"
            />
          </>
        }

      </View>
      <View style={styles.rightContainer}>
        {
          map(productInfoList, (item, key) => {
            const isInNumberFormat = item.key === 'price';
            return (
              <ListItem
                containerStyle={{ backgroundColor: 'transparent', padding: 10 }}
                key={key}
                title={!isInNumberFormat ? item.title :         
                  <NumberFormat 
                    decimalScale={0}
                    displayType={'text'} 
                    prefix={'$'}
                    renderText={value => <Text style={{ fontSize: 17 }}>{`${item.title}${value}`}</Text>}
                    thousandSeparator={true} 
                    value={item.value}
                  />
                }
              />
            )
          })
        }
        <View style={styles.labelContainer}>
          <Chip style={styles.chip}>Label 1</Chip>
          <Chip style={styles.chip}>Label 2</Chip>
          <Chip style={styles.chip}>Label 3</Chip>
          <Chip style={styles.chip}>Label 1</Chip>
          <Chip style={styles.chip}>Label 2</Chip>
          <Chip style={styles.chip}>Label 3</Chip>
        </View>
      </View>
    </View>
  )
};

const ProductInfoView: React.ComponentType<ProductInfoViewProps> = (props) => {
  const { 
    handleExpand, 
    isExpanded,
    ...productInfoGridViewProps
  } = props;
  
  return (
    <View style={styles.container}>
      <ProductInfoGridView {...productInfoGridViewProps} />
      <View style={{ marginVertical: 8 }} />
      <ListItem
        bottomDivider
        chevron={isExpanded ? <Icon name="keyboard-arrow-up" /> : <Icon name="keyboard-arrow-down" />}
        onPress={handleExpand}
        title="Default"
      />
      {
        isExpanded ? <ProductInfoGridView {...productInfoGridViewProps} showButtons={false} /> : null
      }
    </View>
  );
}
export default React.memo(ProductInfoView);