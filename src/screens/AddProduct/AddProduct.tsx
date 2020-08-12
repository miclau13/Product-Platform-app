import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { ActionSheetIOS, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import LoadingComponent from '@components/LoadingComponent';
import { Product, useProductListContext } from '@context/ProductListContext';
import { useSelectCategoryContext } from '@context/SelectCategoryContext';
import { BarCodeScannerStackParamList } from '@navigator/NavigationStack/BarCodeScannerStack';
import { titleMap } from './utils';
import AddProductView, { AddProductViewProps } from './AddProductView';

export type AddProductScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'AddProduct'
>;

type AddProductScreenRouteProp = RouteProp<BarCodeScannerStackParamList, "AddProduct">;

type Props = {
  navigation: AddProductScreenNavigationProp;
  route: AddProductScreenRouteProp;
};

interface AddProduct {
  launchCamera(index: number): void;
  loading: boolean;
  pickImage(index: number): void;
}

const AddProduct: React.ComponentType<Props> = (props) => {
  const { navigation, route } = props;
  const productId = route?.params?.productId;
  const [loading, setLoading] = React.useState<AddProduct['loading']>(false);
  const [errors, setErrors] = React.useState<AddProductViewProps['errors']>(['brandName', 'name', 'origin']);
  const [shouldOpenErrorModal, setShouldOpenErrorModal] = React.useState<AddProductViewProps['shouldOpenErrorModal']>(false);
  const [imageTileList, setImageTileList] = React.useState<AddProductViewProps['imageTileList']>(Array.from(Array(5)).map((item, index) => {
    return {
      index,
      imageSrc: null,
      title: titleMap[index],
    }
  }));
  const { selectedCategory: defaultSelectedCategory } = useSelectCategoryContext();
  const { productList: productDataList, refetch: productListRefetch } = useProductListContext();
  const productInfo = React.useMemo<Product>(() => {
    const product = { ...productDataList.filter(product => product.id === productId)[0] };
    return product;
  }, [productDataList]);
  // Form values
  const [selectedCategory, setSelectedCategory] = React.useState<AddProductViewProps['selectedCategory']>(defaultSelectedCategory);
  const [inputValues, setInputValues] = React.useState<AddProductViewProps['inputValues']>({
    name: productInfo.name || "",
    brandName: productInfo.brandName || "",
    price: productInfo.price || 0,
    origin: productInfo.origin || "",
    remarks: productInfo.remarks ||  "",
  });
  const [keywordTagInput, setKeywordTagInput] = React.useState<AddProductViewProps['keywordTagInput']>("");
  const [keywordTagLabels, setKeywordTagLabels] = React.useState<AddProductViewProps['keywordTagLabels']>(productInfo.labels || []);
  const [rating, setRating] = React.useState<AddProductViewProps['rating']>(productInfo.rating || 0);

  const handleInputOnChange = React.useCallback<AddProductViewProps['handleInputOnChange']>(field => value => {
    setInputValues(values => {
      return ({ ...values, [field]: value });
    });
  }, []);
  
  const handleKeywordTagAddIconOnPress = React.useCallback<AddProductViewProps['handleKeywordTagAddIconOnPress']>(() => {
    if (!keywordTagInput || keywordTagLabels.map(label => label.toUpperCase()).includes(keywordTagInput.toUpperCase())) {
      setKeywordTagInput("");
      return;
    }
    setKeywordTagLabels(value => ([...value, keywordTagInput]));
    setKeywordTagInput("");
  }, [keywordTagInput, keywordTagLabels]);

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

  const launchCamera = React.useCallback<AddProduct['launchCamera']>(async (index) => {
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
  }, [ImagePicker, imageTileList]);

  const pickImage = React.useCallback<AddProduct['pickImage']>(async (index) => {
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
  }, [ImagePicker, imageTileList]);

  const onImagePress = React.useCallback<AddProductViewProps['onImagePress']>((index) => async () => {
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
  }, [imageTileList, getPermissionAsync, launchCamera, pickImage]);

  const onSubmitButtonPress = React.useCallback<AddProductViewProps['onSubmitButtonPress']>(async () => {
    function checkIfErrors() {
      const errorCheckingList = ['brandName', 'name', 'price', 'origin'];
      let error = false;
      errorCheckingList.forEach(field => {
        if(!inputValues[field] && inputValues[field] !== 0) {
          setErrors(errors => {
            if (!errors.includes(field)) {
              return [...errors, field];
            }
            return errors
          });
          error = true;
        } else {
          setErrors(errors => errors.filter(error => error !== field));
        }
      });
      return error;
    }
    if (checkIfErrors()) {
      setShouldOpenErrorModal(true);
      return;
    }
    try {
      setLoading(true);
      const deviceId = await SecureStore.getItemAsync("deviceId");
      console.log("boyd", JSON.stringify({
        ...inputValues,
        rating,
        category: selectedCategory,
        labels: keywordTagLabels,
        deviceId: deviceId,
      }))
      // const uri = productId ? `http://192.168.0.106:5000/products/${productId}` :`http://192.168.0.106:5000/products/`;
      // const uri = productId ? `https://miclo1.azurewebsites.net/products/${productId}` :`https://miclo1.azurewebsites.net/products`;
      const uri = `https://miclo1.azurewebsites.net/products`;
      const response = await fetch(uri, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...inputValues,
          rating,
          category: selectedCategory,
          labels: keywordTagLabels,
          deviceId: deviceId,
          isValid: 0,
        }),
      });
      await productListRefetch();
      const result = await response.json() || [];
      // console.log("result",result)
      navigation.navigate("ProductInfo", { productId: result._id });
    } catch (error) {
      console.log(" handleSubmitButtonOnPress error:", error);
    } finally {
      setLoading(false);
    }
  }, [inputValues, keywordTagLabels, productId, rating, selectedCategory, setErrors]);

  const onBackdropPress = React.useCallback<AddProductViewProps['onBackdropPress']>(() => {
    setShouldOpenErrorModal(shouldOpen => !shouldOpen)
  }, []);

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
      errors={errors}
      shouldOpenErrorModal={shouldOpenErrorModal}
      onBackdropPress={onBackdropPress}
      // For Dropdown
      handleDropdownOnValueDown={handleDropdownOnValueDown}
      handleIOSDropdownOnDonePress={handleIOSDropdownOnDonePress}
      selectedCategory={selectedCategory}
    />
  )
};

export default React.memo(AddProduct);