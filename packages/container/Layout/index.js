import { View } from 'react-native'
import React from 'react'

const Layout = (props) => {
  const { children, maxWidth = 720, hasPadding = true } = props
  return (
    <View
      style={{
        position: 'relative',
        alignItems: 'center',
        paddingHorizontal: hasPadding ? 24 : 0,
        height: '100%',
      }}
    >
      <View style={{ maxWidth, width: '100%' }}>{children}</View>
    </View>
  )
}

export default Layout
