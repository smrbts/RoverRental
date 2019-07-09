import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Keyboard,
    Alert,
    Animated,
  } from 'react-native'
  import {
  Container,
  Item,
  Input,
  Icon
} from 'native-base'


// onPress={() => this._signInAsync()}
  const logo = require('../assets/Dog.png')
  export default class SignInScreen extends React.Component 
  {
    state = 
    {
      username: '',
      password: '',
      fadeIn: new Animated.Value(0),
      fadeOut: new Animated.Value(0),
      isHidden: false
    }

    onChangeText(key, value) 
    {
    this.setState({[key]: value})
    }

    _signInAsync = async () => 
    {
      await AsyncStorage.setItem('userToken', '123456789')
      this.props.navigation.navigate('App')
    }

    componentDidMount() 
    {
      this.fadeIn()
    }

    fadeIn() 
    {
      Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
      ).start()
      this.setState({isHidden: true})
    }

    fadeOut() 
    {
      Animated.timing(
      this.state.fadeOut,
      {
        toValue: 0, // 1 in the SignInScreen component
        duration: 700,
        useNativeDriver: true
      }
      ).start()
      this.setState({isHidden: false})
    }

    logIn = (e) =>
    {
      e.preventDefault()
      let userObj = {
        username: this.state.username.value,
        password: this.state.password.value
      }
      fetch('http://localhost:3000/profile',{
        method: 'GET',
        headers: 
        {
          'Accept': 'application/json',
          'Content-type' : 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res=>res.json())
      .then(data=>
      {
        console.log(token)
        if (data.msg) {
          console.log(data.msg)
        }
        else {
          localStorage.token = data.token
          this.props.navigation.navigate('App')
        }
      })
    }


    render() 
    {
    let { fadeOut, fadeIn, isHidden } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              {/* App Logo */}
            <View style={styles.logoContainer}>
              {
                isHidden ?
                <Animated.Image source={logo} style={{ opacity: fadeIn }}/>
                :
                <Animated.Image 
                  source={logo} 
                  style={{ opacity: fadeOut, width: 113.46, height: 117 }}/>
              }
            </View>
              <Container style={styles.infoContainer}>
                <View style={styles.container}>
                  <Item rounded style={styles.itemStyle}>
                    <Icon
                      active
                      name='person'
                      style={styles.iconStyle}
                    />
                    <Input
                      id='username'
                      style={styles.input}
                      placeholder='username'
                      placeholderTextColor='#adb4bc'
                      keyboardType={'email-address'}
                      returnKeyType='next'
                      autoCapitalize='none'
                      autoCorrect={false}
                      onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                      onChangeText={value => this.onChangeText('username', value)}
                    />
                  </Item>
                  <Item rounded style={styles.itemStyle}>
                    <Icon
                      active
                      name='lock'
                      style={styles.iconStyle}
                    />
                    <Input
                      id='password'
                      style={styles.input}
                      placeholder='Password'
                      placeholderTextColor='#adb4bc'
                      returnKeyType='go'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={true}
                      ref='SecondInput'
                      onChangeText={value => this.onChangeText('password', value)}
                      onFocus={() => this.fadeOut()}
                      onEndEditing={() => this.fadeIn()}
                    />
                  </Item>
                  <TouchableOpacity
                    onPress={(e) => this.logIn(e)}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </Container>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71A9F7',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FCFAFA',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#71A9F7',
  },
  itemStyle: {
    marginBottom: 20,
  },
  iconStyle: {
    color: '#FCFAFA',
    fontSize: 28,
    marginLeft: 15
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
    color: "#fff",
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 400,
    bottom: 180,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})