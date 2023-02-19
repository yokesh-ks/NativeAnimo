import { AppRegistry } from 'react-native'

import App from 'shared/src/App'

AppRegistry.registerComponent('NativeAnimo', () => App)
AppRegistry.runApplication('NativeAnimo', {
  rootTag: document.getElementById('root'),
})
