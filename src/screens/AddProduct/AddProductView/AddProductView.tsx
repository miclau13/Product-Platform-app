import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Input, Tile } from 'react-native-elements';

import styles from './styles';
import { AddProductViewProps, AddProductTileViewProps } from '../AddProduct';

const AddProductTileView: React.ComponentType<AddProductTileViewProps> = (props) => {
  console.log("props",props)
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
  const { imageTileList, onImagePress } = props;
// console.log("imageTileList",imageTileList)
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ margin: 8 }}></View>
      <Input
        keyboardType='number-pad'
        label="Barcode Number"
        labelStyle={styles.label}
        placeholder='99520008302578'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        label="Brand Name"
        labelStyle={styles.label}
        placeholder='Lotte'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        label="Product Name"
        labelStyle={styles.label}
        placeholder='Koala'
      />
      <View style={{ margin: 8 }}></View>
      <Input
        keyboardType='numeric'
        label="Weight(g)/Volume(ml)"
        labelStyle={styles.label}
        placeholder='100.00'
      />
      <View style={{ margin: 8 }}></View>
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
      <Input
        multiline
        inputContainerStyle={styles.textAreaContainer}
        inputStyle={styles.textArea}
        label="Ingredients"
        labelStyle={styles.label}
        numberOfLines={3}
        placeholder='Add Ingredients Here...'
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
        // titleStyle={ marginRight: 8 },
        title='Submit' 
      >
      </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(AddProductView);