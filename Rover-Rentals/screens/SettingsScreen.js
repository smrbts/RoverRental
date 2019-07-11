import React from 'react'
import {
  AsyncStorage,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Image,
  Alert
} from 'react-native'
import {
  Container,
  Item,
  Input,
  Icon,
} from 'native-base'

// onPress={() => this._signOutAsync()}
const logo = require('../assets/Rover.png')
export default class SettingsScreen extends React.Component 
{
  state = {
    password1: '',
    password2: '',
  }
  onChangeText(key, value) 
  {
    this.setState({[key]: value})
  }

    _signOutAsync = async () =>
    {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Auth') 
    }
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar/>
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {/*Infos*/}
            <Container style={styles.infoContainer}>
              <View style={styles.container}>
                <View 
                  style={
                    [styles.buttonStyle, {borderRadius: 4, marginBottom: 20}]
                  }>
                  <Text style={styles.buttonText}>Change password</Text>              
                </View>
                {/* Old password */}
                <Item rounded style={styles.itemStyle}>
                  <Icon
                    active
                    name='lock'
                    style={styles.iconStyle}
                  />
                  <Input
                    style={styles.input}
                    placeholder='Old password'
                    placeholderTextColor='#adb4bc'
                    returnKeyType='next'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onSubmitEditing={(event) => { this.refs.SecondInput._root.focus()}}
                    onChangeText={value => this.onChangeText('password1', value)}
                  />
                </Item>    
                {/* New password */}              
                <Item rounded style={styles.itemStyle}>
                  <Icon
                    active
                    name='lock'
                    style={styles.iconStyle}
                  />
                  <Input
                    style={styles.input}
                    placeholder='New password'
                    placeholderTextColor='#adb4bc'
                    returnKeyType='go'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    ref='SecondInput'
                    onChangeText={value => this.onChangeText('password2', value)}
                  />
                </Item>
                <TouchableOpacity
                  style={styles.buttonStyle}>
                  <Text style={styles.buttonText}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <View 
                  style={
                    {
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      paddingBottom: 100
                    }
                  }
                 />
                <TouchableOpacity
                  style={
                    [styles.buttonStyle, 
                      {
                        flexDirection: 'row', 
                        justifyContent: 'center'
                      }
                    ]
                  }
                  onPress={() => this._signOutAsync()}>
                  <Icon name='md-power' style={{color: '#fff', paddingRight: 10}}/>
                  <Text style={styles.buttonText}>
                    Sign out
                  </Text>
                </TouchableOpacity>
              </View>
            </Container>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
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
    bottom: 100,
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
    backgroundColor: '#8DA9C4',
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