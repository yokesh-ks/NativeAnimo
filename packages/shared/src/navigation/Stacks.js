import React from 'react'
import DashBoard from '../screens/dashboard'
import AnimatedScale from '../screens/animated-scale'

export const Stacks = (Stack) => {
  return (
    <Stack.Group initialRouteName="home">
      <Stack.Screen name="home">
        {(screenProps) => <DashBoard {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="animated-scale">
        {(screenProps) => <AnimatedScale {...screenProps} />}
      </Stack.Screen>
    </Stack.Group>
  )
}
