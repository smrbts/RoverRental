import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native'
import DogCardScreen from './DogCardScreen'
import DogInfo from '../components/DogInfo'
import WalkScreen from '../components/WalkScreen'
import {Icon} from 'native-base'
import { Card, ListItem, Button, Image, Text } from 'react-native-elements'








export default class HomeScreen extends React.Component 
{ 

  constructor(props)
  {
    super(props)
    this.state=
    {
      walks: [],
      isLoaded: false,
      refreshing: false
    }
  }


fetchWalkDogs = () => 
{
  fetch("http://localhost:3000/walks")
  .then(res => res.json())
  .then(data => 
    {
      
      let walkDog = data
      this.setState(
        {
          walks: walkDog,
          isLoaded: true,
          refreshing: false
        })
    })
}

  componentDidMount = () => 
  {
    this.fetchWalkDogs()
  }

  _onRefresh = () => 
  {
    this.setState({
      refreshing: true
    })
    this.fetchWalkDogs()
  }

  static navigationOptions = 
  {
    drawerIcon: ({tintColor}) => (
      <Icon name="home" style={{fontSize:24, color:tintColor}}/>
    )
  }
  render() 
  {
    return (
      <View style={styles.container}>
        <Text h4 style={{fontFamily: 'GillSans', color: '#fff'}}> View Your Scheduled Walks:</Text>
          <ScrollView style={{flex:1}}
           refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
          >
          {this.state.walks.map(dog => <WalkScreen key={dog.id} dog={dog} fetchWalkDogs={this.fetchWalkDogs} navigation={this.props.navigation}  />)}
          </ScrollView>
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
    textDecorationColor: "white"
  }
})