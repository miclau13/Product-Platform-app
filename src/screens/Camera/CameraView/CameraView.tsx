import { Camera as ExpoCamera } from 'expo-camera';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { BottomBarProps, CameraViewProps } from '../Camera';

const BottomBar: React.ComponentType<BottomBarProps> = (props) => {
  const { handleReverseCameraIconOnPress } = props;

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={handleReverseCameraIconOnPress} style={styles.galleryIcon}>
        <Ionicons name="ios-reverse-camera" size={50} color="white" />
      </TouchableOpacity> 
    </View>
  )
}

const CameraView: React.ComponentType<CameraViewProps> = (props) => {
  const { 
    onMountError, 
    setCamera,
    type,

    handleReverseCameraIconOnPress, 
  } = props; 
  
  return (
    <View style={{ flex: 1 }}>   
      <ExpoCamera
        onMountError={onMountError}
        ref={ref => setCamera(ref)}
        style={styles.camera}
        type={type}
      >
        <BottomBar
          handleReverseCameraIconOnPress={handleReverseCameraIconOnPress}
        />
      </ExpoCamera> 
    </View>
  );
}
export default React.memo(CameraView);