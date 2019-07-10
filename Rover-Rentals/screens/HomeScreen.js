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
import { Card, ListItem, Button, Icon, Image, Text } from 'react-native-elements'
import { fetchUpdateAsync } from 'expo/build/Updates/Updates';







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

  render() 
  {
    return (
      <View style={styles.container}>
        <Text h4> View Your Scheduled Walks:</Text>
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