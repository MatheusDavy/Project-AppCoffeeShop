import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/theme/theme";

export const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    borderTopColor: "transparent",
    elevation: 0,
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0 
  }
});
