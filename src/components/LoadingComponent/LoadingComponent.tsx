import LottieView from 'lottie-react-native';
import React from 'react';
import { Animated, View } from 'react-native';

import styles from './styles';

// const LoadingComponent = (props) => {
//   return (
//     <View style={styles.container}>
//       <ActivityIndicator />
//       <StatusBar barStyle="default" />
//     </View>
//   )
// };

interface LoadingComponentProps {
  progress?: number | Animated.Value;
};

const LoadingComponent: React.ComponentType<LoadingComponentProps> = (props) => {

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay 
        loop
        source={require('./assets/51-preloader.json')}
        {...props}
      />
    </View>
  )
};

export default LoadingComponent;