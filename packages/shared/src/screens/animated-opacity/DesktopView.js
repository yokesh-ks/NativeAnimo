import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native'
import React from 'react'
import { Layout } from '@native-animo/container'
import { useTheme } from '@react-navigation/native'
import { codeString } from './codeString'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { hookString } from './hookString'

const boxWidth = 100

const DesktopView = (props) => {
  const { activePlayground, setActivePlayground, opacity, visible, animate } =
    props
  const { colors } = useTheme()
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Layout>
          <Text style={{ color: colors.textPrimary, fontSize: 24 }}>
            Opacity Animated
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              textAlign: 'justify',
            }}
          >
            The code is a React Native component that animates the opacity of a
            box when a button is pressed. It also includes a custom hook to
            handle the animation logic.
          </Text>
          <View
            style={[
              styles.playGround,
              { backgroundColor: colors.backgroundSurface2 },
            ]}
          >
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
          </View>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              textAlign: 'justify',
            }}
          >
            The useAnimateOpacity custom hook is defined to handle the animation
            logic. It takes an initialValue parameter that determines whether
            the box is initially visible or not. The hook creates a ref for the
            animated value and a state variable called visible to toggle the
            visibility of the box.
          </Text>
          <SyntaxHighlighter
            language="javascript"
            highlighter={'prism' || 'hljs'}
          >
            {hookString}
          </SyntaxHighlighter>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              textAlign: 'justify',
            }}
          >
            The animateOpacity function is defined inside the useAnimateOpacity
            hook to handle the animation. It uses the Animated.spring method to
            animate the opacity of the box from 1 to 0 (if visible is true) or
            from 0 to 1 (if visible is false). It then toggles the visible state
            variable when the animation completes.
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              textAlign: 'justify',
            }}
          >
            The useAnimateOpacity hook returns an array of [opacity,
            animateOpacity, visible], which includes the opacity ref, the
            animateOpacity function, and the visible state variable.
          </Text>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: 16,
              marginTop: 20,
              lineHeight: 24,
              textAlign: 'justify',
            }}
          >
            The OpacityAnimated component calls the useAnimateOpacity hook to
            get the opacity, visible, and animateOpacity values. It uses the
            opacity ref to set the opacity of the box, and the visible state
            variable to determine the text of the button ('Opacity out' or
            'Opacity in'). The animateOpacity function is called when the button
            is pressed to trigger the animation.
          </Text>
          <SyntaxHighlighter
            language="javascript"
            highlighter={'prism' || 'hljs'}
          >
            {codeString}
          </SyntaxHighlighter>
        </Layout>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
  },
  iframe: {
    marginTop: -62,
    borderWidth: 0,
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  playGround: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 68,
    marginVertical: 20,
  },
  box: {
    height: boxWidth,
    width: boxWidth,
    alignSelf: 'center',
  },
})

export default DesktopView
