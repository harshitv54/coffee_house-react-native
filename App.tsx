import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screens/LoginScreen'
import DetailScreen from './src/screens/DetailScreen'
import PaymentScreen from './src/screens/PaymentScreen'
import TabNavigator from './src/navigators/TabNavigator'
import FavoritesScreen from './src/screens/FavouritesScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import SplashScreen from './src/screens/SplashScreen';
import PaymentMethodsScreen from './src/screens/PaymentMethodsScreen'

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen 
        name="SpalshScreen"
        component={SplashScreen} 
        options={{animation: 'slide_from_left'}}></stack.Screen>
        <stack.Screen 
        name="Login"
        component={LoginScreen} 
        options={{animation: 'slide_from_left'}}></stack.Screen>
        <stack.Screen 
        name="Tab" 
        component={TabNavigator} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
        <stack.Screen 
        name="Details" 
        component={DetailScreen} 
        options={{animation: 'slide_from_bottom'}}></stack.Screen>
        <stack.Screen 
        name="Payments" 
        component={PaymentScreen} 
        options={{animation: 'slide_from_left'}}></stack.Screen>
        <stack.Screen 
        name="PaymentsMethod" 
        component={PaymentMethodsScreen} 
        options={{animation: 'slide_from_left'}}></stack.Screen>
        <stack.Screen 
        name="Favorite" 
        component={FavoritesScreen} 
        options={{animation: 'slide_from_left'}}></stack.Screen>
        <stack.Screen 
        name="History" 
        component={OrderHistoryScreen} 
        options={{animation: 'slide_from_left'}}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App