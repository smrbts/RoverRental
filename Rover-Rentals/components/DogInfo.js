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

    componentDidMount()
    {

    }
    
    render()
    {
        console.log(this.state.clicked)
        return(
            <Card
            title='Spot'
            image={require('../assets/Dog.png')}>
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
            {this.state.clicked ? <DogSpecs dog = {this.props.dog}/> : null} 
            </Card>
        )
    }
}