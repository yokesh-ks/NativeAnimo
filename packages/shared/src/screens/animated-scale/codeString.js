export const codeString = `import React, { useRef, useState, useCallback } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const boxWidth = 100;

const useScaleAnimation = (
 initialValue = 1,
 finalValue = 1.5,
 animationConfig = { useNativeDriver: true }
) => {
 // Initialize the state value for isScaled and the scale Animated.Value with useRef
 const [isScaled, setIsScaled] = useState(false);
 const scale = useRef(new Animated.Value(initialValue)).current;

 // Memoize the animation function with useCallback
 const animate = useCallback(() => {
   // Calculate the toValue based on the current value of isScaled
   const toValue = isScaled ? initialValue : finalValue;

   // Animate the scale value to the toValue using Animated.spring, and start the animation.
   Animated.spring(scale, {
     toValue,
     ...animationConfig,
   }).start();

   // Update the isScaled state value with the inverse of its current value.
   setIsScaled((prevState) => !prevState);
 }, [isScaled, initialValue, finalValue, animationConfig]);

 // Return an array with the scale ref and the animate function.
 return [scale, animate];
};

export default function ScaleAnimated() {
  // Call the useScaleAnimation hook to get the scale ref and animate function.
 const [scale, animate] = useScaleAnimation();
  return (
   <View style={styles.container}>
     <Animated.View style={[styles.box, { transform: [{ scale }] }]} />
     <View style={styles.btn}>
       <Button onPress={animate} title={scale ? 'Scale out' : 'Scale in'} />
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   justifyContent: 'space-evenly',
 },
 box: {
   height: boxWidth,
   width: boxWidth,
   backgroundColor: '#D61355',
   alignSelf: 'center',
 },
 btn: {
   paddingHorizontal: 50,
 },
});`
