import { Dimensions, StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../../../utils/theme/theme";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export const bannerStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: WINDOW_HEIGHT * 0.75,
    position: "relative",
    flex: 1,
    zIndex: 0,
  },
  contentWrapper: {
    width: '100%',
    height: 'auto',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    padding: SPACING.space_20,
  },

  contentTitle: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_bold,
  },
  contentSubtitle: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  contentAvaliate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 25
  },

  contentIngredient: {
    minHeight: 55,
    minWidth: 55,
    width: 'auto',
    height: 'auto',
    padding: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  contentIngredientText: {
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    lineHeight: FONTSIZE.size_12
  }
});
