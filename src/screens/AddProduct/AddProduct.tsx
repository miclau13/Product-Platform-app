import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import AddProductView from './AddProductView';
import LoadingComponent from '../../components/LoadingComponent';
import { RecordsStackParamList } from '../../navigator/NavigationStack/RecordsStack';

type AddProductScreenNavigationProp = StackNavigationProp<
  RecordsStackParamList,
  'AddProduct'
>;

type Props = {
  navigation: AddProductScreenNavigationProp;
};

export interface AddProductViewProps {
};

const AddProduct: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);

  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <AddProductView 
    />
  )
};

export default React.memo(AddProduct);