import { Animated } from "react-native";
import { floatChartStyles } from "./FloatChart.style";
import { useLogic } from "./FloatChart.logic";
import { FloatChart } from "../../../Layout/FloatChart/FloatChart";

type Props = {
    navigation: any
}

export function Footer({ navigation }: Props) {
    const { data } = useLogic();

    return (
        <Animated.View
            style={[
                floatChartStyles.wrapper,
                { transform: [{ translateY: data.animateValue }] }
            ]}
        >
            <FloatChart
                btnText="Cart"
                price={data.totalPrice}
                priceLabel="Total Price"
                btnAction={() => {
                    navigation.navigate('Cart')
                }}
            />
        </Animated.View>
    )
}