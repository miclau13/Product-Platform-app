
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get("window").width;

const overlayColor = "rgba(0,0,0,0.5)";  // this gives us a black color with a 50% transparency

const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "transparent";

const iconScanColor = "white";

const styles = StyleSheet.create({
  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
  },
  rectangle: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    flex: 1,
    justifyContent: "center",
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  scannerContatiner: {
    flexDirection: "row", 
    flexGrow: 1,
  },
  scannerTitle: {
    alignSelf: 'center', 
    color: 'white',
    fontSize: 18,
  },
  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
  },
});

const BarCodeScannerMarkerView: React.ComponentType = (props) => {
  return (
    <View style={styles.rectangleContainer}>
      <View style={styles.topOverlay}>
        <Text style={styles.scannerTitle}>Please scan the Barcode on the product </Text>
      </View>
      <View style={styles.scannerContatiner}>
        <View style={styles.rectangle}>
          <Icon
            name="ios-qr-scanner"
            size={SCREEN_WIDTH * 1.1}
            color={iconScanColor}
            type='ionicon'
          />
        </View>
      </View>
      <View style={styles.bottomOverlay} />
    </View>
  );
}
export default React.memo(BarCodeScannerMarkerView);