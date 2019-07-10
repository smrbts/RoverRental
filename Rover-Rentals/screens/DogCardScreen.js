import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native'
import DogInfo from '../components/DogInfo'


export default class DogCardScreen extends React.Component 
{ 
  constructor(props)
  {
    super(props)
    this.state = 
    {
      openDogs: [],
      walks: []
    }
  }

    componentDidMount()
    {
      fetch('http://localhost:3000/dogs')
      .then(res => res.json())
      .then(data => 
        {
          this.setState({
            openDogs: data
          })
        })
    }
  
  render() 
  {
    return (
        <View style={styles.container}>
          <ScrollView style={{flex:1}}>
          {this.state.openDogs.map(dog => <DogInfo key={dog.id} dog={dog} navigation={this.props.navigation}  />)}
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71A9F7',
    alignContent: 'center',
    justifyContent: 'center',
  },
})