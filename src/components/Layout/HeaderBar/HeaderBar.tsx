import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './HeaderBar.style'
import GradientBGIcon from '../../Materials/icons/GradientBGIcon'
import ProfilePic from '../../Materials/profiles/ProfilePic'
import { COLORS, FONTSIZE } from '../../../utils/theme/theme'

type Props = {
    title?: string
}

export default function HeaderBar({ title }: Props ) {
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePic src={require('../../../assets/img/profiles/avatar.png')}/>
    </View>
  )
}