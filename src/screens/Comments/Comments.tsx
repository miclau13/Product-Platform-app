import React from 'react';
import { AirbnbRatingProps, ButtonProps, InputProps } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { getDefaultOptionList } from './utils';
import CommentsView from './CommentsView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type CommentsScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Comments'
>;

type Props = {
  navigation: CommentsScreenNavigationProp;
};

export interface CommentsViewProps {
  comments: string;
  handleOnChangeComments: InputProps['onChangeText'];
  handleOnFinishRating: AirbnbRatingProps['onFinishRating'];
  handleSubmitButtonOnPress: ButtonProps['onPress'];
  rating: number;
};


const Comments: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading] = React.useState(false);
  const [comments, setComments] = React.useState('');
  const [rating, setRating] = React.useState(5);

  const handleOnChangeComments = React.useCallback<CommentsViewProps['handleOnChangeComments']>((value) => {
    setComments(value);
  }, [setComments]);

  const handleOnFinishRating = React.useCallback<CommentsViewProps['handleOnFinishRating']>((rating) => {
    setRating(rating);
  }, [rating]);

  const handleSubmitButtonOnPress = React.useCallback<CommentsViewProps['handleSubmitButtonOnPress']>(id => () => {
    // console.log(optionList[id].screen);
  }, [comments, rating]);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <CommentsView 
      comments={comments}
      handleOnChangeComments={handleOnChangeComments}
      handleOnFinishRating={handleOnFinishRating}
      handleSubmitButtonOnPress={handleSubmitButtonOnPress}
      rating={rating}
    />
  )
};

export default React.memo(Comments);