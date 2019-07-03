import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableOpacity
  } from 'react-native'

  export default class SignInScreen extends React.Component 
  {
    _signInAsync = async () => 
    {
      await AsyncStorage.setItem('userToken', '123456789')
      this.props.navigation.navigate('App')
    }

    render() 
    {
      return (
        <View style={styles.container}>
         <TouchableOpacity
          onPress={() => this._signInAsync()}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Complete sign in</Text>
         </TouchableOpacity>
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
  })