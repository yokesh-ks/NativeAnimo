import React, { Suspense } from 'react'
import { HomeStackNavigator } from './StackNavigator'
import { useTheme } from '@react-navigation/native'
import { View } from 'react-native'

const AppNavigator = () => {
  const { colors } = useTheme()
  return (
    <Suspense>
      <View style={{ width: '100%', backgroundColor: 'red', flex: 1 }}>
        <HomeStackNavigator />
      </View>
    </Suspense>
  )
}

export default AppNavigator
