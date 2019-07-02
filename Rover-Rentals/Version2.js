
// import React from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { 
//   createAppContainer,
//   createSwitchNavigator, 
//   createStackNavigator,
//   createDrawerNavigator,
//   createBottomTabNavigator
// } from 'react-navigation'
// import Icon from '@expo/vector-icons/Ionicons'
// import AuthLoadingScreen from './screens/AuthLoadingScreen'
// import WelcomeScreen from './screens/WelcomeScreen'
// import SignUpScreen from './screens/SignUpScreen'
// import SignInScreen from './screens/SignInScreen'
// import ForgetPasswordScreen from './screens/ForgetPasswordScreen'
// import HomeScreen from './screens/HomeScreen'
// import SettingsScreen from './screens/SettingsScreen'
// import ProfileScreen from './screens/ProfileScreen'

// export default class App extends React.Component 
// {
//   render()
//   {
//     return(
//       <AppContainer/>
//     )
//   }
// }

// // Bottom Auth tabs
// const AppTabNavigator = createBottomTabNavigator({
//   Home: 
//   {
//     screen: HomeScreen
//   },
//   Profile: 
//   {
//     screen: ProfileScreen
//   },
//   Settings: 
//   {
//     screen: SettingsScreen
//   }
// })



// const AppStackNavigator = createStackNavigator({
//   AppTabNavigator: {
//     screen: AppTabNavigator,
//     // Set the header icon
//     navigationOptions: ({navigation}) => ({
//       headerLeft: (
//         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//           <View style={{paddingHorizontal: 10}}>
//             <Icon name='md-menu' size={24}/>
//           </View>
//         </TouchableOpacity>
//       )
//     })
//   }
// })


// // App stack for the drawer
// const AppDrawerNavigator = createDrawerNavigator({
//   Tabs: AppStackNavigator,
//   Home: HomeScreen,
//   Profile: ProfileScreen,
//   Settings: SettingsScreen
// })

// // Auth stack
// const AuthStackNavigator = createStackNavigator({
//   Welcome: 
//   {
//     screen: WelcomeScreen,
//     navigationOptions: () => ({
//       title: `Welcome to RoverRentals`, // for the header screen
//       headerBackTitle: 'Back'
//     }),
//   },
//   SignUp: 
//   {
//     screen: SignUpScreen,
//     navigationOptions: () => ({
//       title: `Create a new account`,
//     }),
//   },
//   SignIn: 
//   {
//     screen: SignInScreen,
//     navigationOptions: () => ({
//       title: `Log in to your account`,
//     }),
//   },
//   ForgetPassword: 
//   {
//     screen: ForgetPasswordScreen,
//     navigationOptions: () => ({
//       title: `Create a new password`,
//     }),
//   },
// })


// const AppSwitchNavigator = createSwitchNavigator({
//   // screen: name
//   AuthLoading: AuthLoadingScreen,
//   Auth: AuthStackNavigator, // Auth stack
//   App: AppDrawerNavigator, // the App stack
// })

// const AppContainer = createAppContainer(AppSwitchNavigator)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

