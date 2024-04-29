import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../../../utils/theme/theme";


export const inputSearchStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.primaryDarkGreyHex,
    },
    icon: {
        marginHorizontal: SPACING.space_24,
    },
    input: {
        flex: 1,
        height: SPACING.space_20 * 3,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex
    }
})

export const categoriesStyles = StyleSheet.create({
    horizontal: {
        paddingHorizontal: SPACING.space_20,
        marginBottom: SPACING.space_20
    },
    wrapper: {
        paddingHorizontal: SPACING.space_15,
        borderRadius: SPACING.space_20,
        alignItems: 'center',
        overflow: 'hidden',
    },
    text: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        paddingHorizontal: SPACING.space_8, 
        paddingVertical: SPACING.space_4,
    },
    active: {
        height: SPACING.space_10,
        width: SPACING.space_10,
        borderRadius: SPACING.space_10,
        backgroundColor: COLORS.primaryOrangeHex
    }
})

export const productsStyles = StyleSheet.create({
    flatList: {
        gap: SPACING.space_20,
        paddingVertical: SPACING.space_20,
        paddingHorizontal: SPACING.space_30
    },
    title: {
        color: COLORS.primaryWhiteHex,
        paddingLeft: SPACING.space_30,
        fontSize: FONTSIZE.size_18,
        fontFamily: FONTFAMILY.poppins_bold,
        marginTop: SPACING.space_20
    },
    notFound: {
        color: COLORS.primaryLightGreyHex,
        paddingVertical: SPACING.space_20,
        paddingHorizontal: SPACING.space_10,
        textAlign: 'center',
        fontSize: FONTSIZE.size_16,
        marginVertical: SPACING.space_36,
    }
})
