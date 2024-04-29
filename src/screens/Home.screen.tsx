import { ScrollView, StyleSheet, View } from 'react-native'
import { COLORS } from '../utils/theme/theme'
import HeaderBar from '../components/Layout/HeaderBar/HeaderBar'
import Banner from '../components/Screens/home/Banner/Banner'
import Products from '../components/Screens/home/Products/Products'
import { Footer } from '../components/Screens/home/FloatChart/FloatChart'

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ position: 'relative' }}>
        <ScrollView
        contentContainerStyle={{
          paddingBottom: 160
        }}
        style={styles.default}
      >
        <HeaderBar />
        <Banner />
        <Products navigation={navigation} />

      </ScrollView>
      <Footer navigation={navigation} />
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