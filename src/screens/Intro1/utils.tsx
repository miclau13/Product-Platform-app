import { Page } from './Intro';

const MaskCoverImage: Page['img'] = require('./assets/mask_cover.png');
const SanitizerCoverImage: Page['img'] = require('./assets/sanitizer_cover.jpeg');
const PaperRollCoverImage: Page['img'] = require('./assets/paper_roll_cover.jpeg');
const RiceCoverImage: Page['img'] = require('./assets/rice_cover.jpeg');

const pageList: Page[] = [
  { 
    backgroundColor: '#fa931d',
    description: '(Description 1)',
    fontColor: '#fff',
    img: MaskCoverImage,
    imgStyle: {
      height: 100,
      width: 100, 
    },
    level: 10,
    title: "Intro Page 1", 
  },
  { 
    backgroundColor: '#a4b602',
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
    backgroundColor: '#febe29',
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
    backgroundColor: '#22bcb5',
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