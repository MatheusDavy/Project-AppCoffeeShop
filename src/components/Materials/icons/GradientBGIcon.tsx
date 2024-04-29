import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, SPACING } from '../../../utils/theme/theme'
import CustomIcon from './CustomIcon'

type Props = {
    name: string
    color: string
    size: number
}

export default function GradientBGIcon({ name, color, size }: Props) {
    return (
        <View style={styles.gradientContainer}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.linearGradient}
            >
                <CustomIcon name={name} color={color} size={size} />
            </LinearGradient>
        </View>
    )
};

const styles = StyleSheet.create({
    gradientContainer: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden'
    },
    linearGradient: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
    }
})