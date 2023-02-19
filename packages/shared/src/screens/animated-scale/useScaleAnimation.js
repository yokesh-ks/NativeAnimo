import React, { useState, useCallback, useRef } from 'react'
import { Animated } from 'react-native'
export const useScaleAnimation = (
  initialValue = 1,
  finalValue = 1.5,
  animationConfig = { useNativeDriver: true },
) => {
  // Initialize the state value for isScaled and the scale Animated.Value with useRef
  const [isScaled, setIsScaled] = useState(false)
  const scale = useRef(new Animated.Value(initialValue)).current

  // Memoize the animation function with useCallback
  const animate = useCallback(() => {
    // Calculate the toValue based on the current value of isScaled
    const toValue = isScaled ? initialValue : finalValue

    // Animate the scale value to the toValue using Animated.spring, and start the animation.
    Animated.spring(scale, {
      toValue,
      ...animationConfig,
    }).start()

    // Update the isScaled state value with the inverse of its current value.
    setIsScaled((prevState) => !prevState)
  }, [isScaled, initialValue, finalValue, animationConfig])

  // Return an array with the scale ref and the animate function.
  return [scale, animate, isScaled]
}
