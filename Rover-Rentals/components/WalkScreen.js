import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class WalkScreen extends React.Component 
{
  constructor(props)
  {
    super(props)
  }

  render() 
  {
    return (
     <Card
            title={this.props.dog.dog.name}
            image={{uri: 'https://loremflickr.com/320/240/dog'}}
            imageStyle={{flex:1}}
            >
       <Text style={{marginBottom: 10}}>
          Your walk is scheduled, please follow instructions in the email we sent you!
       </Text>
            </Card>
    );
  }
}

