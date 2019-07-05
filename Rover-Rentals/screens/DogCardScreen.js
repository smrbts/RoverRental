import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'
import DogInfo from '../components/DogInfo'


export default class DogCardScreen extends React.Component 
{ 
  
  render() 
  {
    return (
      <View style={styles.container}>
        <DogInfo/>
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