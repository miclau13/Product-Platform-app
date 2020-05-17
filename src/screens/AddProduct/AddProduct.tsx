import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import React from 'react';
import { ActionSheetIOS, Platform } from 'react-native';
import { AirbnbRatingProps, ButtonProps, IconProps, InputProps, TileProps } from 'react-native-elements'; 
import { PickerProps } from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import AddProductView from './AddProductView';
import { titleMap } from './utils';
import { Product, useProductListContext } from '../../context/ProductListContext';
import { useSelectCategoryContext } from '../../context/SelectCategoryContext';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type AddProductScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'AddProduct'
>;

type  AddProductScreenRouteProp = RouteProp<BarCodeScannerStackParamList, "AddProduct">;

type Props = {
  navigation: AddProductScreenNavigationProp;
  route: AddProductScreenRouteProp;
};

type InputValues = {
  name: string;
  brandName: string;
  price: number;
  origin: string;
  remarks: string;
};

export type AddProductTileViewProps = TileProps;
export interface AddProductViewProps {
  handleKeywordTagAddIconOnPress: IconProps['onPress'];
  handleKeywordTagInputOnChangeText: InputProps['onChangeText'];
  handleKeywordTagLabelOnClose(name: string): () => void;
  handleInputOnChange(field: keyof InputValues): InputProps['onChangeText']
  keywordTagLabels: string[];
  keywordTagInput: string;
  handleOnFinishRating: AirbnbRatingProps['onFinishRating'];
  imageTileList: Array<imageTile>;
  inputValues: {
    name: string;
    brandName: string;
    price: number;
    origin: string;
    remarks: string;
  };
  navigation: AddProductScreenNavigationProp;
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
  const { navigation, route } = props;
  const { productId } = route.params;
  const [loading, setLoading] = React.useState(false);
  const [imageTileList, setImageTileList] = React.useState(Array.from(Array(5)).map((item, index) => {
    return {
      index,
      imageSrc: null,
      title: titleMap[index],
    }
  }));
  const { selectedCategory: defaultSelectedCategory } = useSelectCategoryContext();
  const { productList: productDataList } = useProductListContext();
  const productInfo = React.useMemo<Product>(() => {
    const product = { ...productDataList.filter(product => product.id === productId)[0] };
    return product;
  }, [productDataList]);
  console.log("productInfo",productInfo)
  console.log("productId",productId)
  // Form values
  const [selectedCategory, setSelectedCategory] = React.useState(defaultSelectedCategory);
  const [inputValues, setInputValues] = React.useState({
    name: productInfo.name || "",
    brandName: productInfo.brandName || "",
    price: productInfo.price || 0,
    origin: productInfo.origin || "",
    remarks: productInfo.remarks ||  "",
  });
  console.log("inputValues",inputValues)
  const [keywordTagInput, setKeywordTagInput] = React.useState("");
  const [keywordTagLabels, setKeywordTagLabels] = React.useState(productInfo.labels || []);
  const [rating, setRating] = React.useState(productInfo.rating || 0);

  const handleInputOnChange = React.useCallback<AddProductViewProps['handleInputOnChange']>(field => value => {
    setInputValues(values => {
      return ({ ...values, [field]: value });
    })
  }, []);
  
  const handleKeywordTagAddIconOnPress = React.useCallback<AddProductViewProps['handleKeywordTagAddIconOnPress']>(() => {
    if (keywordTagLabels.map(label => label.toUpperCase()).includes(keywordTagInput.toUpperCase())) {
      return;
    }
    setKeywordTagLabels(value => ([...value, keywordTagInput]));
    setKeywordTagInput("");
  }, [keywordTagInput, keywordTagLabels, setKeywordTagLabels, setKeywordTagInput]);

  const handleKeywordTagInputOnChangeText = React.useCallback<AddProductViewProps['handleKeywordTagInputOnChangeText']>((value) => {
    setKeywordTagInput(value);
  }, [setKeywordTagInput]);

  const handleKeywordTagLabelOnClose = React.useCallback<AddProductViewProps['handleKeywordTagLabelOnClose']>((name) => () => {
    setKeywordTagLabels(value => (value.filter(v => v !== name)));
  }, [setKeywordTagLabels]);
  
  const handleOnFinishRating = React.useCallback<AddProductViewProps['handleOnFinishRating']>((rating) => {
    setRating(rating);
  }, [rating]);

  // For Dropdown

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

  const onSubmitButtonPress = React.useCallback<AddProductViewProps['onSubmitButtonPress']>(async () => {
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Records' }],
    // });
    try {
      setLoading(true);
      const uri = `https://miclo1.azurewebsites.net/products/add`;
      const response = await fetch(uri, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...inputValues,
          category: selectedCategory,
          labels: keywordTagLabels,
          rating,
        }),
      });
      const result = await response.json() || [];
      // console.log("result", result)
    } catch (error) {
      console.log(" handleSubmitButtonOnPress error:", error);
    } finally {
      setLoading(false);
    }
  }, [inputValues, keywordTagLabels, rating, selectedCategory]);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <AddProductView 
      handleKeywordTagAddIconOnPress={handleKeywordTagAddIconOnPress}
      handleKeywordTagInputOnChangeText={handleKeywordTagInputOnChangeText}
      handleKeywordTagLabelOnClose={handleKeywordTagLabelOnClose}
      handleInputOnChange={handleInputOnChange}
      keywordTagLabels={keywordTagLabels}
      keywordTagInput={keywordTagInput}
      handleOnFinishRating={handleOnFinishRating}
      imageTileList={imageTileList}
      inputValues={inputValues}
      navigation={navigation}
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