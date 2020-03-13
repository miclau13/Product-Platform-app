import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';

// import MaskCoverImage from '../assets/mask_cover.png';
import styles from './styles';
import { HomeViewProps } from '../Home';

const HomeView: React.ComponentType<HomeViewProps> = (props) => {
  const { categoryList, onPress } = props;
  
  return (
    <SafeAreaView>
      <ScrollView>
        {categoryList.map((category, index) => {
          const { buttonProps, description, image, imageProps, title } = category;
          return (
            <Card
              key={index}
              image={image}
              imageProps={imageProps}
              title={title}
            >
              <Text style={styles.title}>
                {description}
              </Text>
              <Button
                onPress={onPress}
                { ...buttonProps }
              />
            </Card>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
export default React.memo(HomeView);