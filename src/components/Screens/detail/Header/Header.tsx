import { TouchableOpacity, View } from "react-native";
import { useLogic } from "./Header.logic";
import GradientBGIcon from "../../../Materials/icons/GradientBGIcon";
import { COLORS, FONTSIZE } from "../../../../utils/theme/theme";
import { headerStyle } from "./Header.style";
import { HeaderProps } from "./Header.types";

export function HeaderDetail({ id, backHandler }: HeaderProps) {
    const { data, methods } = useLogic({ id });

    return (
        <View style={headerStyle.container}>
            <TouchableOpacity onPress={backHandler}>
                <GradientBGIcon
                    name="left"
                    color={COLORS.primaryLightGreyHex}
                    size={FONTSIZE.size_16}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={methods.addOrRemoveToFavotiteList}
            >
                <GradientBGIcon
                    name="like"
                    color={data.isFavourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
                    size={FONTSIZE.size_16}
                />
            </TouchableOpacity>
        </View>
    );
};
