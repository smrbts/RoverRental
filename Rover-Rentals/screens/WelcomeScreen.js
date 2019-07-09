import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

const logo = require('../assets/Dog.png')
export default class WelcomeScreen extends React.Component 
{
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }
  render() 
  {
    return (
      <View style={styles.container}>
      {/* App Logo */}
      <Image source={logo}/>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('SignUp')}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('SignIn')}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('ForgetPassword')}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Forget password ?</Text>
        </TouchableOpacity>
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
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#0B2545',
    padding: 14,
    marginBottom: 20,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'GillSans',
    color: "#fff",
  },
})