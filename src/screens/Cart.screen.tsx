import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HeaderBar from '../components/Layout/HeaderBar/HeaderBar'
import { COLORS, SPACING } from '../utils/theme/theme'
import { useStore } from '../utils/store/store'
import { CartProductCard } from '../components/Materials/cards/CartProductCard/Card'
import { FloatChart } from '../components/Layout/FloatChart/FloatChart'

export default function CartScreen({ navigation }: any) {
  const products = useStore((state: any) => state.CartList);
  const totalPrice = useStore((state: any) => state.CartPrice);

  return (
    <View style={{ position: 'relative' }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 190
        }}
        style={styles.default}
      >
        <HeaderBar />
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: SPACING.space_20,
          paddingHorizontal: SPACING.space_30
        }}>
          {products.map((item: any) => (
            <CartProductCard product={item} />
          ))}
        </View>
      </ScrollView>
      <View style={{ transform: [{ translateY: -70 }] }}>
        <FloatChart
          price={totalPrice}
          priceLabel='Payment'
          btnIconName=''
          btnText='$ Pay'
          btnAction={() => {
            navigation.push('Payment')
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.primaryBlackHex,
  }
})