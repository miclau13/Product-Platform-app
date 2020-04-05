
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const overlayColor = "transparent";
// const overlayColor = "rgba(0,0,0,0.5)";  // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "transparent";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";

const iconScanColor = "white";

const styles = StyleSheet.create({
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  }
});

const BarCodeScannerMarkerView: React.ComponentType = (props) => {
  return (
    <View style={styles.rectangleContainer}>
      <View style={styles.topOverlay}>
        {/* <Text style={{ fontSize: 30, color: "white" }}>
          BARCODE SCANNER
        </Text> */}
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.leftAndRightOverlay} />
        <View style={styles.rectangle}>
          <Icon
            name="ios-qr-scanner"
            size={SCREEN_WIDTH * 0.73}
            color={iconScanColor}
            type='ionicon'
          />
        </View>

        <View style={styles.leftAndRightOverlay} />
      </View>

      <View style={styles.bottomOverlay} />
    </View>
  );
}
export default React.memo(BarCodeScannerMarkerView);