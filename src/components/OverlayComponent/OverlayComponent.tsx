import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Overlay, OverlayProps } from 'react-native-elements';

interface OverlayComponentProps extends OverlayProps {}

const OverlayComponent: React.ComponentType<OverlayComponentProps> = (props) => {
  const { children, isVisible, ...overlayProps } = props;
  return (
    <View>
      <Overlay isVisible={isVisible} { ...overlayProps }>
        {children}
      </Overlay>
    </View>
  )
}; 

export default OverlayComponent;