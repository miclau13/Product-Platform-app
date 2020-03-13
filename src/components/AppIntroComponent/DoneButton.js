import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
  doneFadeOpacity, skipFadeOpacity, nextOpacity
}) => {
  if (Platform.OS === "ios") {
    return (
      <View style={styles.btnContainer}>
        <Animated.View style={[styles.full, { height: 0 }, {
          opacity: doneFadeOpacity,
          transform: [{
            translateX: skipFadeOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 20],
            }),
          }],
        }]}
        >
          <View style={styles.full}>
            <Text style={[styles.controllText, {
              color: rightTextColor, paddingRight: 30,
            }]}>
              {doneBtnLabel}
            </Text>
          </View>
        </Animated.View>
        <Animated.View style={[styles.full, { height: 0 }, { opacity: nextOpacity }]}>
          <TouchableOpacity style={styles.full}
            onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}>
          <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
            {nextBtnLabel}
          </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  } else {
    return (
      <View style={[styles.btnContainer, { height: 0, paddingBottom: 5 }]}>
        <TouchableOpacity style={styles.full}
          onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
        >
         <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
           {isDoneBtnShow ? doneBtnLabel : nextBtnLabel}
         </Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

export default DoneButton