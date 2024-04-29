import { View,  StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../utils/theme/theme';
import { HeaderDetail } from '../components/Screens/detail/Header/Header';
import { BannerDetails } from '../components/Screens/detail/Banner/Banner';
import { ProductDetails } from '../components/Screens/detail/ProductDetails/Details';
import { FloatChart } from '../components/Layout/FloatChart/FloatChart';
import { useStore } from '../utils/store/store';

export default function DetailScreen({ navigation, route }: any) {
  const product = route.params.data;
  const addToChart = useStore((state: any) => state.addToCart);
  const [select, setSelect] = useState(0);

  const handleBackPage = () => navigation.pop();

  return (
    <View style={{ height: '100%', position: 'relative' }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100
        }}
        style={styles.default}
      >
        <HeaderDetail id={product.id} backHandler={handleBackPage} />
        <BannerDetails product={product} />
        <ProductDetails
          product={product}
          select={select}
          setSelect={(index: number) => {
            setSelect(index)
          }}
        />
      </ScrollView>
      <FloatChart
        price={product.prices[select].price}
        priceLabel='Price'
        btnText='Add to cart'
        btnAction={() => {
          addToChart(
            product,
            select
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.primaryBlackHex,
  }
})