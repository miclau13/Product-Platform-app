import React from 'react';

import { IntroViewProps } from '../Intro';
// import AppIntro from '../../../components/AppIntroComponent';
import AppIntro from 'rn-falcon-app-intro';

const IntroView: React.ComponentType<IntroViewProps> = (props) => {
  const { 
    pageList,
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
      pageArray={pageList}
    />
  );
}
export default React.memo(IntroView);