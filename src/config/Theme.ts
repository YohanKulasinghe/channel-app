import { Platform } from 'react-native'

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#2266AA',
  },
  headerTintColor: '#fff',
  ...(Platform.OS === 'ios'
    ? {
        headerTitleStyle: {
          fontFamily: 'NunitoSans-Bold',
          fontSize: 20,
          flex: 1,
          textAlign: 'left',
        },
      }
    : {}),
} as any

const Theme = {
  accent: '#4E9CD0',
  darkPrimary: '#194D81',
  tabIconSize: 24,
  navigationOptions,
  flatNavigationOptions: {
    ...navigationOptions,
    headerStyle: {
      ...navigationOptions.headerStyle,
      borderBottomWidth: 0,
      elevation: 0,
    },
  },
  primary: '#2266AA',
  background: '#F3F5FA',
}

export default Theme
