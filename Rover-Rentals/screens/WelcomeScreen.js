import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'

const logo = require('../assets/Rover.png')
export default class WelcomeScreen extends React.Component 
{
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }
  render() 
  {
    return (
      <View style={styles.container}>
        <ImageBackground 
        source={{uri: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_5000,w_3333,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0217-buffalo-bayou-park-bicycle-path-audio-tour_hiowd8.jpg'}} 
        style={{width: '100%', height: '100%', opacity: 0.85}}
        >
      {/* App Logo */}
      <Image source={logo}
      style={styles.logoStyle}
      />
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
        </ImageBackground>
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
  logoStyle: 
  {
    flex: 1,
    width: 500,
    height: 600,
    alignContent: 'center',
    justifyContent: 'center',
    // resizeMode: 'contain',
    marginLeft: -24,
    bottom: 25,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#0B2545',
    padding: 15,
    bottom: 60,
    marginBottom: 30,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'GillSans',
    color: "#fff",
  },
})