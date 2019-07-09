import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
export default class ProfileScreen extends React.Component 
{
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71A9F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
})