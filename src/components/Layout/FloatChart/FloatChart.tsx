import { Text, TouchableOpacity, View } from "react-native";
import { floatChartStyles } from "./FloatChart.style";
import { COLORS, FONTSIZE } from "../../../utils/theme/theme";
import CustomIcon from "../../Materials/icons/CustomIcon";

type Props = {
    price: number,
    priceLabel: string,
    btnText: string,
    btnIconName?: string
    btnAction: (...props: any) => any
}

export function FloatChart({
    price,
    priceLabel,
    btnText,
    btnIconName = 'cart',
    btnAction
}: Props) {

    return (
        <View style={floatChartStyles.wrapper}>
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 2,
                    marginLeft: 20
                }}
            >
                <Text style={floatChartStyles.totalText}>{priceLabel}</Text>
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 5
                    }}
                >
                    <Text style={[floatChartStyles.totalPrice, { color: COLORS.primaryOrangeHex }]}>$</Text>
                    <Text style={floatChartStyles.totalPrice}>{price}</Text>
                </View>
            </View>
            <TouchableOpacity style={floatChartStyles.paymentButton} onPress={btnAction}>
                <CustomIcon name={btnIconName} color={COLORS.primaryWhiteHex} size={FONTSIZE.size_18} />
                <Text style={floatChartStyles.paymentButtonText}>
                    {btnText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}