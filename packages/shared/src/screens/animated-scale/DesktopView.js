import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'

const DesktopView = () => {
  const [snackID, setSnackId] = useState('scale-animated')
  const data = [{ displayName: 'Scale Animation', key: 'scale-animated' }]
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        <View
          style={{
            width: 240,
            backgroundColor: '#00337C',
            padding: 24,
            overflow: 'scroll',
          }}
        >
          {data.map((item) => (
            <TouchableOpacity onPress={() => setSnackId(item?.key)}>
              <Text style={{ color: '#ECECEC', marginBottom: 24 }}>
                {item?.displayName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <div
          data-snack-id={`@yokesh_ks/${snackID}`}
          data-snack-platform="web"
          data-snack-preview="true"
          data-snack-theme="light"
          style={styles.iframe}
        ></div>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iframe: {
    borderWidth: 0,
    height: 600,
    width: '100%',
  },
})

export default DesktopView
