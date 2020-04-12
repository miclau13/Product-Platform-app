import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import React from 'react';
import { ActionSheetIOS, Platform } from 'react-native';
import { AirbnbRatingProps, ButtonProps, TileProps } from 'react-native-elements'; 
import { PickerProps } from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';

import AddProductView from './AddProductView';
import { titleMap } from './utils';
import { useSelectCategoryContext } from '../../context/SelectCategoryContext';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type AddProductScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'AddProduct'
>;

type Props = {
  navigation: AddProductScreenNavigationProp;
};

export type AddProductTileViewProps = TileProps;
export interface AddProductViewProps {
  handleOnFinishRating: AirbnbRatingProps['onFinishRating'];
  imageTileList: Array<imageTile>;
  onImagePress(index: number): TileProps['onPress'];
  onSubmitButtonPress: ButtonProps['onPress'];
  rating: number;
  // For Dropdown
  handleDropdownOnValueDown: PickerProps['onValueChange'];
  handleIOSDropdownOnDonePress: PickerProps['onDonePress'];
  selectedCategory: string;
};

export type imageTile = {
  index: number;
  imageSrc: TileProps['imageSrc'];
  title: string;
};

const AddProduct: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [loading] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [imageTileList, setImageTileList] = React.useState(Array.from(Array(5)).map((item, index) => {
    return {
      index,
      imageSrc: null,
      title: titleMap[index],
    }
  }));

  const handleOnFinishRating = React.useCallback<AddProductViewProps['handleOnFinishRating']>((rating) => {
    setRating(rating);
  }, [rating]);

  // For Dropdown
  const { selectedCategory: defaultSelectedCategory } = useSelectCategoryContext();
  const [selectedCategory, setSelectedCategory] = React.useState(defaultSelectedCategory);
  const handleDropdownOnValueDown = React.useCallback<AddProductViewProps['handleDropdownOnValueDown']>((value) => {
    if (Platform.OS === "ios") {
      setSelectedCategory(value);
      return;
    };
  }, []);
  // IOS
  const handleIOSDropdownOnDonePress = React.useCallback<AddProductViewProps['handleIOSDropdownOnDonePress']>(() => {
  }, [selectedCategory]);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        return false;
      };
      return true
    }
  };

  const launchCamera = async (index: number) => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (result.cancelled) return;
    const updatedImageTileList = imageTileList.map((imageTile, _index) => {
      if (index == _index) {
        return {
          ...imageTile,
          imageSrc: { uri: result.uri }
        }
      }
      return imageTile;
    })
    setImageTileList(updatedImageTileList);
  };

  const pickImage = async (index: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (result.cancelled) return;
    const updatedImageTileList = imageTileList.map((imageTile, _index) => {
      if (index == _index) {
        return {
          ...imageTile,
          imageSrc: { uri: result.uri }
        }
      }
      return imageTile;
    })
    setImageTileList(updatedImageTileList);
  };

  const onImagePress = (index: number) => async () => {
    if (imageTileList[index]['imageSrc']) {
      const updatedImageTileList = imageTileList.map((imageTile, _index) => {
        if (index == _index) {
          return {
            ...imageTile,
            imageSrc: null
          }
        }
        return imageTile;
      });
      setImageTileList(updatedImageTileList);
      return;
    }
    if (!await getPermissionAsync()) return;
    const options = [
      'Open camera',
      'Select from the gallery',
      'Cancel'
    ];
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: 2
      },
      async (buttonIndex: number) => {
        if (buttonIndex === 0) {
          await launchCamera(index);
        } else if (buttonIndex === 1) {
          await pickImage(index);
        }
      }
    );
  };

  const onSubmitButtonPress = React.useCallback<AddProductViewProps['onSubmitButtonPress']>(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Records' }],
    });
  }, [navigation])

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <AddProductView 
      handleOnFinishRating={handleOnFinishRating}
      imageTileList={imageTileList}
      onImagePress={onImagePress}
      onSubmitButtonPress={onSubmitButtonPress}
      rating={rating}
      // For Dropdown
      handleDropdownOnValueDown={handleDropdownOnValueDown}
      handleIOSDropdownOnDonePress={handleIOSDropdownOnDonePress}
      selectedCategory={selectedCategory}
    />
  )
};

export default React.memo(AddProduct);