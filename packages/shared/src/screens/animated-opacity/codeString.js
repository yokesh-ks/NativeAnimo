export const codeString = `
import React, { useRef, useState } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const BOX_WIDTH = 150;

// Define a custom hook for animating opacity
function useAnimateOpacity(initialValue) {
  // Create a ref for the animated value
  const opacity = useRef(new Animated.Value(initialValue)).current;
  // Create a state variable to toggle the visibility of the box
  const [visible, setVisible] = useState(initialValue);

  // Define a function to animate the opacity
  const animateOpacity = () => {
    Animated.spring(opacity, {
      toValue: visible ? 0 : 1,
      useNativeDriver: true,
    }).start(() => setVisible(!visible));
  };

  // Return the animated value, the animateOpacity function and the visibility state variable
  return [opacity, animateOpacity, visible];
}

export default function OpacityAnimated() {
  // Call the useAnimateOpacity hook to get the animated value, the animateOpacity function and the visibility state variable
  const [opacity, animateOpacity, visible] = useAnimateOpacity(true);
  const btnTitle = visible ? 'Opacity out' : 'Opacity in';

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity }]} />
      <View style={styles.btn}>
        <Button onPress={animateOpacity} title={btnTitle} />
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
    height: BOX_WIDTH,
    width: BOX_WIDTH,
    backgroundColor: '#34aaaa',
    alignSelf: 'center',
  },
  btn: {
    paddingHorizontal: 50,
  },
});

`
