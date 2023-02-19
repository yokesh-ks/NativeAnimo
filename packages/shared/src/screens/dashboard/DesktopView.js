import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Layout } from '@native-animo/container'
import { HomeCard } from '../../../components/card'

const DesktopView = (props) => {
  const { data } = props

  return (
    <View style={{ marginTop: 24 }}>
      <Layout>
        {data?.map((item) => (
          <HomeCard item={item} />
        ))}
      </Layout>
    </View>
  )
}

export default DesktopView
