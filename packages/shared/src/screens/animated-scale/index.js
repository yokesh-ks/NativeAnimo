import { View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { getScreenTypeLayout } from '../../utils/screenLayout'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import { codeString } from './codeString'
import { useScaleAnimation } from './useScaleAnimation'

const AnimatedScale = () => {
  const { width: windowWidth } = useWindowDimensions()
  const [scale, animate, isScaled] = useScaleAnimation()
  const [activePlayground, setActivePlayground] = useState(false)

  return (
    <View>
      {getScreenTypeLayout({
        width: windowWidth,
        desktopComponent: (
          <DesktopView
            codeString={codeString}
            scale={scale}
            animate={animate}
            isScaled={isScaled}
            activePlayground={activePlayground}
            setActivePlayground={setActivePlayground}
          />
        ),
        tabletComponent: (
          <DesktopView
            codeString={codeString}
            scale={scale}
            animate={animate}
            isScaled={isScaled}
            activePlayground={activePlayground}
            setActivePlayground={setActivePlayground}
          />
        ),
        mobileComponent: (
          <MobileView
            codeString={codeString}
            scale={scale}
            animate={animate}
            isScaled={isScaled}
            activePlayground={activePlayground}
            setActivePlayground={setActivePlayground}
          />
        ),
      })}
    </View>
  )
}

export default AnimatedScale
