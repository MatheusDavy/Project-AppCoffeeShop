import { StyleSheet } from "react-native";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../../../utils/theme/theme";

export const floatChartStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    left: "5%",
    padding: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryGreyHex,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },

  totalText: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  totalPrice: {
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },

  paymentButton: {
    width: "65%",
    height: "auto",
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_15,
    padding: SPACING.space_15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  paymentButtonText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
});
