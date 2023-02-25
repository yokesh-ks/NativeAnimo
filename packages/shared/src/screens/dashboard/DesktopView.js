import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Layout } from '@native-animo/container'
import { HomeCard } from '../../../components/card'

const DesktopView = (props) => {
  const { data } = props

  return (
    <View style={{ marginTop: 24 }}>
      <Layout>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {data?.map((item) => (
            <View style={{ marginRight: 20, marginBottom: 20 }}>
              <HomeCard item={item} />
            </View>
          ))}
        </View>
      </Layout>
    </View>
  )
}

export default DesktopView
