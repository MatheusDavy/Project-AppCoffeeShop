import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SPACING } from '../../../../utils/theme/theme';
import CustomIcon from '../../icons/CustomIcon';
import { styles } from './Card.style';
import { CartProductCardProps } from './Card.types';
import { useLogic } from './Card.logic';

export function CartProductCard({ product }: CartProductCardProps) {
    const { data } = useLogic({ product });

    if (data.refactorPrices.length == 0) {
        return;
    }

    return (
        <>
            {data.refactorPrices.length > 1 ? (
                <CardSeveral product={{ ...product, prices: data.refactorPrices }} />
            ) : (
                <CardUnique product={{ ...product, prices: data.refactorPrices }} />
            )}
        </>
    );
}

const CardUnique = ({ product }: CartProductCardProps) => {
    const { methods } = useLogic({ product })
    console.log(product.prices)
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.wrapper}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 30,
            }}>
                <Image
                    source={product.imagelink_square}
                    style={{
                        width: 140,
                        height: 140,
                        borderRadius: SPACING.space_20,
                        resizeMode: 'cover',
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.textName}>{product.name}</Text>
                    <Text style={styles.textRoasted}>{product.special_ingredient}</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10,
                        marginTop: 8
                    }}>
                        {/* Size */}
                        <Text style={styles.sizesBox}>
                            {product.prices[0].size}
                        </Text>
                        {/* Price */}
                        <Text style={styles.price}>
                            <Text style={{ color: COLORS.primaryOrangeHex }}>{product.prices[0].currency}</Text>{" "}
                            {product.prices[0].price}
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10,
                        marginTop: 8
                    }}>
                        <TouchableOpacity
                            style={styles.btnPlusLess}
                            onPress={() => {
                                methods.decrementItem(product.id, product.prices[0].index)
                            }}
                        >
                            <CustomIcon name='add' color={COLORS.primaryWhiteHex} size={8} />
                        </TouchableOpacity>
                        <Text style={styles.boxQuantity}>
                            {product.prices[0].quantity}
                        </Text>
                        <TouchableOpacity style={styles.btnPlusLess}>
                            <CustomIcon name='add' color={COLORS.primaryWhiteHex} size={8} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </LinearGradient>
    );
};

const CardSeveral = ({ product }: CartProductCardProps) => {
    const { methods } = useLogic({ product })
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.wrapper}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 30,
            }}>
                <Image
                    source={product.imagelink_square}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: SPACING.space_20,
                        resizeMode: 'cover',
                    }}
                />
                <View>
                    <Text style={styles.textName}>{product.name}</Text>
                    <Text style={styles.textRoasted}>{product.special_ingredient}</Text>
                    <View style={styles.textIngredient}>
                        <Text style={styles.textRoasted}>{product.special_ingredient}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.pricesGroup}>
                {product.prices.map((data: any, key: number) => (
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 5
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 20
                        }}>
                            {/* Size */}
                            <Text style={styles.sizesBox}>
                                {data.size}
                            </Text>
                            {/* Price */}
                            <Text key={key} style={styles.price}>
                                <Text style={{ color: COLORS.primaryOrangeHex }}>{data.currency}</Text>{" "}
                                {data.price}
                            </Text>
                        </View>
                        {/* Select Quantity */}
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <TouchableOpacity onPress={() => {
                                methods.decrementItem(product.id, product.prices[0].index)
                            }} style={styles.btnPlusLess}>
                                <CustomIcon name='add' color={COLORS.primaryWhiteHex} size={8} />
                            </TouchableOpacity>
                            <Text style={styles.boxQuantity}>
                                {data.quantity}
                            </Text>
                            <TouchableOpacity style={styles.btnPlusLess}>
                                <CustomIcon name='add' color={COLORS.primaryWhiteHex} size={8} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </LinearGradient>
    )
};

