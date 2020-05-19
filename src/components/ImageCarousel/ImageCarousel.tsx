import React  from 'react';
import { Image } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import styles from './styles';

// type AlbumPhoto = {
//   id: string;
//   uri: string;
// }

interface ImageCarouselProps {
  album: string[];
  currentPage: number;
};

const ImageCarousel: React.ComponentType<ImageCarouselProps> = (props) => {
  const { 
    album,
    currentPage,
  } = props;
  return (
    <Carousel 
      bullets
      autoplay={false}
      currentPage={currentPage}
      isLooped={false}
      style={{ flex: 1 }}
    >
      {album.map((image, index) => {
        // console.log("image", image)
        return (
          <Image 
            key={index}
            resizeMode="contain"
            source={{ uri: image }}
            style={{ flex: 1 }}
          />
        )
      })}
    </Carousel>
  )
}

export default ImageCarousel;