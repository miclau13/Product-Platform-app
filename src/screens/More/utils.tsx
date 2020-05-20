import { Option } from './More';

const optionList: Option[] = [
  { 
    id: 0,
    screen: "AboutUs",
    title: "About Us",
  },
  { 
    id: 1,
    screen: "Comments",
    title: "Tutorial",
  },
  { 
    id: 2,
    screen: "FAQ",
    title: "FAQ",
  },
  { 
    id: 3,
    screen: "Comments",
    title: "Comments",
  },
  { 
    id: 4,
    screen: "Comments",
    title: "Privacy",
  },
  { 
    id: 5,
    screen: "Comments",
    title: "Terms & Conditions",
  },
  { 
    id: 6,
    screen: "Comments",
    title: "Language",
  },
];

export const getDefaultOptionList = () => {
  return optionList;
}