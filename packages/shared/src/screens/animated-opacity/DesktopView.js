import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import { DesktopContainer } from '@native-animo/container'
import { useTheme } from '@react-navigation/native'
import { codeString } from './codeString'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { hookString } from './hookString'
import { Text, PlayGround } from '@native-animo/components'

const boxWidth = 100

const DesktopView = (props) => {
  const { opacity, visible, animate } = props
  const { colors } = useTheme()
  return (
    <DesktopContainer>
      <Text size="h2">Opacity Animated</Text>
      <Text size="para">
        The code is a React Native component that animates the opacity of a box
        when a button is pressed. It also includes a custom hook to handle the
        animation logic.
      </Text>
      <PlayGround>
        <Animated.View
          style={[
            styles.box,
            { opacity },
            { backgroundColor: colors.secondaryVariant2 },
          ]}
        />
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            paddingHorizontal: 36,
            paddingVertical: 8,
            borderRadius: 8,
          }}
          onPress={animate}
        >
          <Text style={{ color: colors.onPrimary, fontSize: 16 }}>
            {visible ? 'Opacity out' : 'Opacity in'}
          </Text>
        </TouchableOpacity>
      </PlayGround>
      <Text size="para">
        The useAnimateOpacity custom hook is defined to handle the animation
        logic. It takes an initialValue parameter that determines whether the
        box is initially visible or not. The hook creates a ref for the animated
        value and a state variable called visible to toggle the visibility of
        the box.
      </Text>
      <SyntaxHighlighter language="javascript" highlighter={'prism' || 'hljs'}>
        {hookString}
      </SyntaxHighlighter>
      <Text size="para">
        The animateOpacity function is defined inside the useAnimateOpacity hook
        to handle the animation. It uses the Animated.spring method to animate
        the opacity of the box from 1 to 0 (if visible is true) or from 0 to 1
        (if visible is false). It then toggles the visible state variable when
        the animation completes.
      </Text>
      <Text size="para">
        The useAnimateOpacity hook returns an array of [opacity, animateOpacity,
        visible], which includes the opacity ref, the animateOpacity function,
        and the visible state variable.
      </Text>
      <Text size="para">
        The OpacityAnimated component calls the useAnimateOpacity hook to get
        the opacity, visible, and animateOpacity values. It uses the opacity ref
        to set the opacity of the box, and the visible state variable to
        determine the text of the button ('Opacity out' or 'Opacity in'). The
        animateOpacity function is called when the button is pressed to trigger
        the animation.
      </Text>
      <SyntaxHighlighter language="javascript" highlighter={'prism' || 'hljs'}>
        {codeString}
      </SyntaxHighlighter>
    </DesktopContainer>
  )
}

const styles = StyleSheet.create({
  box: {
    height: boxWidth,
    width: boxWidth,
    alignSelf: 'center',
  },
})

export default DesktopView
