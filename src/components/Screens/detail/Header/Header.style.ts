import { StyleSheet } from "react-native";
import { SPACING } from "../../../../utils/theme/theme";

export const headerStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        padding: SPACING.space_32,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10
    }
})