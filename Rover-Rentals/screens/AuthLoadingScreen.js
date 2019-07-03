import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'

export default class AuthLoadingScreen extends React.Component 
{

  constructor(props)
  {
    super(props)
    this._bootstrapAsync()
  }
  // componentDidMount = async () => 
  // {
  //   await this.loadApp()
  // }

  _bootstrapAsync = async () => 
  {
   const userToken = await AsyncStorage.getItem('userToken')
   console.log(userToken)
   this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() 
  {
    
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#086788',
    alignItems: 'center',
    justifyContent: 'center',
  },
})