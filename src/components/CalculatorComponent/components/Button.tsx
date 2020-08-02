import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;


const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: buttonWidth - 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: buttonWidth,
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 -10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});

export interface ButtonProps {
  onPress: TouchableOpacityProps['onPress'];
  text: string;
  size?: string;
  theme?: 'accent' | 'secondary';
};

const Button: React.ComponentType<ButtonProps> = (props) => {
  const { onPress, text, size, theme, ...buttonProps } = props;
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.button, 
        size === "double" && styles.buttonDouble,
        theme === "secondary" && styles.buttonSecondary,
        theme == "accent" && styles.buttonAccent,
      ]}>
        <Text style={[styles.text,  theme === "secondary" && styles.textSecondary]}>{text}</Text>
    </TouchableOpacity>
  )
}; 

export default Button;