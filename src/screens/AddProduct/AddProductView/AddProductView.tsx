import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Input, Text, Tile } from 'react-native-elements';
import { Chip } from 'react-native-paper';

import styles from './styles';
import { AddProductViewProps, AddProductTileViewProps } from '../AddProduct';
import DropdownInputComponent from '../../../components/DropdownInputComponent';
import FloatingMenuComponent from '../../../components/FloatingMenuComponent';
import RatingComponent from '../../../components/RatingComponent';
import mapping from '../../../languages/CN/mapping';

const AddProductTileView: React.ComponentType<AddProductTileViewProps> = (props) => {
  const { title, ...tileProps } = props;
  
  return (
    <Tile 
      containerStyle={styles.tileContainerStyle}
      contentContainerStyle={styles.tileContentContainerStyle}
      height={150}
      icon={!props.imageSrc ? { name: 'photo-camera' } : { name: 'delete', color: 'red', type: 'material-community' }} 
      {...tileProps} 
      title={title}
      titleStyle={{ width: 0, height: 0 }}
    >
      <View style={{ alignItems: 'center' }}>
        <Text>{title}</Text>
      </View>
    </Tile>
  )
};

const AddProductView: React.ComponentType<AddProductViewProps> = (props) => {
  const { 
    handleKeywordTagAddIconOnPress,
    handleKeywordTagInputOnChangeText,
    handleKeywordTagLabelOnClose,
    handleInputOnChange,
    keywordTagLabels,
    keywordTagInput,
    handleOnFinishRating,
    imageTileList, 
    navigation,
    onImagePress, 
    onSubmitButtonPress,
    rating,
    inputValues,

    // For Dropdown
    handleDropdownOnValueDown,
    handleIOSDropdownOnDonePress,
    selectedCategory,
  } = props;

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView>
        <View style={{ margin: 8 }}></View>
        <DropdownInputComponent
          items={[
            { label: mapping['Mask'], value: 'mask' },
            { label: mapping['Sanitizer'], value: 'sanitizer' },
          ]}
          label={mapping["Product Type"]}
          onDonePress={handleIOSDropdownOnDonePress}
          onValueChange={handleDropdownOnValueDown}
          value={selectedCategory}
        />
        <View style={{ margin: 8 }}></View>
        <Input
          inputContainerStyle={styles.textAreaContainer}
          label={mapping["Product Brand"]}
          labelStyle={styles.label}
          onChangeText={handleInputOnChange("brandName")}
          placeholder='e.g. H&M'
          value={inputValues.brandName}
        />
        <View style={{ margin: 8 }}></View>
        <Input
          inputContainerStyle={styles.textAreaContainer}
          label={mapping["Product Name"]}
          labelStyle={styles.label}
          onChangeText={handleInputOnChange("name")}
          placeholder='Koala'
          value={inputValues.name}
        />
        <View style={{ margin: 8 }}></View>
        <Input
          inputContainerStyle={styles.textAreaContainer}
          keyboardType="decimal-pad"
          label={mapping["Reference Price"]}
          labelStyle={styles.label}
          leftIcon={{ type: 'font-awesome', name: 'dollar' }}
          leftIconContainerStyle={{ marginRight: 8 }}
          onChangeText={handleInputOnChange("price")}
          value={inputValues.price.toString()}
        />
        <View style={{ margin: 8 }}></View>
        <Input
          inputContainerStyle={styles.textAreaContainer}
          label={mapping["Origin"]}
          labelStyle={styles.label}
          onChangeText={handleInputOnChange("origin")}
          placeholder='e.g. Japan'
          value={inputValues.origin}
        />
        <View style={{ margin: 8 }}></View>
        <Input
          errorMessage={
            keywordTagLabels.map(label => label.toUpperCase()).includes(keywordTagInput.toUpperCase())
              ? "Same tag already existed" : null
          }
          inputContainerStyle={styles.textAreaContainer}
          label={mapping["Keyword Tag"]}
          labelStyle={styles.label}
          rightIcon={{ name: 'add', onPress: handleKeywordTagAddIconOnPress }}
          rightIconContainerStyle={{ marginRight: 8 }}
          value={keywordTagInput}
          onChangeText={handleKeywordTagInputOnChangeText}
        />
        <View style={styles.labelContainer}>
          {keywordTagLabels.map(chip => {
            return (
              <Chip 
                key={chip}
                onClose={handleKeywordTagLabelOnClose(chip)}
                style={styles.chip}
              >
                {chip}
              </Chip>
            )
          })}
        </View>
        <View style={styles.cameraInputContainerStyle}>
          <Text style={styles.cameraInputLabelStyle}>{mapping["Product Images"]}</Text>
          <View style={{ paddingVertical: 4 }} />
          <View style={styles.imageTileListContainerStyle}>
              {imageTileList.map(imageTile => {
                const { index, imageSrc, title } = imageTile;
                return (
                  <AddProductTileView 
                    key={index}
                    imageSrc={imageSrc}
                    onPress={onImagePress(index)}
                    title={title}
                  /> 
                )
              })}
          </View>
        </View>
        <View style={{ margin: 8 }}></View>
        <Input
          multiline
          inputContainerStyle={styles.textAreaContainer}
          inputStyle={styles.textArea}
          label={mapping["Remarks"]}
          labelStyle={styles.label}
          numberOfLines={3}
          onChangeText={handleInputOnChange("remarks")}
          placeholder={mapping['Add Remarks (Optional)']}
          value={inputValues.remarks}
        />
        <View style={{ margin: 8 }}></View>
          <RatingComponent 
            defaultRating={rating}
            label={mapping["Rating"]}
            onFinishRating={handleOnFinishRating}
            showRating={false}
          />
        <View style={{ margin: 8 }}></View>
        <Button
          buttonStyle={styles.submitButtonStyle}
          containerStyle={styles.submitButtonContainerStyle}
          onPress={onSubmitButtonPress}
          title={mapping['Submit']}
          titleStyle={styles.submitButtonTitleStyle}
        >
        </Button>
        <View style={{ height: 180 }}></View>
      </ScrollView>
      <FloatingMenuComponent 
        currenScreen="BarCodeScanner"
        navigation={navigation}
      /> 
    </SafeAreaView>
  );
}
export default React.memo(AddProductView);