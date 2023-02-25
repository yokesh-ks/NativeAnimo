import React, { useState } from 'react'
import DesktopView from './DesktopView'
import { useOpacityAnimation } from './useOpacityAnimation'

const AnimatedOpacity = () => {
  const [activePlayground, setActivePlayground] = useState(false)
  const [opacity, animate, visible] = useOpacityAnimation(true)
  return (
    <DesktopView
      activePlayground={activePlayground}
      setActivePlayground={setActivePlayground}
      opacity={opacity}
      animate={animate}
      visible={visible}
    />
  )
}

export default AnimatedOpacity
