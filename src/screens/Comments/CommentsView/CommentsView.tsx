import React from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { AirbnbRating, Button, Input } from 'react-native-elements';

import styles from './styles';
import { CommentsViewProps } from '../Comments';

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
      <Input
        inputComponent={() =>
          (<View style={styles.ratingContainer}>
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={rating}
              onFinishRating={handleOnFinishRating}
            />
          </View>)
        }
        label="Rating"
        labelStyle={styles.label}
      />
      <View style={{ margin: 8 }}></View>
      <Input
        multiline
        inputContainerStyle={styles.textAreaContainer}
        inputStyle={styles.textArea}
        label="Comments"
        labelStyle={styles.label}
        numberOfLines={3}
        onBlur={() => Keyboard.dismiss()}
        onChangeText={handleOnChangeComments}
        placeholder='Your comments are important!'
        value={comments}
      />
      <View style={{ margin: 8 }}></View>
        <Button
          // containerStyle={{ alignItems: 'center' }}
          // buttonStyle={{ alignSelf: 'center' }}
          onPress={handleSubmitButtonOnPress}
          title='Submit' 
        >
        </Button> 
    </ScrollView>
  );
}
export default React.memo(CommentsView);