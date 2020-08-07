import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import CommentsView, { CommentsViewProps } from './CommentsView';
import LoadingComponent from '../../components/LoadingComponent';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

type CommentsScreenNavigationProp = StackNavigationProp<
  BarCodeScannerStackParamList,
  'Comments'
>;

type Props = {
  navigation: CommentsScreenNavigationProp;
};

const Comments: React.ComponentType<Props> = (props) => {
  const { navigation } = props;

  const [loading, setLoading] = React.useState(false);
  const [comments, setComments] = React.useState('');
  const [rating, setRating] = React.useState(5);
  const [id, setID] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const onDismissSnackBar = React.useCallback(() => setVisible(false), []);

  const handleOnChangeComments = React.useCallback<CommentsViewProps['handleOnChangeComments']>((value) => {
    setComments(value);
  }, [setComments]);

  const handleOnFinishRating = React.useCallback<CommentsViewProps['handleOnFinishRating']>((rating) => {
    setRating(rating);
  }, [rating]);

  const handleSubmitButtonOnPress = React.useCallback<CommentsViewProps['handleSubmitButtonOnPress']>(async () => {
    try {
      setLoading(true);
      setVisible(true);
      const deviceId = await SecureStore.getItemAsync("deviceId");
      const uri = id ? `https://miclo1.azurewebsites.net/profiles/update/${id}` : `https://miclo1.azurewebsites.net/profiles/add`;
      const response = await fetch(uri, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          deviceId,
          comments,
          rating,
        }),
      });
      // await response.json() || [];
    } catch (error) {
      console.log(" handleSubmitButtonOnPress error:", error);
    } finally {
      setLoading(false);
    }
  }, [id, comments, rating]);

  React.useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const deviceId = await SecureStore.getItemAsync("deviceId");
        const response = await fetch(`https://miclo1.azurewebsites.net/profiles?id=${deviceId}`, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        if (result && result[0]) {
          const { _id, comments, rating } = result[0];
          setComments(comments);
          setRating(rating);
          setID(_id)
        }
      } catch (error) {
        console.log(" fetchProfileData error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfileData();
    return () => {}
  }, []);
  
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

      visible={visible}
      onDismissSnackBar={onDismissSnackBar}
    />
  )
};

export default React.memo(Comments);