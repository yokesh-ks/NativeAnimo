import { View, Text } from 'react-native'
import React from 'react'
import { Card } from '@native-animo/components'
import { useNavigation, useTheme } from '@react-navigation/native'

const HomeCard = (props) => {
  const { item } = props
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <View>
      <Card
        onPress={() => navigation.navigate(item?.navigationKey)}
        bgColor={colors[item?.bgVariant]}
        style={{ width: 300, borderRadius: 8, padding: 16 }}
      >
        <Text
          style={{ color: colors.onNeutral, fontWeight: 600, fontSize: 20 }}
        >
          {item?.title}
        </Text>
        <Text
          style={{
            color: colors.onNeutral,
            fontWeight: 400,
            fontSize: 12,
            marginTop: 8,
          }}
        >
          {item?.subText}
        </Text>
      </Card>
    </View>
  )
}

export default HomeCard
