import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { 
  createAppContainer,
  createSwitchNavigator, 
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import Icon from '@expo/vector-icons/Ionicons'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import SignInScreen from './screens/SignInScreen'
import ForgetPasswordScreen from './screens/ForgetPasswordScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import ProfileScreen from './screens/ProfileScreen'
import DogCardScreen from './screens/DogCardScreen'

const WalkURL = 'http://localhost:3000/walks'
const DogURL = 'http://localhost:3000/dogs'

export default class App extends React.Component 
{
  constructor()
  {
    super()
    this.state = 
    {
      dogs: [],
      walks: [],
      isLoaded: false,
    }
  }
  render()
  {
    return(
      <AppContainer/>
    )
  }
}

// Configurations and options for the AppTabNavigator
const configurations = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" style={{fontSize: 26, color: tintColor}} />
      )
    }
  },
  Dogs: {
    screen: DogCardScreen,
    navigationOptions: {
      tabBarLabel: 'Dogs',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-paw" style={{fontSize: 26, color: tintColor}} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" style={{fontSize: 26, color: tintColor}} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" style={{fontSize: 26, color: tintColor}} />
      )
    }
  },
}

const options = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#fff',
    inactiveTintColor: '#a8abaf',
    style: {
      backgroundColor: '#134074',
      borderTopWidth: 1,
      borderTopColor: '#ff99',//'#667292',
      paddingBottom: 0
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 12,
      marginTop:12,
    },
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
    
  }
}
// New bottom App tabs design
const AppTabNavigator = createMaterialTopTabNavigator(configurations, options)
// Making the common header title dynamic in AppTabNavigator
AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } =   navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}





const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    // Set the header icon
    navigationOptions: ({navigation}) => ({
      headerStyle:{backgroundColor: '#8DA9C4'},
      headerTitleStyle:{fontWeight: 'bold', fontSize: 21, fontFamily: 'GillSans', color: '#fff'},
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10,}}>
            <Icon name='md-menu' size={24} color='#fff'/>
          </View>
        </TouchableOpacity>
      )
    })
  }
})


// App stack for the drawer
const AppDrawerNavigator = createDrawerNavigator({
  RoverRentals: AppStackNavigator,
  Home: HomeScreen,
  Dogs: DogCardScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen
})

// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: 
  {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to RoverRentals!`, // for the header screen
      headerStyle:{backgroundColor: '#8DA9C4'},
      headerTitleStyle:{fontWeight: 'bold', fontSize: 21, fontFamily: 'GillSans', color: '#fff'},
      headerBackTitle: 'Back',
      headerBackTitleStyle: {color: '#fff'}
    }),
  },
  SignUp: 
  {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
      headerStyle:{backgroundColor: '#8DA9C4'},
      headerTitleStyle:{fontWeight: 'bold', fontSize: 15, fontFamily: 'GillSans', color: '#fff'},
      headerBackTitle: 'Back',
      headerBackTitleStyle: {color: '#fff'}
    }),
  },
  SignIn: 
  {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
      headerStyle:{backgroundColor: '#8DA9C4'},
      headerTitleStyle:{fontWeight: 'bold', fontSize: 15, fontFamily: 'GillSans', color: '#fff'},
      headerBackTitle: 'Back',
      headerBackTitleStyle: {color: '#fff'}
    }),
  },
  ForgetPassword: 
  {
    screen: ForgetPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
      headerStyle:{backgroundColor: '#8DA9C4'},
      headerTitleStyle:{fontWeight: 'bold', fontSize: 15, fontFamily: 'GillSans', color: '#fff'},
      headerBackTitle: 'Back',
      headerBackTitleStyle: {color: '#fff'}
    }),
  },
})


const AppSwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator, // Auth stack
  App: AppDrawerNavigator, // the App stack
},
{
  initialRouteName: 'AuthLoading'
})

const AppContainer = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

