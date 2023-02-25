import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Modal,
} from 'react-native'
import React from 'react'
import { DesktopContainer } from '@native-animo/container'
import { useTheme } from '@react-navigation/native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { Text, PlayGround } from '@native-animo/components'

const boxWidth = 100

const DesktopView = (props) => {
  const {
    codeString,
    scale,
    animate,
    isScaled,
    activePlayground,
    setActivePlayground,
  } = props
  const { colors } = useTheme()

  return (
    <>
      <DesktopContainer>
        <Text size="h2">Scale Animated</Text>
        <Text size="para">
          This code is a React Native component that displays a box that can be
          scaled in and out using a button. The component uses a custom hook
          called useScaleAnimation to encapsulate the logic for animating the
          scale of the box.
        </Text>

        <PlayGround handleLivePlayGround={() => setActivePlayground(true)}>
          <Animated.View
            style={[
              styles.box,
              { transform: [{ scale }] },
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
              {isScaled ? 'Scale out' : 'Scale in'}
            </Text>
          </TouchableOpacity>
        </PlayGround>
        <Text size="para">
          The useScaleAnimation hook takes three optional arguments: {'\n'}
          initialValue: The initial value of the scale animation. Defaults to 1.{' '}
          {'\n'}
          finalValue: The final value of the scale animation. Defaults to 1.5.
          {'\n'}
          animationConfig: An optional configuration object that can be used to
          configure the animation. This object is passed directly to the
          Animated.spring method. By default, useNativeDriver is set to true.
        </Text>
        <Text size="para">
          The useScaleAnimation hook returns an array that contains two
          elements: a scale ref and an animate function. The scale ref is a
          useRef reference to the Animated.Value that controls the scale of the
          box. The animate function is a useCallback memoized function that
          performs the animation. It calculates the new toValue based on the
          current value of isScaled, animates the scale value using
          Animated.spring, and updates the isScaled state value with the inverse
          of its current value.
        </Text>
        <SyntaxHighlighter
          language="javascript"
          highlighter={'prism' || 'hljs'}
        >
          {codeString}
        </SyntaxHighlighter>
      </DesktopContainer>
      <Modal visible={activePlayground} transparent>
        <View
          style={{
            alignItems: 'center',
            height: '100%',
            width: '100%',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              height: '100vh',
              backgroundColor: 'rgba(17, 25, 40, 0.7)',
              backdropFilter: 'blur(14px)',
            }}
          />
          <View
            style={{
              maxWidth: 820,
              width: '100%',
              height: 600,
              backgroundColor: '#fff',
              borderRadius: 16,
            }}
          >
            <View
              style={{
                width: '100%',
                height: 62,
                backgroundColor: colors.primary,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
              }}
            >
              <Text style={{ color: colors.onPrimary, fontSize: 20 }}>
                ScaleAnimated
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.onPrimary,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 8,
                }}
                onPress={() => setActivePlayground(false)}
              >
                <Text style={{ color: colors.primary, fontSize: 12 }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
            <iframe
              src="https://snack.expo.dev/@yokesh_ks/scale-animated?preview=true&platform=web&theme=dark"
              style={styles.iframe}
            ></iframe>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  iframe: {
    marginTop: -62,
    borderWidth: 0,
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  box: {
    height: boxWidth,
    width: boxWidth,
    alignSelf: 'center',
  },
})

export default DesktopView
