import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { AirbnbRating, Button, Input, Tile } from 'react-native-elements';

import styles from './styles';
import { AddProductViewProps, AddProductTileViewProps } from '../AddProduct';
import DropdownComponent from '../../../components/DropdownComponent';

const AddProductTileView: React.ComponentType<AddProductTileViewProps> = (props) => {
  const { title, ...tileProps } = props;
  
  return (
    <Tile 
      containerStyle={styles.tileContainerStyle}
      contentContainerStyle={styles.tileContentContainerStyle}
      height={150}
      icon={!props.imageSrc ? { name: 'photo-camera' } : { name: 'delete', color: 'red', type: 'material-community' }} 
      {...tileProps} 
    >
      {/* <View>
        <Text>{title}</Text>
      </View> */}
    </Tile>
  )
};

const AddProductView: React.ComponentType<AddProductViewProps> = (props) => {
  const { 
    handleOnFinishRating,
    imageTileList, 
    onImagePress, 
    onSubmitButtonPress,
    rating,

    // For Dropdown
    handleDropdownOnValueDown,
    handleIOSDropdownOnDonePress,
    selectedCategory,
  } = props;

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ margin: 8 }}></View>
      <Input
        inputComponent={() =>
          <View style={styles.dropDownContainer}>
            <DropdownComponent
              items={[
                { label: 'Mask', value: 'mask' },
                { label: 'Sanitizer', value: 'sanitizer' },
              ]}
              onDonePress={handleIOSDropdownOnDonePress}
              onValueChange={handleDropdownOnValueDown}
              value={selectedCategory}
            />
          </View>
        }
        label="Product Type"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        label="Product Name"
        labelStyle={styles.label}
        placeholder='Koala'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        inputComponent={() =>
          <View style={styles.dropDownContainer}>
            <DropdownComponent
              items={[
                { label: 'Mask', value: 'mask' },
                { label: 'Sanitizer', value: 'sanitizer' },
              ]}
              onDonePress={handleIOSDropdownOnDonePress}
              onValueChange={handleDropdownOnValueDown}
              value={selectedCategory}
            />
          </View>
        }
        label="Reference Price"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        inputComponent={() =>
          <View style={styles.dropDownContainer}>
            <DropdownComponent
              items={[
                { label: 'Mask', value: 'mask' },
                { label: 'Sanitizer', value: 'sanitizer' },
              ]}
              onDonePress={handleIOSDropdownOnDonePress}
              onValueChange={handleDropdownOnValueDown}
              value={selectedCategory}
            />
          </View>
        }
        label="Origin"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        inputComponent={() =>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
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
        }
        label="Product Images"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        multiline
        inputContainerStyle={styles.textAreaContainer}
        inputStyle={styles.textArea}
        label="Keyword Tag"
        labelStyle={styles.label}
        numberOfLines={3}
        placeholder='Add Keyword Tag Here...'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        multiline
        inputContainerStyle={styles.textAreaContainer}
        inputStyle={styles.textArea}
        label="Remarks"
        labelStyle={styles.label}
        numberOfLines={3}
        placeholder='Add Remarks (Optional)'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        inputComponent={() =>
          <View style={styles.dropDownContainer}>
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={rating}
              onFinishRating={handleOnFinishRating}
            />
          </View>
        }
        label="Rating"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Button
        containerStyle={{ margin: 8 }}
        onPress={onSubmitButtonPress}
        title='Submit' 
      >
      </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(AddProductView);