/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/Detail.screen';
import HomeScreen from './src/screens/Home.screen';
import PaymentScreen from './src/screens/Payment.screen';
import OrderHistoryScreen from './src/screens/OrderHistory.screen';
import CartScreen from './src/screens/Cart.screen';
import FavoritesScreen from './src/screens/Favorites.screen';
import TabNavigator from './src/components/Layout/TabNavigators/TabNavigator';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Tab' component={TabNavigator} options={{ animation: 'slide_from_bottom'}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ animation: 'slide_from_right'}} />
        <Stack.Screen name='Details' component={DetailScreen} options={{ animation: 'slide_from_bottom'}} />
        <Stack.Screen name='Payment' component={PaymentScreen} options={{ animation: 'slide_from_right'}} />
        <Stack.Screen name='OrderHistory' component={OrderHistoryScreen} options={{ animation: 'slide_from_right'}} />
        <Stack.Screen name='Cart' component={CartScreen} options={{ animation: 'slide_from_right'}} />
        <Stack.Screen name='FavoritesHistory' component={FavoritesScreen} options={{ animation: 'slide_from_right'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

