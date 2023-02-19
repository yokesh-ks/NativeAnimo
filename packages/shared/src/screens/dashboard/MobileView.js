import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MobileView = () => {
  return (
    <View>
      <Text>MobileView</Text>
      <TouchableOpacity onPress={() => navigation.navigate('animated-scale')}>
        <Text>Scale Animation </Text>
      </TouchableOpacity>
    </View>
  )
}

export default MobileView
