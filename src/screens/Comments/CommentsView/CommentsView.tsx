import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

import styles from './styles';
import { CommentsViewProps } from '../Comments';
import RatingComponent from '../../../components/RatingComponent';
import mapping from '../../../languages/CN/mapping';

const CommentsView: React.ComponentType<CommentsViewProps> = (props) => {
  const { 
    comments,
    handleOnChangeComments,
    handleOnFinishRating,
    handleSubmitButtonOnPress,
    rating,
  } = props;
  
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <View style={{ margin: 8 }}></View>
      <RatingComponent 
        defaultRating={rating}
        onFinishRating={handleOnFinishRating}
        showRating={false}
        label={mapping["Rating"]}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        multiline
        inputContainerStyle={styles.textAreaContainer}
        inputStyle={styles.textArea}
        label={mapping["Comments"]}
        labelStyle={styles.label}
        numberOfLines={3}
        onChangeText={handleOnChangeComments}
        placeholder='Your comments are important!'
        value={comments}
      />
      <View style={{ margin: 8 }}></View>
        <Button
          onPress={handleSubmitButtonOnPress}
          title={mapping['Submit']}
        >
        </Button> 
    </ScrollView>
  );
}
export default React.memo(CommentsView);