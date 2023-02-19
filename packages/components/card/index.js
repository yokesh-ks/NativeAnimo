import { TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Card = (props) => {
  const { bgColor, borderRadius, style, children, onPress } = props
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        {
          backgroundColor: bgColor,
          borderRadius,
          width: '100%',
        },
        style,
      ])}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Card
