import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import React from 'react'

const PlayGround = (props) => {
  const { children, handleLivePlayGround } = props
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.playGround,
        { backgroundColor: colors.backgroundSurface2 },
      ]}
    >
      {handleLivePlayGround ? (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            top: 20,
            backgroundColor: colors.onPrimary,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 8,
          }}
          onPress={() => handleLivePlayGround()}
        >
          <Text style={{ color: colors.primary, fontSize: 12 }}>
            Live PlayGround
          </Text>
        </TouchableOpacity>
      ) : null}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  playGround: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 68,
    marginVertical: 20,
  },
})

export default PlayGround
