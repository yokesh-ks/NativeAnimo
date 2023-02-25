import { useWindowDimensions } from 'react-native'
import React from 'react'

export function getScreenTypeLayout({
  width,
  desktopComponent,
  tabletComponent,
  mobileComponent,
}) {
  if (width > 850) {
    return desktopComponent
  } else if (width > 600) {
    return tabletComponent
  } else {
    return mobileComponent
  }
}

export const withLayoutView = (
  DesktopComponent,
  TabletComponent,
  MobileComponent,
) => {
  const LayoutView = (props) => {
    const { width } = useWindowDimensions()

    if (width > 850) {
      return <DesktopComponent {...props} />
    } else if (width > 600) {
      return <TabletComponent {...props} />
    } else {
      return <MobileComponent {...props} />
    }
  }

  return LayoutView
}
