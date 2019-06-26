import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

class LogoTitle extends React.Component
{
  render()
  {
    return(
      <Image
      source={require('./assets/Dog.png')}
      style={{width: 30, height: 30}}
      />
    )
  }
}



class HomeScreen extends React.Component 
{
  static navigationOptions = 
  {
    headerTitle: <LogoTitle />
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Text>Home Screen Test</Text>
        <Button
        title="Go to Details"
        onPress={() => {this.props.navigation.navigate('Details', 
        {
          itemId: 86,
          otherParam: 'test item here'
        })}} 
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component
{
  static navigationOptions = ({ navigation, navigationOptions }) => 
  {
    console.log(navigationOptions);
    return{
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: 
      {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  }

  render()
  {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', '460');

    return(
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
        title="Go to Details...again"
        onPress={() => this.props.navigation.push('Details', 
        {
          itemId: Math.floor(Math.random() * 100),
        })} 
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
         <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: 
    {
      headerStyle:{backgroundColor: '#AB6C38'}
    },
    headerTintColor: '#fff',
    headerTitleStyle: 
    {
      fontWeight: 'bold'
    }
  }
  )

const AppContainer = createAppContainer(RootStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D5363',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component
{
  render()
  {
    return <AppContainer />
  }
}
