import React from 'react'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import { useOpacityAnimation } from './useOpacityAnimation'
import { withLayoutView } from '../../utils/screenLayout'

const AnimatedOpacity = () => {
  const [opacity, animate, visible] = useOpacityAnimation(true)

  const viewProps = {
    opacity,
    animate,
    visible,
  }

  const LayoutView = withLayoutView(DesktopView, DesktopView, MobileView)

  return <LayoutView {...viewProps} />
}

export default AnimatedOpacity
