import { StyleSheet } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../../utils/theme/theme';

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: SPACING.space_15,
        borderRadius: 25,
    },

    textName: {
        fontSize: FONTSIZE.size_20,
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.primaryWhiteHex
    },
    textRoasted: {
        fontSize: FONTSIZE.size_10,
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.secondaryLightGreyHex
    },
    textIngredient: {
        paddingVertical: SPACING.space_10,
        paddingHorizontal: SPACING.space_16,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryDarkGreyHex,
        marginTop: SPACING.space_15
    },

    pricesGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: SPACING.space_10,
        marginTop: SPACING.space_15,
    },
    sizesBox: {
        padding: SPACING.space_8,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryBlackHex,
        minWidth: 72,
        minHeight: 35,

        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    price: {
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
        fontWeight: 'bold',
        lineHeight: FONTSIZE.size_18
    },
    btnPlusLess: {
        width: 28,
        height: 28,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryOrangeHex,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxQuantity: {
        padding: SPACING.space_4,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryBlackHex,
        minWidth: 50,
        minHeight: 30,

        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
        textAlign: 'center',
        fontWeight: 'bold',
        borderColor: COLORS.primaryOrangeHex,
        borderWidth: 2
    }
});