import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import {
  createSwitchNavigator, 
  createAppContainer, 
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'


export default class App extends Component 
{
  render()
  {
    return(
      <AppContainer/>
    )
  }
}

class WelcomeScreen extends Component 
{
  render() 
  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Login" onPress={() => this.props.navigation.navigate('Dashboard')}/>
        <Button title="Sign Up" onPress={() => alert('button pressed')}/>
      </View>
    );
  }
}

class DashboardScreen extends Component 
{
  render() 
  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

class Search extends Component 
{
  render() 
  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Search</Text>
      </View>
    );
  }
}

class Profile extends Component 
{
  render() 
  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class Settings extends Component 
{
  render() 
  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}


const DashboardTabNavigator = createBottomTabNavigator({
  Search,
  Profile,
  Settings
},
{
  navigationOptions:({navigation}) => 
  {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: routeName
    }
  }
})

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
},
{
  defaultNavigationOptions:({navigation}) => 
  {
    return{
      headerLeft:(
        <Icon style={{paddingLeft:10}}
         onPress={() => navigation.openDrawer()}
         name="md-menu" 
         size={30}
         />
      )
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{
    screen: DashboardStackNavigator
  }
})


const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Dashboard:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppSwitchNavigator);

// const styles = Stylesheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })














































