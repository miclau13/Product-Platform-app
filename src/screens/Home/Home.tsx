import React from 'react';
import { ButtonProps, CardProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultCategoryList } from './utils';
import HomeView from './HomeView';
import LoadingComponent from '../../components/LoadingComponent';
import { HomeStackParamList } from '../../navigator/NavigationStack/HomeStack';

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export type CategoryList = {
  buttonProps: ButtonProps;
  description: string;
  image: CardProps['image'];
  imageProps: CardProps['imageProps'];
  imageStyle: CardProps['imageStyle'];
  title: CardProps['title'];
}[];

export interface HomeViewProps {
  categoryList: CategoryList;
};

const Home: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const categoryList = getDefaultCategoryList();
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <HomeView categoryList={categoryList} />
  )
};

export default React.memo(Home);