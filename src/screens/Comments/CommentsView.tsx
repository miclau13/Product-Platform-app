import React from 'react';
import { ScrollView, View } from 'react-native';
import { ButtonProps, InputProps } from 'react-native-elements';
import { Snackbar } from 'react-native-paper';

import ButtonComponent from '@components/ButtonComponent';
import InputComponent from '@components/InputComponent';
import RatingComponent, { RatingComponentProps } from '@components/RatingComponent';
import mapping from '@languages/CN/mapping';
import styles from './styles';

export interface CommentsViewProps {
  comments: string;
  handleOnChangeComments: InputProps['onChangeText'];
  handleOnFinishRating: RatingComponentProps['onFinishRating'];
  handleSubmitButtonOnPress: ButtonProps['onPress'];
  rating: number;

  visible: boolean;
  onDismissSnackBar: () => void;
};

const CommentsView: React.ComponentType<CommentsViewProps> = (props) => {
  const { 
    comments,
    handleOnChangeComments,
    handleOnFinishRating,
    handleSubmitButtonOnPress,
    rating,

    visible,
    onDismissSnackBar,
  } = props;
  
  return (
    <>
      <ScrollView 
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
      >
        <View style={{ margin: 8 }}></View>
        <RatingComponent 
          defaultRating={rating || 0}
          onFinishRating={handleOnFinishRating}
          showRating={false}
          label={mapping["Rating"]}
        />
        <View style={{ margin: 8 }}></View>
        <InputComponent
          multiline
          inputStyle={styles.textArea}
          label={mapping["Comments"]}
          numberOfLines={3}
          onChangeText={handleOnChangeComments}
          placeholder={mapping['Your comments are important!']}
          value={comments}
        />
        <View style={{ margin: 8 }}></View>
        <ButtonComponent
          disabled={!rating && !comments}
          onPress={handleSubmitButtonOnPress}
          title={mapping['Submit']}
        />
      </ScrollView>
      <Snackbar
        visible={visible}
        action={{
          label: mapping['Close'],
          onPress: onDismissSnackBar,
        }}
        duration={2000}
        onDismiss={onDismissSnackBar}
      >
        {mapping['Sent']}
      </Snackbar>
    </>
  );
}
export default React.memo(CommentsView);