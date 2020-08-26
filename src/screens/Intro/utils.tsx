import { Page } from './Intro';

const MaskCoverImage: Page['img'] = require('./assets/tutor_how to use_image1.png');
const SanitizerCoverImage: Page['img'] = require('./assets/tutor_how to use_image2.png');
const PaperRollCoverImage: Page['img'] = require('./assets/tutor_how to use_image3.png');
const RiceCoverImage: Page['img'] = require('./assets/tutor_how to use_image4.png');

const pageList: Page[] = [
  { 
    // backgroundColor: '#D2B48E',
    // description: '(Description 1)',
    // fontColor: '#fff',
    img: MaskCoverImage,
    imgStyle: {
      height: 500,
      width: 500, 
    },
    level: 10,
    // title: "Intro Page 1", 
  },
  { 
    backgroundColor: '#ADD8E6',
    description: '(Description 2)',
    fontColor: '#fff',
    img: SanitizerCoverImage,
    imgStyle: {
      height: 100,
      width: 100, 
    },
    level: 10,
    title: "Intro Page 2", 
  },
  { 
    backgroundColor: '#CC99CC',
    description: '(Description 3)',
    fontColor: '#fff',
    img: PaperRollCoverImage,
    imgStyle: {
      height: 100,
      width: 100, 
    },
    level: 10,
    title: "Intro Page 3", 
  },
  { 
    backgroundColor: '#EE82EE',
    description: '(Description 4)',
    fontColor: '#fff',
    img: RiceCoverImage,
    imgStyle: {
      height: 100,
      width: 100, 
    },
    level: 10,
    title: "Intro Page 4", 
  },
];

export const getDefaultPageList = () => {
  return pageList;
}