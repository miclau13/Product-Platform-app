import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Card, Icon, Text } from 'react-native-elements';
import { Chip } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import styles from './styles';
import { ProductSearchMultiSelectViewProps, ProductSearchMultiSelectComponentViewProps, ProductSearchMultiSelectItemCardProps } from '../ProductSearchMultiSelect';
import DropdownComponent from '../../../components/DropdownComponent';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
import SearchBarComponent from '../../../components/SearchComponent';
import { buttonPrimaryColor } from '../../../styles';
import mapping from '../../../languages/CN/mapping';

const ProductSearchMultiSelectItemCard: React.ComponentType<ProductSearchMultiSelectItemCardProps> = (props) => {
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
    ...cardProps 
  } = props;

  const buttonIcon = selected 
    ? <Icon color={buttonPrimaryColor} name='check' type='material-community' />
    : null
  const buttonTitle = selected ? '' : mapping['Select'];
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
    >
      {cardClickArea}
      <View>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.title}>
          {origin}
        </Text>
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

const ProductSearchMultiSelectComponent: React.ComponentType<ProductSearchMultiSelectComponentViewProps> = (props) => {
  const { 
    chipList,
    handleAddButtonOnPress,
    handleChipOnPress,
    handleClearSearch,
    handleFavoriteIconOnPress,
    handleImageAreaOnPress,
    handleSelectButtonOnPress,
    productList, 
  } = props;
  return (
    <View style={styles.container}>
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
                  <ProductSearchMultiSelectItemCard 
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
  )
};

const ProductSearchMultiSelectView: React.ComponentType<ProductSearchMultiSelectViewProps> = (props) => {
  const { 
    chipList,
    handleAddButtonOnPress,
    handleChipOnPress,
    handleFavoriteIconOnPress,
    handleImageAreaOnPress,
    handleSelectButtonOnPress,
    productList, 
    navigation,

    // For Search
    handleClearSearch,
    search,
    updateSearch,
    // For Dropdown
    handleDropdownOnValueDown,
    handleIOSDropdownOnDonePress,
    selectedCategory,
  } = props;
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.topBarContainer}>
        <View style={styles.dropDownContainer}>
          <DropdownComponent
            items={[
              { label: mapping['Mask'], value: 'mask' },
              { label: mapping['Sanitizer'], value: 'sanitizer' },
            ]}
            onDonePress={handleIOSDropdownOnDonePress}
            onValueChange={handleDropdownOnValueDown}
            value={selectedCategory}
          />
        </View>
        <SearchBarComponent 
          onChangeText={updateSearch}
          // onFocus={onFocus}
          value={search}
        />
        </View>
      </SafeAreaView>
      <ProductSearchMultiSelectComponent 
          chipList={chipList}
          handleAddButtonOnPress={handleAddButtonOnPress}
          handleChipOnPress={handleChipOnPress}
          handleClearSearch={handleClearSearch}
          handleFavoriteIconOnPress={handleFavoriteIconOnPress}
          handleImageAreaOnPress={handleImageAreaOnPress}
          handleSelectButtonOnPress={handleSelectButtonOnPress}
          productList={productList} 
        />
      {/* <FloatingMenuComponent 
        currenScreen="BarCodeScanner"
        navigation={navigation}
      />  */}
    </View>
  );
}
export default React.memo(ProductSearchMultiSelectView);