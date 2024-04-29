import { Image, ImageBackground, Text, View } from "react-native";
import { bannerStyles } from "./Banner.style";
import { BlurView } from "@react-native-community/blur";
import CustomIcon from "../../../Materials/icons/CustomIcon";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../../../utils/theme/theme";

type Props = {
    product: any
}

export function BannerDetails({ product }: Props) {

    return (
        <View style={bannerStyles.wrapper}>
            <ImageBackground
                source={product.imagelink_portrait}
                resizeMode="cover"
                style={{
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                }}
            >
                <View style={{
                    position: 'relative',
                    borderTopLeftRadius: BORDERRADIUS.radius_25,
                    borderTopRightRadius: BORDERRADIUS.radius_25,
                    overflow: 'hidden',
                    backgroundColor: COLORS.primaryBlackRGBA
                }} >
                    <View style={bannerStyles.contentWrapper}>
                        <View>
                            <Text style={bannerStyles.contentTitle}>
                                {product.name}
                            </Text>
                            <Text style={bannerStyles.contentSubtitle}>
                                {product.special_ingredient}
                            </Text>
                            <View style={bannerStyles.contentAvaliate}>
                                <CustomIcon
                                    name={'star'}
                                    color={COLORS.primaryOrangeHex}
                                    size={FONTSIZE.size_20}
                                    style={{ transform: [{ translateY: -2 }] }}
                                />
                                <Text style={bannerStyles.contentTitle}>{product.average_rating}</Text>
                                <Text style={bannerStyles.contentSubtitle}>
                                    {'('}
                                    {product.ratings_count}
                                    {')'}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: SPACING.space_20
                                }}
                            >
                                <View style={bannerStyles.contentIngredient}>
                                    <CustomIcon
                                        name={product.type == 'Bean' ? "bean" : "bean"}
                                        color={COLORS.primaryOrangeHex}
                                        size={FONTSIZE.size_24}
                                    />
                                    <Text style={bannerStyles.contentIngredientText}>{product.type}</Text>
                                </View>
                                <View style={bannerStyles.contentIngredient}>
                                    <CustomIcon
                                        color={COLORS.primaryOrangeHex}
                                        name={product.type == 'Bean' ? "location" : "bean"}
                                        size={FONTSIZE.size_24}
                                    />
                                    <Text style={bannerStyles.contentIngredientText}>{product.ingredients}</Text>
                                </View>
                            </View>
                            <View style={[bannerStyles.contentIngredient, { marginTop: 13 }]}>
                                <Text style={bannerStyles.contentIngredientText}>{product.roasted}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}