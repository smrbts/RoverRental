import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'

export default class HomeScreen extends React.Component 
{ 
  render() 
  {
    return (
      <View style={styles.container}>
       <Text>Home Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06AED5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    textDecorationColor: "white"
  }
})