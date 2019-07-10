import React from 'react'
import { View, Text, Image } from 'react-native'
import DogSpecScreen from './DogSpecScreen'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class DogInfo extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            clicked: false,
            booked: this.props.booked? true : false
        }
    }
  

    handleSpecsPress = () => 
    {
        this.setState(
        {
            clicked: !this.state.clicked
        })
    }

    componentDidMount()
    {

    }
    
    render()
    {
        return(
            <Card
            title={this.props.dog.name}
            image={{uri: 'https://loremflickr.com/320/240/dog'}}
            imageStyle={{flex:1}}

            >
            <Text style={{marginBottom: 10}}>
               Want to walk with me? Click below!
            </Text>
            <Button
                icon={<Icon name='pets' color='#ffffff' />}
                backgroundColor='#03A9F4'
                onPress={this.handleSpecsPress}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#8DA9C4'}}
                title={this.state.clicked? "Hide Info" : 'More about me!' }
                >
            </Button>
            {this.state.clicked ? <DogSpecScreen dog={this.props.dog} navigation={this.props.navigation}/> : null} 
            </Card>
        )
    }
}