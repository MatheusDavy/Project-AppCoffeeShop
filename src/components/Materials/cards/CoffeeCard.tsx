import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ImageProps } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../../../utils/theme/theme";
import CustomIcon from "../icons/CustomIcon";
import BGIcon from "../icons/BGIcon";

type Props = {
    imagelink_square: ImageProps;
    name: string;
    special_ingredient: string;
    average_rating: number;
    price: any;
    buttonPressHandler: any;
};

const CoffeeCard = ({
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler,
  }: Props) => {

    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.CardLinearGradientContainer}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <ImageBackground
          source={imagelink_square}
          style={styles.CardImageBG}
          resizeMode="cover">
          <View style={styles.CardRatingContainer}>
            <CustomIcon
              name={'star'}
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_16}
            />
            <Text style={styles.CardRatingText}>{average_rating}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.CardTitle}>{name}</Text>
        <Text style={styles.CardSubtitle}>{special_ingredient}</Text>
        <View style={styles.CardFooterRow}>
          <Text style={styles.CardPrice}>
            <Text style={{color: COLORS.primaryOrangeHex}}>{price[0].currency}</Text> {price[0].price}
          </Text>
          <TouchableOpacity
            onPress={buttonPressHandler}
          >
            <BGIcon
              color={COLORS.primaryWhiteHex}
              name={'add'}
              BGColor={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_10}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
    CardLinearGradientContainer: {
      padding: SPACING.space_15,
      borderRadius: BORDERRADIUS.radius_25,
    },
    CardImageBG: {
      width: 150,
      height: 150,
      borderRadius: BORDERRADIUS.radius_20,
      marginBottom: SPACING.space_15,
      overflow: 'hidden',
    },
    CardRatingContainer: {
      flexDirection: 'row',
      backgroundColor: COLORS.primaryBlackRGBA,
      alignItems: 'center',
      justifyContent: 'center',
      gap: SPACING.space_10,
      paddingHorizontal: SPACING.space_15,
      position: 'absolute',
      borderBottomLeftRadius: BORDERRADIUS.radius_20,
      borderTopRightRadius: BORDERRADIUS.radius_20,
      top: 0,
      right: 0,
    },
    CardRatingText: {
      fontFamily: FONTFAMILY.poppins_medium,
      color: COLORS.primaryWhiteHex,
      lineHeight: 22,
      fontSize: FONTSIZE.size_14,
    },
    CardTitle: {
      fontFamily: FONTFAMILY.poppins_medium,
      color: COLORS.primaryWhiteHex,
      fontSize: FONTSIZE.size_16,
    },
    CardSubtitle: {
      fontFamily: FONTFAMILY.poppins_light,
      color: COLORS.primaryWhiteHex,
      fontSize: FONTSIZE.size_10,
    },
    CardFooterRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: SPACING.space_15,
    },
    CardPrice: {
      fontFamily: FONTFAMILY.poppins_semibold,
      color: COLORS.primaryWhiteHex,
      fontSize: FONTSIZE.size_18,
    },
  });
  
  export default CoffeeCard;
  