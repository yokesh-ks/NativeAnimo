import { View, useWindowDimensions } from 'react-native'
import React from 'react'
import { getScreenTypeLayout } from '../../utils/screenLayout'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

const data = [
  {
    order: 1,
    title: 'Scale Animation',
    navigationKey: 'animated-scale',
    subText: 'React Native - Animated',
    bgVariant: 'secondaryVariant3',
  },
]

const DashBoard = () => {
  const { width: windowWidth } = useWindowDimensions()
  return (
    <View>
      {getScreenTypeLayout({
        width: windowWidth,
        desktopComponent: <DesktopView data={data} />,
        tabletComponent: <DesktopView data={data} />,
        mobileComponent: <MobileView data={data} />,
      })}
    </View>
  )
}

export default DashBoard
