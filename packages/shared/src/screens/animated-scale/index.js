import React, { useState } from 'react'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import { codeString } from './codeString'
import { useScaleAnimation } from './useScaleAnimation'
import { withLayoutView } from '../../utils/screenLayout'

const AnimatedScale = () => {
  const [scale, animate, isScaled] = useScaleAnimation()
  const [activePlayground, setActivePlayground] = useState(false)

  const viewProps = {
    activePlayground,
    animate,
    codeString,
    isScaled,
    scale,
    setActivePlayground,
  }

  const LayoutView = withLayoutView(DesktopView, DesktopView, MobileView)

  return <LayoutView {...viewProps} />
}

export default AnimatedScale
