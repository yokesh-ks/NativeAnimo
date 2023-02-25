import { View, Text as NativeText } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Text = (props) => {
  const { colors } = useTheme()
  const { children, size, style } = props

  const getFontSize = () => {
    if (size === 'h2') {
      return 24
    }
    return 16
  }

  const getTextAlign = () => {
    if (size === 'para') {
      return 'justify'
    }
  }

  const getLineHeight = () => {
    if (size === 'para') {
      return 24
    }
  }

  return (
    <NativeText
      style={[
        {
          color: colors.textPrimary,
          fontSize: getFontSize(),
          textAlign: getTextAlign(),
          marginTop: size === 'para' ? 20 : 0,
          lineHeight: getLineHeight(),
        },
        style,
      ]}
    >
      {children}
    </NativeText>
  )
}

export default Text
