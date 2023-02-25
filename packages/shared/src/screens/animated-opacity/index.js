import React from 'react'
import DesktopView from './DesktopView'
import { useOpacityAnimation } from './useOpacityAnimation'

const AnimatedOpacity = () => {
  const [opacity, animate, visible] = useOpacityAnimation(true)
  return <DesktopView opacity={opacity} animate={animate} visible={visible} />
}

export default AnimatedOpacity
