import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../../utils/theme/theme'

export default function Banner() {
  return (
    <View>
      <Text
        style={{
          fontSize: FONTSIZE.size_28,
          fontFamily: FONTFAMILY.poppins_semibold,
          color: COLORS.primaryWhiteHex,
          paddingLeft: SPACING.space_30,
          paddingRight: SPACING.space_30
        }}
      >
        Find the best  {'\n'}
        coffee for you
      </Text>
    </View>
  )
}