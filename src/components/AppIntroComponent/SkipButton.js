import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform
} from 'react-native';

export const SkipButton = ({
  styles, onSkipBtnClick, isSkipBtnShow,
  leftTextColor,
  skipBtnLabel,
  skipFadeOpacity
}) => {
  console.log("SkipButton skipFadeOpacity",skipFadeOpacity)
  if (Platform.OS === "ios") {
    return (
      <Animated.View style={[styles.btnContainer, {
        opacity: skipFadeOpacity,
        transform: [{
          translateX: skipFadeOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 15],
          }),
        }],
      }]}
      >
        <TouchableOpacity
          style={styles.full}
          onPress={isSkipBtnShow ? () => onSkipBtnClick() : null}>
          <Text style={[styles.controllText, { color: leftTextColor }]}>
            {skipBtnLabel}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    )
  } else {
    return (
      <View style={[styles.btnContainer, {
          paddingBottom: 5,
          opacity: isSkipBtnShow ? 1 : 0,
        }]}>
        <TouchableOpacity
          style={styles.full}
          onPress={isSkipBtnShow ? () => onSkipBtnClick() : null}>
          <Text style={[styles.controllText, { color: leftTextColor }]}>
            {skipBtnLabel}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SkipButton