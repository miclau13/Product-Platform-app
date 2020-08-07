import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { ImageProps } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { getDefaultPageList } from './utils';
import IntroView from './IntroView';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';
import { useDisplayIntroContext } from '../../context/DisplayIntroContext';
import { useSelectCategoryContext } from '../../context/SelectCategoryContext';

type IntroScreenNavigationProp = StackNavigationProp<
BarCodeScannerStackParamList,
  'Intro'
>;

type IntroScreenRouteProp = RouteProp<BarCodeScannerStackParamList, "Intro">;

type Props = {
  navigation: IntroScreenNavigationProp;
  route: IntroScreenRouteProp;
};

export type Page = {
  backgroundColor: string;
  description: string;
  fontColor: string;
  img: ImageProps['source'];
  imgStyle: ImageProps['style'];
  level: number;
  title: string;
};

export interface IntroViewProps {
  pageList: Page[];
  _doneBtnHandle(): void;
  _nextBtnHandle(index: number): void;
  _onSlideChangeHandle(index: number, total: number): void;
  _onSkipBtnHandle(index: number): void;
};

const pageList = getDefaultPageList();

const Intro: React.ComponentType<Props> = (props) => {
  const { navigation, route } = props;
  const previousScreen = route?.params?.previousScreen;
  const { removeIntro } = useDisplayIntroContext();
  const { selectedCategory } = useSelectCategoryContext();
  const _doneBtnHandle: IntroViewProps['_doneBtnHandle'] = async () => {
    // navigation.navigate("HomeStack");
    await SecureStore.setItemAsync("displayIntro", "NO");
    removeIntro();
    navigation.navigate(previousScreen);
  };
  const _nextBtnHandle: IntroViewProps['_nextBtnHandle'] = (index) => {
  };
  const _onSlideChangeHandle: IntroViewProps['_onSlideChangeHandle'] = (index, total) => {
  };
  const _onSkipBtnHandle: IntroViewProps['_onSkipBtnHandle'] = async (index) => {
    await SecureStore.setItemAsync("displayIntro", "NO");
    removeIntro();
    if (previousScreen) {
      navigation.navigate(previousScreen);
    } else {
      navigation.navigate(!selectedCategory ? "ProductCategories" : "BarCodeScanner");
    }
  };

  return (
    <IntroView
      _doneBtnHandle={_doneBtnHandle}
      _nextBtnHandle={_nextBtnHandle}
      _onSlideChangeHandle={_onSlideChangeHandle}
      _onSkipBtnHandle={_onSkipBtnHandle}
      pageList={pageList}
    />
  )
};

export default React.memo(Intro);