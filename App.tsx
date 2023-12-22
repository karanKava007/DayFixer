import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './screens/Splash'
import { NavigationContainer } from '@react-navigation/native'
import AppBottomRoute from './routes/app.navigation'

export default function App() {
  return (
    <NavigationContainer>
      <AppBottomRoute/>
    </NavigationContainer>
  )
}