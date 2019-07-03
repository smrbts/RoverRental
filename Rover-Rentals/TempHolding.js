import React, {Component} from 'react';
// import {View, Text, StyleSheet, Button} from 'react-native'
// import Icon from '@expo/vector-icons/Ionicons'
// import {
//   createSwitchNavigator, 
//   createAppContainer, 
//   createDrawerNavigator,
//   createBottomTabNavigator,
//   createStackNavigator,
// } from 'react-navigation'


// export default class App extends Component 
// {
//   render()
//   {
//     return(
//       <AppContainer/>
//     )
//   }
// }

// class WelcomeScreen extends Component 
// {
//   render() 
//   {
//     return (
//       <View style={styles.container}>
//         <Button title="Login" onPress={() => this.props.navigation.navigate('Dashboard')}/>
//         <Button title="Sign Up" onPress={() => alert('button pressed')}/>
//       </View>
//     );
//   }
// }

// class DashboardScreen extends Component 
// {
//   render() 
//   {
//     return (
//       <View style={styles.container}>
//         <Text>DashboardScreen</Text>
//       </View>
//     );
//   }
// }

// class Search extends Component 
// {
//   render() 
//   {
//     return (
//       <View style={styles.container}>
//         <Button title="Go to Details Screen" onPress={() => this.props.navigation.navigate('Detail')} />
//       </View>
//     );
//   }
// }

// class Profile extends Component 
// {
//   render() 
//   {
//     return (
//       <View style={styles.container}>
//         <Text>Profile</Text>
//       </View>
//     );
//   }
// }

// class Settings extends Component 
// {
//   render() 
//   {
//     return (
//       <View style={styles.container}>
//         <Text>Settings</Text>
//       </View>
//     );
//   }
// }

// const Detail = (props) => (
//   <View style={styles.container}>
//     <Text>Detail</Text>
//   </View>
// )

// const SearchStack = createStackNavigator({
//   Search:{
//     screen: Search,
//     navigationOptions: ({navigation}) => {
//       return{
//         headerTitle: 'Search',
//         headerLeft: (
//           <Icon style={{paddingLeft:10}}
//          onPress={() => navigation.openDrawer()}
//          name="md-menu" 
//          size={30}
//          />
//         )
//       }
//     }
//   },
//   Detail:{
//     screen: Detail
//   }
// },
// {
//   defaultNavigationOptions:{
//     gesturesEnabled: false
//   }
// })

// const ProfileStack = createStackNavigator({
//   Profile:{
//     screen: Profile,
//     navigationOptions: ({navigation}) => {
//       return{
//         headerTitle: 'Profile',
//         headerLeft: (
//           <Icon style={{paddingLeft:10}}
//          onPress={() => navigation.openDrawer()}
//          name="md-menu" 
//          size={30}
//          />
//         )
//       }
//     }
//   }
// })

// const SettingsStack = createStackNavigator({
//   Settings:{
//     screen: Settings,
//     navigationOptions: ({navigation}) => {
//       return{
//         headerTitle: 'Settings',
//         headerLeft: (
//           <Icon style={{paddingLeft:10}}
//          onPress={() => navigation.openDrawer()}
//          name="md-menu" 
//          size={30}
//          />
//         )
//       }
//     }
//   }
// })


// const DashboardTabNavigator = createBottomTabNavigator({
//   SearchStack,
//   ProfileStack,
//   SettingsStack
// },
// {
//   navigationOptions:({navigation}) => 
//   {
//     const {routeName} = navigation.state.routes[navigation.state.index]
//     return{
//       header: null,
//       headerTitle: routeName
//     }
//   }
// })

// const DashboardStackNavigator = createStackNavigator({
//   DashboardTabNavigator: DashboardTabNavigator
// },
// {
//   defaultNavigationOptions:({navigation}) => 
//   {
//     return{
//       headerLeft:(
//         <Icon style={{paddingLeft:10}}
//          onPress={() => navigation.openDrawer()}
//          name="md-menu" 
//          size={30}
//          />
//       )
//     }
//   }
// })

// const AppDrawerNavigator = createDrawerNavigator({
//   Dashboard:{screen: DashboardStackNavigator},
//   Search: SearchStack,
//   Profile: ProfileStack,
//   Settings: SettingsStack
// })


// const AppSwitchNavigator = createSwitchNavigator({
//   Welcome:
//   {
//     screen:WelcomeScreen
//   },
//   Dashboard:
//   {
//     screen:AppDrawerNavigator
//   }
// })

// const AppContainer = createAppContainer(AppSwitchNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C6E0FF',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
