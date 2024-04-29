import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../../../utils/theme/theme";

export const detailsStyles = StyleSheet.create({
    wraper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: SPACING.space_20,
        paddingHorizontal: SPACING.space_20,
        paddingBottom: 80,
        backgroundColor: COLORS.primaryBlackHex
    },

    title:{
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex
    },
    description: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex
    },

    sizesWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },
    sizesButton: {
        flex: 1,
        padding: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryGreyHex,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sizesButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        textAlign: 'center'
    }
})