import React from 'react'
import { View, Text, Image } from 'react-native'
import DogSpecs from './DogSpecs'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class DogInfo extends React.Component
{
    state = 
    {
        clicked: false,
        booked: this.props.booked? true : false
    }

    handleSpecsPress = () => 
    {
        this.setState(
        {
            clicked: !this.state.clicked
        })
    }
    render()
    {
        console.log(this.state.clicked)
        return(
            <Card
            title='Spot'
            image={require('../assets/Dog.png')}>
            <Text style={{marginBottom: 10}}>
               Dog Card Sample
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                onPress={this.handleSpecsPress}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title={this.state.clicked? "Hide Info" : 'More about me!' }
                >
                {this.state.clicked ? <DogSpecs dog = {this.props.dog}/> : null} 
            </Button>
            </Card>
        )
    }
}