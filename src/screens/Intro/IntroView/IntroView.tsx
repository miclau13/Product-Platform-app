import React from 'react';
import { Image, View } from 'react-native';
import AppIntro from 'rn-falcon-app-intro';
import styles from './styles';

const Page1Image = require('../assets/tutor_image1.png');
const Page2Image = require('../assets/tutor_image2.png');
const Page3Image = require('../assets/tutor_image3.png');
const Page4Image = require('../assets/tutor_image4.png');

export interface IntroViewProps {
  _doneBtnHandle(): void;
  _nextBtnHandle(index: number): void;
  _onSlideChangeHandle(index: number, total: number): void;
  _onSkipBtnHandle(index: number): void;
};

const IntroView: React.ComponentType<IntroViewProps> = (props) => {
  const { 
    // pageList,
    _doneBtnHandle,
    _nextBtnHandle,
    _onSkipBtnHandle,
    _onSlideChangeHandle,
  } = props;
  
  return (
    <AppIntro
      onDoneBtnClick={_doneBtnHandle}
      onNextBtnClick={_nextBtnHandle}
      onSkipBtnClick={_onSkipBtnHandle}
      onSlideChange={_onSlideChangeHandle}
      // pageArray={pageList}
    >
      <View style={styles.slide}>
        <Image source={Page1Image} style={styles.image}>
        </Image >
      </View>
      <View style={styles.slide}>
        <Image source={Page2Image} style={styles.image}>
        </Image >
      </View>
      <View style={styles.slide}>
        <Image source={Page3Image} style={styles.image}>
        </Image >
      </View>
      <View style={styles.slide}>
        <Image source={Page4Image} style={styles.image}>
        </Image >
      </View>
    </AppIntro>
  );
}
export default React.memo(IntroView);