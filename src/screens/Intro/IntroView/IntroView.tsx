import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';
import { IntroViewProps } from '../Intro';

const DoneButton = () => {
  return (
    <Text style={styles.buttonText}>Done</Text>
  )
}

const IntroView: React.ComponentType<IntroViewProps> = (props) => {
  const { 
    slideIndex,
    _onIndexChanged,
  } = props;
  
  return (
    <Swiper 
      showsButtons={true}
      style={styles.wrapper}
    >
      <View style={styles.slide1}>
        <Text style={styles.text}>Intro Page 1</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Intro Page 2</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Intro Page 3</Text>
      </View>
    </Swiper>
  );
}
export default React.memo(IntroView);