import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Input, Tile } from 'react-native-elements';

import styles from './styles';
import { AddProductViewProps, AddProductTileViewProps } from '../AddProduct';
import DropdownComponent from '../../../components/DropdownComponent';

const AddProductTileView: React.ComponentType<AddProductTileViewProps> = (props) => {
  const { imageSrc } = props;
  return (
    <Tile 
      containerStyle={styles.tileContainerStyle}
      contentContainerStyle={styles.tileContentContainerStyle}
      height={150}
      icon={!imageSrc ? { name: 'photo-camera' } : { name: 'delete', color: 'red', type: 'material-community' }} 
      {...props} 
    />
  )
};

const AddProductView: React.ComponentType<AddProductViewProps> = (props) => {
  const { 
    imageTileList, 
    onImagePress, 
    onSubmitButtonPress,

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
          <DropdownComponent
            items={[
              { label: 'Mask', value: 'mask' },
              { label: 'Sanitizer', value: 'sanitizer' },
            ]}
            onDonePress={handleIOSDropdownOnDonePress}
            onValueChange={handleDropdownOnValueDown}
            value={selectedCategory}
          />
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
          <DropdownComponent
            items={[
              { label: 'Mask', value: 'mask' },
              { label: 'Sanitizer', value: 'sanitizer' },
            ]}
            onDonePress={handleIOSDropdownOnDonePress}
            onValueChange={handleDropdownOnValueDown}
            value={selectedCategory}
          />
        }
        label="Reference Price"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        inputComponent={() =>
          <DropdownComponent
            items={[
              { label: 'Mask', value: 'mask' },
              { label: 'Sanitizer', value: 'sanitizer' },
            ]}
            onDonePress={handleIOSDropdownOnDonePress}
            onValueChange={handleDropdownOnValueDown}
            value={selectedCategory}
          />
        }
        label="Origin"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        inputComponent={() =>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {imageTileList.map(imageTile => {
              const { index, imageSrc } = imageTile;
              return (
                <AddProductTileView 
                  key={index}
                  imageSrc={imageSrc}
                  onPress={onImagePress(index)}
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