import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import styles from './styles';

const LoadingComponent = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
};

export default LoadingComponent;