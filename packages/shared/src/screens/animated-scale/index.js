import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { getScreenTypeLayout } from '../../utils/screenLayout'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import { useTheme } from '@react-navigation/native'

const AnimatedScale = () => {
  const { width: windowWidth } = useWindowDimensions()
  const { colors } = useTheme()

  console.log(colors)
  return (
    <View>
      {getScreenTypeLayout({
        width: windowWidth,
        desktopComponent: <DesktopView />,
        tabletComponent: <DesktopView />,
        mobileComponent: <MobileView />,
      })}
    </View>
  )
}

export default AnimatedScale
