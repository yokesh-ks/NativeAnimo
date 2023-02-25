export const hookString = `
export const useOpacityAnimation = (initialValue) => {
    // Create a ref for the animated value
    const opacity = useRef(new Animated.Value(1)).current
    // Create a state variable to toggle the visibility of the box
    const [visible, setVisible] = useState(initialValue)
  
    // Define a function to animate the opacity
    const animate = () => {
      Animated.spring(opacity, {
        toValue: visible ? 0 : 1,
        useNativeDriver: true,
      }).start(() => setVisible(!visible))
    }
  
    // Return the animated value, the animateOpacity function and the visibility state variable
    return [opacity, animate, visible]
  }
`
