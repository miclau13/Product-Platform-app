import { Camera as ExpoCamera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import CameraView from './CameraView';
import LoadingComponent from '../../components/LoadingComponent';
import { CameraStackParamList } from '../../navigator/NavigationStack/CameraStack';

type CameraScreenNavigationProp = StackNavigationProp<
  CameraStackParamList,
  'Camera'
>;

type Props = {
  navigation: CameraScreenNavigationProp;
};

export interface BottomBarProps {
  handleReverseCameraIconOnPress: TouchableOpacityProps['onPress'];
};

export interface CameraViewProps extends BottomBarProps {
  handleReverseCameraIconOnPress: TouchableOpacityProps['onPress'];
  // onCameraReady: ExpoCamera['_onCameraReady'];
  onMountError: (event: { message: string }) => void;
  // pictureSize: string;
  setCamera: React.Dispatch<React.SetStateAction<ExpoCamera>>;
  type: React.ReactText;
};

const Camera: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [camera, setCamera] = React.useState<ExpoCamera>(null);
  const [hasCameraPermission, setHasCameraPermission] = React.useState(false);
  const [type, setType] = React.useState<React.ReactText>(ExpoCamera.Constants.Type.back);

  // For General
  const boostrapAsync = async () => {
    const status = await askPermission();
    if (status === 'granted') {
      setHasCameraPermission(true);
    } else { 
      navigation.goBack();
    };
  };

  const askPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    return status;
  };

  // For Bottom Bar 
  const handleReverseCameraIconOnPress = React.useCallback<BottomBarProps['handleReverseCameraIconOnPress']>(() => {
    if (type === ExpoCamera.Constants.Type.back) {
      setType(ExpoCamera.Constants.Type.front);
    } else {
      setType(ExpoCamera.Constants.Type.back);
    }
  }, [type]);

  // For Camera View
  const onMountError = React.useCallback<CameraViewProps['onMountError']>(e => {
    console.error(e.message);
    return null;
  }, []);

  React.useEffect(() => {
    boostrapAsync();
    return () => {
    }
  }, []);

  if (!hasCameraPermission) {
    return <LoadingComponent />;
  };

  return (
    <CameraView 
      // onCameraReady={onCameraReady}
      onMountError={onMountError}
      // pictureSize={pictureSize}
      setCamera={setCamera}
      type={type}

      handleReverseCameraIconOnPress={handleReverseCameraIconOnPress}
  />
  )
};

export default React.memo(Camera);