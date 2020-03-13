import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultPageList } from './utils';
import IntroView from './IntroView';
import { HomeStackParamList } from '../../navigator/NavigationStack/HomeStack';

type IntroScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Intro'
>;

type Props = {
  navigation: IntroScreenNavigationProp;
};

export interface IntroViewProps {
  slideIndex: number;
  _onIndexChanged(index: number): void;
};

const Intro: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [slideIndex, setSlideIndex] = React.useState(0);

  const _onIndexChanged = React.useCallback((index) => {
    setSlideIndex(index)
  }, [slideIndex])

  return (
    <IntroView
    slideIndex={slideIndex}
    _onIndexChanged={_onIndexChanged}
    />
  )
};

export default React.memo(Intro);