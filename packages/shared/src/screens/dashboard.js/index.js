import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { getScreenTypeLayout } from '../../utils/screenLayout'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

const DashBoard = () => {
  const { width: windowWidth } = useWindowDimensions()
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

export default DashBoard
