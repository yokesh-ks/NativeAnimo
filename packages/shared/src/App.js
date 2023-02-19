import React, { useRef } from 'react'
import AppNavigator from './navigation'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { navigationRef } from './navigation/RootNavigator'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { DarkTheme as DarkThemeColors } from '@edvnz/theme'
import { View, useWindowDimensions } from 'react-native'

const App = () => {
  const routeNameRef = useRef()
  const height = useWindowDimensions().height

  const customDarkTheme = {
    ...DarkTheme.colors,
    ...DarkThemeColors,
    colors: {
      ...DarkTheme.colors,
      ...DarkThemeColors.colors,
    },
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer
        theme={customDarkTheme}
        ref={navigationRef}
        // eslint-disable-next-line no-return-assign
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={async () => {
          const currentRouteName = navigationRef.current.getCurrentRoute().name
          routeNameRef.current = currentRouteName
        }}
        linking={{ enabled: true }}
      >
        <View style={{ height: height }}>
          <AppNavigator />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
