import React from 'react';
import { View } from 'react-native';
import { AirbnbRating, AirbnbRatingProps, Text } from 'react-native-elements';

import styles, { selectedColor } from './styles';

interface RatingComponentProps extends AirbnbRatingProps {
  label?: string;
}

const RatingComponent: React.ComponentType<RatingComponentProps> = (props) => {
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.label}>{props.label ||"Rating"}</Text>
      <AirbnbRating
        count={5}
        selectedColor={selectedColor}
        {...props}
      />
    </View>
  )
}; 

export default RatingComponent;