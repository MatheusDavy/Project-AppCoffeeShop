import { Text, TouchableOpacity, View } from "react-native";
import { detailsStyles } from "./Details.style";
import { COLORS } from "../../../../utils/theme/theme";

type Props = {
    product: any
    select: number
    setSelect: (index: number) => void
}

export function ProductDetails({ product, select, setSelect }: Props) {
    return (
        <View style={detailsStyles.wraper}>
            <Text style={detailsStyles.title}>Description</Text>
            <Text style={[detailsStyles.description, { marginTop: 5 }]}>{product.description}</Text>

            <Text style={[detailsStyles.title, { marginTop: 20 }]}>Sizes</Text>
            <View style={detailsStyles.sizesWrapper}>
                {product.prices.map((priceDetail: any, index: number) => (
                    <TouchableOpacity
                        onPress={() => {
                            setSelect(index)
                        }}
                        style={[detailsStyles.sizesButton, {
                            borderColor: select == index ? COLORS.primaryOrangeHex : 'none',
                            borderWidth: select == index ? 2 : 0
                        }]}
                    >
                        <Text
                            style={[detailsStyles.sizesButtonText, {
                                color: select == index ? COLORS.primaryOrangeHex : COLORS.primaryWhiteHex
                            }]}
                        >
                            {priceDetail.size}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
