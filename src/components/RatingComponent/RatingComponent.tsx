import React from 'react';
import { View } from 'react-native';
import { AirbnbRating, AirbnbRatingProps, Text } from 'react-native-elements';

import styles from './styles';

const RatingComponent: React.ComponentType<AirbnbRatingProps> = (props) => {
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.label}>Rating</Text>
      <AirbnbRating
        count={5}
        { ...props }
      />
    </View>
  )
}; 

export default RatingComponent;