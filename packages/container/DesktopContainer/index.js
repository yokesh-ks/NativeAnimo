import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../Layout'
import { useTheme } from '@react-navigation/native'

const DesktopContainer = (props) => {
  const { children } = props
  const { colors } = useTheme()
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Layout>{children}</Layout>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
  },
})

export default DesktopContainer
